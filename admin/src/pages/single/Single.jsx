import * as Styled from "./Styled"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import { Chart } from "../../components/chart/Chart"
import { List } from "../../components/table/Table"
import { useLocation } from "react-router-dom"

import useFetch from "../../customHooks/useFetch"
import {
  defaultUrl,
  setDataUrl,
  setHotelImgSrc,
} from "../../components/functions/functions"

export const Single = () => {
  const location = useLocation()
  const { data } = useFetch(setDataUrl(location))

  return (
    <Styled.Single>
      <Sidebar />

      <Styled.SingleContainer>
        <Navbar />
        <Styled.SingleTop>
          <Styled.TopLeft>
            <Styled.EditButton>Edit</Styled.EditButton>
            <Styled.Title>Information</Styled.Title>
            <Styled.Item>
              <img
                src={setHotelImgSrc(data, location) || defaultUrl}
                alt=""
                className="itemImg"
              />
              <Styled.Details>
                <Styled.ItemTitle>{data.username} Doe</Styled.ItemTitle>
                <Styled.DetailItem>
                  <span className="itemKey">Email:</span>
                  <span className="itemKey">{data.email}</span>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <span className="itemKey">Phone:</span>
                  <span className="itemKey">
                    {data.phone || "+1 2345 67 89"}
                  </span>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <span className="itemKey">Address:</span>
                  <span className="itemKey">{data.address}</span>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <span className="itemKey">Country:</span>
                  <span className="itemKey">{data.country}</span>
                </Styled.DetailItem>
              </Styled.Details>
            </Styled.Item>
          </Styled.TopLeft>
          <Styled.TopRight>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </Styled.TopRight>
        </Styled.SingleTop>
        <Styled.SingleBottom>
          <Styled.Title>Last Transactions</Styled.Title>
          <List />
        </Styled.SingleBottom>
      </Styled.SingleContainer>
    </Styled.Single>
  )
}
