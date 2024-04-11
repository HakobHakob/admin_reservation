import { BrowserRouter ,Routes,Route, Navigate   } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { List } from "./pages/list/List"
import { Single } from "./pages/single/Single"
import { New } from "./pages/new/New"
import { userInputs } from "./sources/formSourse"
import * as Styled from "./style/Dark"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeReducer"
import { AuthContext } from "./context/AuthContext"
import {
  hotelColumns,
  roomColumns,
  userColumns,
} from "./sources/datatablesourse"
import { NewHotel } from "./pages/newHotel/NewHotel"
import { NewRoom } from "./pages/newRoom/NewRoom"
import { routePrefix } from "./components/config"
import { SingleHotel } from "./pages/singleHotel/singleHotel"
import { SingleRoom } from "./pages/singleRoom/singleRoom"

function App() {
  const { darkMode } = useContext(DarkModeContext)

  // Պաշտպանված ռոութ
  /**
   * We are gonna wrap our routes in this ProtectedRoute.
   * For example if you are not admin you are not to able to load <Home /> page
   * children =>  our pages.
   */
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    // if user is Admin
    if (!user) {
      return <Navigate to={`/${routePrefix}/login`} />
    }
    return children
  }

  return (
    <Styled.App>
      <div className={darkMode ? "App dark" : "App"}>
        <BrowserRouter>        
          <Routes>
            <Route path={routePrefix}>
              <Route path="login" element={<Login />} />
              <Route index element={ <ProtectedRoute><Home /></ProtectedRoute>}/>
              <Route path="users"> 
                <Route index element={<ProtectedRoute><List columns={userColumns} /></ProtectedRoute>}/>
                <Route path=":userId" element={<ProtectedRoute><Single /></ProtectedRoute>}/>
                <Route path="new" element={ <ProtectedRoute> <New inputs={userInputs} title="Add new User" /> </ProtectedRoute>}/>
              </Route>
              <Route path="hotels">
                <Route index element={<ProtectedRoute><List columns={hotelColumns} /></ProtectedRoute>}/>
                <Route path=":productId" element={<ProtectedRoute><SingleHotel /></ProtectedRoute>}/>
                <Route path="new" element={<ProtectedRoute><NewHotel /></ProtectedRoute>}/>
              </Route>
              <Route path="rooms">
                <Route index element={<ProtectedRoute><List columns={roomColumns} /> </ProtectedRoute>}/>
                <Route path=":productId" element={<ProtectedRoute><SingleRoom /></ProtectedRoute>}/>
                <Route path="new" element={<ProtectedRoute><NewRoom /></ProtectedRoute>}/>
              </Route>
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
       
        </BrowserRouter>
      </div>
    </Styled.App>
  )
}

export default App
