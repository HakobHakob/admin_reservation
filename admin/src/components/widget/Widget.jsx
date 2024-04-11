import * as Styled from "./Styled"

import React from "react"

export const Widget = ({ type }) => {
  let data

  // temporary
  const amount = 100
  const diff  = 20
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <Styled.StyledPersonIcon />,
      }
      break
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <Styled.StyledShoppingIcon />,
      }
      break
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <Styled.StyledMonetizationIcon />,
      }
      break
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <Styled.StyledBalanceIcon />,
      }
      break
    default:
      break
  }

  return (
    <Styled.Widget>
      <Styled.Left>
        <Styled.LeftTitle>{data.title}</Styled.LeftTitle>
        <Styled.LeftCounter>{data.isMoney && "$"} {amount}</Styled.LeftCounter>
        <Styled.LeftLink>{data.link}</Styled.LeftLink>
      </Styled.Left>
      <Styled.Right>
        <Styled.Percentage className="positive">
          <Styled.StyledArrowUpIcon />
          {diff}%
        </Styled.Percentage>
        {data.icon}
      </Styled.Right>
    </Styled.Widget>
  )
}
