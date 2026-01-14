import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {employeeData} from './employeeData'

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const Employees = () => {

  const columnDefs = useMemo(
    () => [
      { headerName: "ID", field: "id", width: 80 },
      {
        headerName: "Name",
        valueGetter: (p) => `${p.data.firstName} ${p.data.lastName}`,
        flex: 1,
      },
      { field: "department", filter: true },
      { field: "position", flex: 1 },
      { field: "location" },
      {
        field: "salary",
        headerName: "Salary ($)",
        valueFormatter: (p) => p.value.toLocaleString(),
      },
      {
        field: "performanceRating",
        headerName: "Rating",
        cellStyle: (p) => ({
          fontWeight: 600,
          color: p.value >= 4 ? "green" : "#555",
        }),
      },
      { field: "projectsCompleted" },
      {
        field: "isActive",
        headerName: "Status",
        cellRenderer: (p) => (p.value ? "Active" : "Inactive"),
      },
    ],
    []
  );


  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      resizable: true,
    }),
    []
  );

  return (
    <div className="page-container">
      <h2>Employee Dashboard</h2>
      <p>
        Overview of employees with performance and engagement metrics
      </p>


      <div className="ag-theme-quartz grid-wrapper" >
        <AgGridReact
          rowData={employeeData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination
          paginationPageSize={10}
          animateRows
          domLayout="autoHeight"
        />
      </div>
    </div>
  )
}

export default Employees