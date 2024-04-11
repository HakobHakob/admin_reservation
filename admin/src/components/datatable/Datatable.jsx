import * as Styled from "./Styled"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import useFetch from "../../customHooks/useFetch"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import { basePath, routePrefix } from "../../components/config.js"

const Datatable = ({ columns }) => {
  const location = useLocation()
  const path = location.pathname.slice(`/${routePrefix}`.length)
  const apiPath = path.split("/")[1]

  const [list, setList] = useState([])
  const { data } = useFetch(`${basePath}/${apiPath}`)

  useEffect(() => {
    setList(data)
  }, [data])

  const deleteDataRow = async (paramsRowId) => {
    try {
      await axios.delete(`${basePath}/${apiPath}/${paramsRowId}`, {
        withCredentials: true,
      })
      setList(list.filter((item) => item._id !== paramsRowId))
    } catch (error) {
      console.error("Error deleting row:", error)
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Styled.CellAction>
            <Link
              to={`${location.pathname}/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => deleteDataRow(params.row._id)}
            >
              Delete
            </div>
          </Styled.CellAction>
        )
      },
    },
  ]
  return (
    <Styled.DataTable className="datatable ">
      <Styled.DataTableTitle>
        {path}
        <Link to={`/${routePrefix}/${apiPath}/new`} className="link">
          Add New
        </Link>
      </Styled.DataTableTitle>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: 0, pageSize: 9 },
        //   },
        // }}
        pageSize={9}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </Styled.DataTable>
  )
}

export default Datatable
