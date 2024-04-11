import { useContext } from "react"
import * as Styled from "./Styled"
import { DarkModeContext } from "../../context/darkModeReducer"

export const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <Styled.Navbar className="navbar">
      <Styled.Wrapper>
        <Styled.Search className="search">
          <input type="text" placeholder="Search..." />
          <Styled.StyledSearchIcon />
        </Styled.Search>

        <Styled.Items>
          <Styled.Item>
            <Styled.StyledLanguageIcon />
            English
          </Styled.Item>
          <Styled.Item>
            <Styled.StyledDarkModeIcon
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </Styled.Item>
          <Styled.Item>
            <Styled.StyledFullscreenIcon />
          </Styled.Item>
          <Styled.Item>
            <Styled.StyledNotificationsIcon />
            <Styled.Counter>1</Styled.Counter>
          </Styled.Item>
          <Styled.Item>
            <Styled.StyledChatBubble />
            <Styled.Counter>2</Styled.Counter>
          </Styled.Item>
          <Styled.Item>
            <Styled.StyledListIcon />
          </Styled.Item>
          <Styled.Item>
            <Styled.Avatar
              src="https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </Styled.Item>
        </Styled.Items>
      </Styled.Wrapper>
    </Styled.Navbar>
  )
}
