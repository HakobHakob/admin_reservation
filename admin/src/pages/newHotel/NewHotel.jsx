import { useState } from "react"
import { Navbar } from "../../components/navbar/Navbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import Loading from "../../components/Loading/Loading"
import * as Styled from "./Styled"
import { hotelInputs } from "../../sources/formSourse"
import useFetch from "../../customHooks/useFetch"
import axios from "axios"
import { basePath } from "../../components/config"
import { useNavigate, useLocation } from "react-router-dom"

export const NewHotel = () => {
  const [files, setFiles] = useState("")
  const [info, setInfo] = useState({})
  const [rooms, setRooms] = useState([])
  const { data, loading} = useFetch(
    `${basePath}/rooms`
  )
  const navigate = useNavigate()
  const location = useLocation()
  const lastIndex = location.pathname.lastIndexOf("/")
  const path = location.pathname.slice(0, lastIndex)

  const setHotelInfo = (e) => {
    setInfo((prew) => ({ ...prew, [e.target.id]: e.target.value }))
  }

  const selectRoom = (e) => {
    const roomsId = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    ) // Take option and return me option.value only
    setRooms(roomsId)
  }

  const sendFormData = async (e) => {
    e.preventDefault()

    try {
      // For uploading all images
      const imagesList = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData()
          data.append("file", file)
          data.append("upload_preset", "upload")
          const uploadResponse = await axios.post(
            "https://api.cloudinary.com/v1_1/dh86i65hd/image/upload",
            data
          )
          const { url } = uploadResponse.data
          return url
        })
      )
      const newHotel = {
        ...info,
        rooms,
        photos: imagesList,
      }
      await axios.post(`${basePath}/hotels`, newHotel, {
        withCredentials: true,
      })
      navigate(`${path}`)
    } catch (error) {
      console.error("Something went wrong when sending the new hotel form data.", error)
    }
  }

  return (
    <Styled.New>
      <Sidebar />

      <Styled.NewContainer>
        <Navbar />
        <Styled.Top>
          <Styled.TopTitle>Add new hotel</Styled.TopTitle>
        </Styled.Top>

        <Styled.Bottom>
          <Styled.BottomLeft>
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
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
                  multiple
                  onChange={(e) => {
                    setFiles(e.target.files)
                  }}
                  style={{ display: "none" }}
                />
              </Styled.FormInput>

              {hotelInputs.map((input) => (
                <Styled.FormInput key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={setHotelInfo}
                  />
                </Styled.FormInput>
              ))}
              <Styled.FormInput>
                <label>Featured</label>
                <select id="featured" onChange={setHotelInfo}>
                  <option value={false}>No</option>
                  <option value={true}> Yes</option>
                </select>
              </Styled.FormInput>

              <Styled.SelectRooms>
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <label>Rooms</label>
                    <select id="rooms" multiple onChange={selectRoom}>
                      {data &&
                        data.map((room) => (
                          <optgroup key={room._id} label={room.title}>
                            <option value={room._id}>{room.desc}</option>
                          </optgroup>
                        ))}
                    </select>
                  </>
                )}
              </Styled.SelectRooms>

              <Styled.SendBtn onClick={sendFormData}>Send</Styled.SendBtn>
            </form>
          </Styled.BottomRight>
        </Styled.Bottom>
      </Styled.NewContainer>
    </Styled.New>
  )
}
