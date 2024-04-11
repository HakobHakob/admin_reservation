import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import * as Styled from "./Styled"
import Datatable from "../../components/datatable/Datatable"

export const List = ({ columns }) => {
  return (
    <Styled.List>
      <Sidebar />
      <Styled.ListContainer>
        <Navbar />
        <Datatable columns={columns}/>
      </Styled.ListContainer>
    </Styled.List>
  )
}
