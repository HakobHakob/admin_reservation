import { useState } from "react"
import { Navbar } from "../../components/navbar/Navbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import axios from "axios"
import * as Styled from "./Styled"
import { basePath } from "../../components/config"
import { useNavigate, useLocation } from "react-router-dom"

export const New = ({ inputs, title }) => {
  const [file, setFile] = useState("")
  const [info, setInfo] = useState({})
  const navigate = useNavigate()
  const location = useLocation()
  const lastIndex = location.pathname.lastIndexOf("/")
  const path = location.pathname.slice(0, lastIndex)

  const setUserInfo = (e) => {
    setInfo((prew) => ({ ...prew, [e.target.id]: e.target.value }))
  }

  const sendInfo = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append("file", file)
    data.append("upload_preset", "upload") // From picture number 3 cloudinary

    try {
      // dh86i65hd => Cloud name from cloudinary
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dh86i65hd/image/upload",
        data
      )
      const { url } = uploadRes.data
      const newUser = {
        ...info,
        img: url,
      }
      await axios.post(`${basePath}/auth/register`, newUser, {
        withCredentials: true,
      })
      navigate(`${path}`)
    } catch (error) {
      console.error(
        "Image uploading error.There isn't choosen any image.",
        error
      )
    }
  }

  return (
    <Styled.New>
      <Sidebar />

      <Styled.NewContainer>
        <Navbar />
        <Styled.Top>
          <Styled.TopTitle>{title}</Styled.TopTitle>
        </Styled.Top>

        <Styled.Bottom>
          <Styled.BottomLeft>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </Styled.BottomLeft>

          <Styled.BottomRight>
            <form>
              <Styled.FormInput>
                <label htmlFor="file">
                  Image:
                  <Styled.StyledUploadIcon />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {
                    setFile(e.target.files[0])
                  }}
                  style={{ display: "none" }}
                />
              </Styled.FormInput>

              {inputs.map((input) => (
                <Styled.FormInput key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={setUserInfo}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </Styled.FormInput>
              ))}

              <Styled.SendBtn onClick={sendInfo}>Send</Styled.SendBtn>
            </form>
          </Styled.BottomRight>
        </Styled.Bottom>
      </Styled.NewContainer>
    </Styled.New>
  )
}
