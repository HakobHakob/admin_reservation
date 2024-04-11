import styled from "styled-components"

export const Home = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  flex: 6;
`

export const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`

export const Charts = styled(Widgets)`
  padding: 5px 20px;
`

export const ListContainer = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`

export const ListTitle = styled.div`
  font-weight: 500;
  color: grey;
  margin-bottom: 15px;
`
