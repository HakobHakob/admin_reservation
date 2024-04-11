import styled from "styled-components"
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload"

export const New = styled.div`
  width: 100%;
  display: flex;
`

export const NewContainer = styled.div`
  flex: 6;
`
const ContsinerStyles = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  margin: 20px;
  display: flex;
`
export const Top = styled(ContsinerStyles)``
export const TopTitle = styled.h1`
  color: lightgray;
  font-size: 20px;
`
export const Bottom = styled(ContsinerStyles)``

export const BottomRight = styled.div`
  flex: 2;

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }
`

export const FormInput = styled.div`
  width: 40%;

  label {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
      cursor: pointer;
    }
  }

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #999;
    }
  }

  option {
    margin: 8px 10px;
    cursor: pointer;
    background-color: lightgrey;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  input {
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid gray;
  }
`

export const StyledIcon = styled.svg`
  font-size: 18px;
`

export const StyledUploadIcon = styled(StyledIcon).attrs({
  as: DriveFolderUploadIcon,
})``

export const SendBtn = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: none;
  background-color: teal;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  cursor: pointer;

  &:focus {
    border: 1px solid rgb(0, 208, 255);
  }
`
