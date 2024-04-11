import styled from "styled-components"

export const Single = styled.div`
  display: flex;
  width: 100%;
`

export const SingleContainer = styled.div`
  flex: 6;
`

export const SingleTop = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`

export const TopLeft = styled.div`
  flex: 1;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  position: relative;
`

export const Title = styled.h1`
  font-size: 16px;
  color: lightgray;
  margin-bottom: 20px;
`
export const Item = styled.div`
  display: flex;
  gap: 20px;

  .itemImg {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const EditButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
  color: #7451f8;
  background-color: #7551f818;
  cursor: pointer;
  border-radius: 0px 0px 0px 5px;
`

export const Details = styled.div``

export const ItemTitle = styled.h1`
  margin-bottom: 10px;
  color: #555;
`
export const DetailItem = styled.div`
  margin-bottom: 10px;
  font-size: 14px;

  .itemKey {
    font-weight: bold;
    color: gray;
    margin-right: 5px;
  }

  .itemValue {
    font-weight: 300;
  }
`

export const TopRight = styled.div`
  flex: 2;
`

export const SingleBottom = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 10px 20px;
`
