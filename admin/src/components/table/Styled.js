import styled from "styled-components"

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;

  .image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
`
export const StatusSpan = styled.span`
  padding: 5px;
  border-radius: 5px;

  &.Approved{
    color: green;
    background-color: rgba(0,128,0,0.151);
  }
  &.Pending{
    color: goldenrod;
    background-color: rgba(189,189,3,0.103);
  }
`
