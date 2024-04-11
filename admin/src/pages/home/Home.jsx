import { Chart } from "../../components/chart/Chart"
import { Featured } from "../../components/featured/Featured"
import { Navbar } from "../../components/navbar/Navbar"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { List } from "../../components/table/Table"
import { Widget } from "../../components/widget/Widget"
import * as Styled from "./Styled"

export const Home = () => {
  return (
    <Styled.Home>
      <Sidebar />
      <Styled.HomeContainer>
        <Navbar />
        <Styled.Widgets>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </Styled.Widgets>

        <Styled.Charts>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </Styled.Charts>
        <Styled.ListContainer>
          <Styled.ListTitle>Latest Transactions</Styled.ListTitle>
          <List />
        </Styled.ListContainer>
      </Styled.HomeContainer>
    </Styled.Home>
  )
}
