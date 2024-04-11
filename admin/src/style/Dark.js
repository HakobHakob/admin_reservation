import styled from "styled-components"

export const App = styled.div`
  .dark {
    background-color: black;
    color: rgb(156, 156, 156);

    .chartGrid {
      stroke: rgba(228, 228, 228, 0.219);
    }

    .table {
      background-color: #111;

      .tableCell {
        color: gray;
      }
    }

    .navbar {
      color: #999;
      border-color: #333;

      .search {
        border-color: gray;
      }
    }

    .sidebar {
      background-color: #111;
      border-color: #333;

      .top {
        .logo {
          color: #999;
        }
      }
      hr {
        border-color: #333;
      }

      ul {
        li {
          &:hover {
            background-color: #333;
          }

          .icon {
            color: #999;
          }
        }
      }
    }

    .datatable {
      .datagrid {
        color: gray;
        border: none;

        .viewButton,
        .deleteButton,
        .cellWithStatus {
          color: gray;
          border: none;
        }
      }
    }
    input {
      background-color: transparent;
    }
  }
`
