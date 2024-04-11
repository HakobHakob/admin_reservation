import * as Styled from "./Styled"
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { data } from "./util"

export const Chart = ({ aspect, title }) => {
  return (
    <Styled.Chart>
      <Styled.ChartTitle>{title}</Styled.ChartTitle>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total" // Set the same name from data.Total
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)" //Set tne same is of <linearGradient id="total"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Styled.Chart>
  )
}
