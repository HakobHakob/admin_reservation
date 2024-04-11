import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"
import LanguageIcon from "@mui/icons-material/Language"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"

export const Navbar = styled.div`
  height: 50px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 3px;

  input {
    border: none;
    outline: none;
    background-color: transparent;

    &::placeholder {
      font-size: 12px;
    }
  }
`

export const SearchInput = styled.input``

export const Items = styled.div`
  display: flex;
  align-items: center;




`
export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
`
export const Counter = styled.div`
width: 15px;
height: 15px;
background-color: red;
border-radius: 50%;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 10px;
font-weight: 700;
position: absolute;
top: -5px;
right: -5px;
`

export const Avatar = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;

`

export const StyledIcon = styled.svg`
  font-size: 20px;
`

export const StyledSearchIcon = styled(StyledIcon).attrs({
  as: SearchIcon,
})``
export const StyledLanguageIcon = styled(StyledIcon).attrs({
  as: LanguageIcon,
})``
export const StyledDarkModeIcon = styled(StyledIcon).attrs({
  as: DarkModeOutlinedIcon,
})``
export const StyledFullscreenIcon = styled(StyledIcon).attrs({
  as: FullscreenExitOutlinedIcon,
})``

export const StyledNotificationsIcon = styled(StyledIcon).attrs({
  as: NotificationsOutlinedIcon,
})``
export const StyledChatBubble = styled(StyledIcon).attrs({
  as: ChatBubbleOutlineOutlinedIcon,
})``
export const StyledListIcon = styled(StyledIcon).attrs({
  as: ListOutlinedIcon,
})``
