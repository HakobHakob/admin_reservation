import styled from "styled-components"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"

export const Widget = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px;
  /* box-shadow CSS generator in google html-css-js.com/css/generator/box-shadow/*/
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const LeftTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: rgb(160, 160, 160);
`
export const LeftCounter = styled.span`
  font-size: 28px;
  font-weight: 300;
`
export const LeftLink = styled.span`
  width: max-content;
  font-size: 12px;
  border-bottom: 1px solid gray;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Percentage = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  &.positive {
    color: green;
  }
  &.negative {
    color: red;
  }
`

const StyledArrIcon = styled.svg`
  font-size: 20px;
`

export const StyledArrowUpIcon = styled(StyledArrIcon).attrs({
  as: KeyboardArrowUpOutlinedIcon,
})``
const StyledIMGIcon = styled.svg`
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  align-self: flex-end;
  color: crimson;
  background-color: rgba(255, 0, 0, 0.2);
`

export const StyledPersonIcon = styled(StyledIMGIcon).attrs({
  as: PersonOutlineOutlinedIcon,
})``

const StyledShoppingCartIcon = styled.svg`
  font-size: 20px;
  align-self: flex-end;
  color: goldenrod;
  background-color: rgba(218, 165, 32, 0.2);
`
export const StyledShoppingIcon = styled(StyledShoppingCartIcon).attrs({
  as: ShoppingCartOutlinedIcon,
})``
const StyledMonetization = styled.svg`
  font-size: 20px;
  align-self: flex-end;
  color: green;
  background-color: rgba(0, 128, 0, 0.2);
`
export const StyledMonetizationIcon = styled(StyledMonetization).attrs({
  as: MonetizationOnOutlinedIcon,
})``
const StyledBalance = styled.svg`
  font-size: 20px;
  align-self: flex-end;
  color: purple;
  background-color: rgba(128,0,128,0.2);
`
export const StyledBalanceIcon = styled(StyledBalance).attrs({
  as: AccountBalanceWalletOutlinedIcon,
})``
