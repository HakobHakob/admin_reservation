import styled from "styled-components"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import Inventory2Icon from "@mui/icons-material/Inventory2"
import ListAltIcon from "@mui/icons-material/ListAlt"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import AssessmentIcon from "@mui/icons-material/Assessment"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined"
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined"

const primaryColor = "#6439ff"
const lightMode = "white"
const whiteSmoke= "whiteSmoke"
const dark = "#333"
const darkBlue = "darkBlue"

export const Sidebar = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: ${lightMode};
  hr {
    height: 0;
    border: 0.5px solid rgb(230, 227, 227);
  }
`

export const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TopSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${primaryColor};
`

export const Center = styled.div`
  padding-left: 10px;
`

export const DashboardList = styled.ul``
export const DashboardTitle = styled.p`
  font-size: 10px;
  font-weight: 700;
  color: #999;
  margin: 15px 0 10px;
`
export const DashboardLi = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ece8ff;
  }
`
export const DashboardLiSpan = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #888;
`
export const Bottom = styled.div`
display: flex;
align-items: center;
gap:10px;
padding: 10px;

`

export const ColorOptions = styled.div`
width: 20px;
height: 20px;
border-radius: 5px;
border:1px solid ${primaryColor};
cursor:pointer;

&:nth-child(1){
  background-color:${whiteSmoke};
}
&:nth-child(2){
  background-color:${dark};
}
/* &:nth-child(3){
  background-color:${darkBlue};
} */
`

export const StyledIcon = styled.svg`
  color: ${primaryColor};
  font-size: 18px;

`

export const StyledDashboardIcon = styled(StyledIcon).attrs({
  as: DashboardIcon,
})``

export const StyledPersonOutlineOutlinedIcon = styled(StyledIcon).attrs({
  as: PersonOutlineOutlinedIcon,
})``
export const StyledInventory2Icon = styled(StyledIcon).attrs({
  as: Inventory2Icon,
})``

export const StyledListAltIcon = styled(StyledIcon).attrs({
  as: ListAltIcon,
})``

export const StyledLocalShippingIcon = styled(StyledIcon).attrs({
  as: LocalShippingIcon,
})``

export const StyledAssessmentIcon = styled(StyledIcon).attrs({
  as: AssessmentIcon,
})``

export const StyledNotificationsNoneOutlinedIcon = styled(StyledIcon).attrs({
  as: NotificationsNoneOutlinedIcon,
})``

export const StyledSettingsSystemDaydreamOutlinedIcon = styled(
  StyledIcon
).attrs({
  as: SettingsSystemDaydreamOutlinedIcon,
})``

export const StyledPsychologyOutlinedIcon = styled(StyledIcon).attrs({
  as: PsychologyOutlinedIcon,
})``

export const StyledSettingsOutlinedIcon = styled(StyledIcon).attrs({
  as: SettingsOutlinedIcon,
})``

export const StyledAccountCircleOutlinedIcon = styled(StyledIcon).attrs({
  as: AccountCircleOutlinedIcon,
})``

export const StyledExitToAppOutlinedIcon = styled(StyledIcon).attrs({
  as: ExitToAppOutlinedIcon,
})``
