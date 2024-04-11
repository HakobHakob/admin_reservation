import { useContext } from "react"
import * as Styled from "./Styled"
import { Link } from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeReducer"
import { routePrefix } from "../config"

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <Styled.Sidebar className="sidebar ">
      <Styled.Top className="top">
        <Link to={`/${routePrefix}` } style={{ textDecoration: "none" }}>
          <Styled.TopSpan className="logo">Logo</Styled.TopSpan>
        </Link>
      </Styled.Top>
      <hr />
      <Styled.Center>
        <Styled.DashboardList>
          <Styled.DashboardTitle>MAIN</Styled.DashboardTitle>
          <Styled.DashboardLi>
            <Styled.StyledDashboardIcon />
            <Styled.DashboardLiSpan>Dashboard</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardTitle>LISTS</Styled.DashboardTitle>
          <Styled.DashboardLi>
            <Styled.StyledPersonOutlineOutlinedIcon />
            <Link to={`/${routePrefix}/users` } style={{ textDecoration: "none" }}>              
              <Styled.DashboardLiSpan>Users</Styled.DashboardLiSpan>
            </Link>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledInventory2Icon />
            <Link to={`/${routePrefix}/hotels` } style={{ textDecoration: "none" }}>
              <Styled.DashboardLiSpan>Hotels</Styled.DashboardLiSpan>
            </Link>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledInventory2Icon />
            <Link to={`/${routePrefix}/rooms` } style={{ textDecoration: "none" }}>
              <Styled.DashboardLiSpan>Rooms</Styled.DashboardLiSpan>
            </Link>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledListAltIcon />
            <Styled.DashboardLiSpan>Delivery</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardTitle>USEFUL</Styled.DashboardTitle>
          <Styled.DashboardLi>
            <Styled.StyledAssessmentIcon />
            <Styled.DashboardLiSpan>Stats</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledNotificationsNoneOutlinedIcon />
            <Styled.DashboardLiSpan>Notifications</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardTitle>SERVICE</Styled.DashboardTitle>
          <Styled.DashboardLi>
            <Styled.StyledSettingsSystemDaydreamOutlinedIcon />
            <Styled.DashboardLiSpan>System Health</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledPsychologyOutlinedIcon />
            <Styled.DashboardLiSpan>Logs</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledSettingsOutlinedIcon />
            <Styled.DashboardLiSpan>Settings</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardTitle>USER</Styled.DashboardTitle>
          <Styled.DashboardLi>
            <Styled.StyledAccountCircleOutlinedIcon />
            <Styled.DashboardLiSpan>Profile</Styled.DashboardLiSpan>
          </Styled.DashboardLi>

          <Styled.DashboardLi>
            <Styled.StyledExitToAppOutlinedIcon />
            <Styled.DashboardLiSpan>Logout</Styled.DashboardLiSpan>
          </Styled.DashboardLi>
        </Styled.DashboardList>
      </Styled.Center>
      <Styled.Bottom>
        <Styled.ColorOptions
          onClick={() => dispatch({ type: "LIGHT" })}
        ></Styled.ColorOptions>
        <Styled.ColorOptions
          onClick={() => dispatch({ type: "DARK" })}
        ></Styled.ColorOptions>
        {/* <Styled.ColorOptions></Styled.ColorOptions> */}
      </Styled.Bottom>
    </Styled.Sidebar>
  )
}
