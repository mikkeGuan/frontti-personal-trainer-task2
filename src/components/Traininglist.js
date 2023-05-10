import * as React from "react";
//import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
//import TextField from "@mui/material/TextField";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { render } from "react-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
//import { ConstructionOutlined } from "@mui/icons-material";
//import { Icon } from "@mui/material";
import { format } from "date-fns";

import AddTraining from "./AddTraining";
import EditTraining from "./EditTraining";


export default function Traininglist() {
  const [trainings, setTrainings] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");

  /*const [trainings, setTrainings] = React.useState({
    date: "",
    duration: "",
    activity: "",
    customer:"",
  });*/
  
  React.useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = () => {
    fetch("https://traineeapp.azurewebsites.net/gettrainings")
      .then((response) => response.json())
      .then((data) => setTrainings(data));
  };

  const addTraining = (training) => {
    fetch("https://traineeapp.azurewebsites.net/api/trainings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(training),
    }).then((response) => {
      if (response.ok) {
        fetchTrainings();
      }
    });
  };

  const deleteTraining = (link) => {
    if (window.confirm("Are you sure you want to delete this training?")) {
      const deleteLink = "https://traineeapp.azurewebsites.net/api/trainings/" + link;
      fetch(deleteLink, { method: "DELETE" }).then((response) => {
        if (response.ok) {
          setMsg("Training deleted");
          setOpen(true);
          fetchTrainings();
        } else {
          alert("Something went wrong.");
        }
      }).catch((err) => {
        console.log(err);
        alert("Something went wrong. Please try again later.");
      });
    }
  };

  const columnDefs = [
    { 
      field: "date", 
      sortable: true, 
      filter: true,
      valueFormatter: (params) => format(new Date(params.value), "dd/MM/yy hh:mm")
    },
    { field: "duration", sortable: true, filter: true },
    { field: "activity", sortable: true, filter: true },
    { field: "customer.firstname", headerName: "Customer Name" },
    { field: "customer.lastname", headerName: "" },
    {
      headerName: "",
      width: 100,
      field: "id",
      cellRenderer: (params) => (
        <IconButton color="error" onClick={() => deleteTraining(params.value)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  

  return (
    <div>
      <AddTraining addTraining={addTraining}>Add Training</AddTraining>
      <div className="ag-theme-material" style={{ height: 600, width: "90" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={trainings}
          pagination={true}
          suppressDragLeaveHidesColumns={true}
        ></AgGridReact>
      </div>
    </div>
  );
}
