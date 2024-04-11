import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import * as Styled from "./Styled"
import { basePath } from "../../components/config"

// axios.defaults.withCredentials = true

export const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })
  const { loading, error, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = (e) => {
    // id =>get wrong input's id
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" })

    try {
      const res = await axios.post(
        `${basePath}/auth/login`,
        credentials,
        {
          withCredentials: true, // Necessary to receive cookies
        }
      )
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
        navigate("/admin")
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        })
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data })
    }
  }

  return (
    <Styled.Login>
      <Styled.LoginContainer>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <Styled.LoginBtn disabled={loading} onClick={handleLogin}>
          Login
        </Styled.LoginBtn>
        {error && <span>{error.message}</span>}
      </Styled.LoginContainer>
    </Styled.Login>
  )
}
