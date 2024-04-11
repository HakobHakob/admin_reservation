import * as Styled from "./Styled"
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import { Chart } from "../../components/chart/Chart"
import { List } from "../../components/table/Table"
import { useLocation } from "react-router-dom"
import useFetch from "../../customHooks/useFetch"
import {
  defaultUrl,
  setDataUrl,
} from "../../components/functions/functions"

export const SingleRoom = () => {
  const location = useLocation()
  const { data } = useFetch(setDataUrl(location))

  return (
    <Styled.Single>
      <Sidebar />
      <Styled.SingleContainer>
        <Navbar />
        <Styled.SingleTop>
          <Styled.TopLeft>
            <Styled.EditButton>Edit</Styled.EditButton>
            <Styled.Title>Information</Styled.Title>
            <Styled.Item>
              <img src={defaultUrl} alt="" className="itemImg" />
              <Styled.Details>
                <Styled.ItemTitle>{data.title || "There is  no info"} </Styled.ItemTitle>
                <Styled.DetailItem>
                  <span className="itemKey">Description:</span>
                  <span className="itemKey">{data?.desc || "There is  no info"}</span>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <span className="itemKey">Price:</span>
                  <span className="itemKey">{data?.price || "There is  no info"}$ per day</span>
                </Styled.DetailItem>
                <Styled.DetailItem>
                  <span className="itemKey">Max.people:</span>
                  <span className="itemKey">{data?.maxPeople || "There is  no info"}</span>
                </Styled.DetailItem>
              </Styled.Details>
            </Styled.Item>
          </Styled.TopLeft>
          <Styled.TopRight>
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </Styled.TopRight>
        </Styled.SingleTop>
        <Styled.SingleBottom>
          <Styled.Title>Last Transactions</Styled.Title>
          <List />
        </Styled.SingleBottom>
      </Styled.SingleContainer>
    </Styled.Single>
  )
}
