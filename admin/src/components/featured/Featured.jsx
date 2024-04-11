import { CircularBar } from "./CircularBar.jsx"
import * as Styled from "./Style.js"
import React from "react"

export const Featured = () => {
  return (
    <Styled.Featured>
      <Styled.Top>
        <Styled.TopTitle>Total Revenue</Styled.TopTitle>
        <Styled.StyledVertIcon fontSize="small" />
      </Styled.Top>
      <Styled.Bottom>
        <Styled.FeaturedChart>
          <CircularBar />
          <Styled.TotalSalesTitle>
            Total sales made today
          </Styled.TotalSalesTitle>
          <Styled.Amount>$420</Styled.Amount>
          <Styled.Description>
            Previous transaction processing.Last payments may not be included
          </Styled.Description>

          <Styled.Summary>
            <Styled.Item>
              <Styled.ItemTitle>Target</Styled.ItemTitle>
              <Styled.ItemResult className="negative">
                <Styled.StyledArrowDownIcon fontSize="small" />
                <Styled.ResultAmount>$12.4K</Styled.ResultAmount>
              </Styled.ItemResult>
            </Styled.Item>
            <Styled.Item>
              <Styled.ItemTitle>Last week</Styled.ItemTitle>
              <Styled.ItemResult className="positive">
                <Styled.StyledArrowUpIcon fontSize="small" />
                <Styled.ResultAmount>$12.4K</Styled.ResultAmount>
              </Styled.ItemResult>
            </Styled.Item>
            <Styled.Item>
              <Styled.ItemTitle>Last Month</Styled.ItemTitle>
              <Styled.ItemResult className="positive">
                <Styled.StyledArrowUpIcon fontSize="small" />
                <Styled.ResultAmount>$12.4K</Styled.ResultAmount>
              </Styled.ItemResult>
            </Styled.Item>
          </Styled.Summary>
        </Styled.FeaturedChart>
      </Styled.Bottom>
    </Styled.Featured>
  )
}
