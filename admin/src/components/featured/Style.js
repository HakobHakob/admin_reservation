import styled from "styled-components"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export const Featured = styled.div`
  flex: 2;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
`

export const TopTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
`

const StyledIcons = styled.svg``
export const StyledVertIcon = styled(StyledIcons).attrs({
  as: MoreVertIcon,
})``

export const Bottom = styled.div``

// Circular Progressbar https://codepen.io/sergiopedercini/pen/jmKdbj
export const FeaturedChart = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .flex-wrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  .single-chart {
    width: 33%;
    justify-content: space-around;
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 2.8;
  }

  .circle {
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart.blue .circle {
    stroke: #3c9ee5;
  }

  .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`

export const TotalSalesTitle = styled.p`
  font-weight: 500;
  color: grey;
`
export const Amount = styled.p`
  font-size: 30px;
`
export const Description = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: grey;
  text-align: center;
`

export const Summary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Item = styled.div`
  text-align: center;
`

export const ItemTitle = styled.div`
  font-size: 14px;
  color: gray;
`
export const ItemResult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;

  &.positive {
    color:green;
  }
  &.negative {
    color:red;
  }
`
export const ResultAmount = styled.div``

const StyledArrIcon = styled.svg`
  font-size: 20px;
`

export const StyledArrowUpIcon = styled(StyledArrIcon).attrs({
  as: KeyboardArrowUpOutlinedIcon,
})``
export const StyledArrowDownIcon = styled(StyledArrIcon).attrs({
  as: KeyboardArrowDownIcon,
})``
