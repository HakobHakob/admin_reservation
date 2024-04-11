import { useState } from "react"
import { Navbar } from "../../components/navbar/Navbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { roomInputs } from "../../sources/formSourse"
import useFetch from "../../customHooks/useFetch"
import * as Styled from "./Styled"
import Loading from "../../components/Loading/Loading"
import axios from "axios"
import { basePath } from "../../components/config"
import { useNavigate, useLocation } from "react-router-dom"

export const NewRoom = () => {
  const [info, setInfo] = useState({
    title: null,
    price: null,
    maxPeople: null,
    desc: null,
  })
  const [hotelId, setHotelId] = useState(null)
  const [rooms, setRooms] = useState([])
  const { data, loading } = useFetch(`${basePath}/hotels`)
  const navigate = useNavigate()
  const location = useLocation()
  const lastIndex = location.pathname.lastIndexOf("/")
  const path = location.pathname.slice(0, lastIndex)

  const setInputValues = (e, inputID) => {
    let val =
      inputID === "price" || inputID === "maxPeople"
        ? Number(e.target.value)
        : e.target.value
    setInfo((prev) => ({ ...prev, [inputID]: val }))

    // Validate required fields
    const { title, price, maxPeople, desc } = info
    if (!title || !price || !maxPeople || !desc) {
      console.error(
        "Please fill in all required fields: Title, Price, Max People, and Description."
      )
      return
    }
  }

  const sendFormData = async (e) => {
    e.preventDefault()
    const roomNumbers = rooms.split(",").map((room) => {
      return { number: Number(room) }
    })
    if (!hotelId) {
      console.error("Please select a hotel before submitting the form.")
      return
    }

    try {
      await axios.post(
        `${basePath}/rooms/${hotelId}`,
        {
          ...info,
          roomNumbers,
        },
        { withCredentials: true }
      )
      navigate(`${path}`)
    } catch (error) {
      console.error(
        "Something went wrong when sending the new room form data.",
        error.response.data
      )
    }
  }

  return (
    <Styled.New>
      <Sidebar />

      <Styled.NewContainer>
        <Navbar />
        <Styled.Top>
          <Styled.TopTitle>Add new room</Styled.TopTitle>
        </Styled.Top>
        <Styled.Bottom>
          <Styled.BottomRight>
            <form>
              {roomInputs.map((input) => (
                <Styled.FormInput key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.type}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={(e) => setInputValues(e, input.id)}
                  />
                </Styled.FormInput>
              ))}
              <Styled.FormInput>
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers."
                ></textarea>
              </Styled.FormInput>
              <Styled.FormInput>
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <label>Choose a hotel</label>
                    <select
                      id="hotelId"
                      onChange={(e) => setHotelId(e.target.value)} //e.target.value is our hotelID>
                    >
                      {data &&
                        data.map((hotel) => (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        ))}
                    </select>
                  </>
                )}
              </Styled.FormInput>

              <Styled.SendBtn onClick={sendFormData}>Send</Styled.SendBtn>
            </form>
          </Styled.BottomRight>
        </Styled.Bottom>
      </Styled.NewContainer>
    </Styled.New>
  )
}
