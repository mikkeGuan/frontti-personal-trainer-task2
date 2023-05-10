import React from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material/Button";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { render } from "react-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
//import { ConstructionOutlined } from "@mui/icons-material";
import { Icon } from "@mui/material";

import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
//Lisää suppressDragLeaveHidesColumns

export default function Customerlist() {
  const [customers, setCustomers] = React.useState([]);
  const [msg, setMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const updateCustomer = (updateCustomer, link) => {
    fetch(link, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateCustomer),
    })
      .then((response) => {
        if (response.ok) {
          setMsg("Customer edited succesfully");
          setOpen(true);
          fetchCustomers();
        } else {
          alert("Something went wrong.");
        }
      })
      .catch((err) => console.error(err));
  };

  const addCustomer = (customer) => {
    console.log("BUTTON PRESSED");
    console.log(customers);
    fetch("https://traineeapp.azurewebsites.net/api/customers", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customer),
    }).then((response) => {
      if (response.ok) {
        fetchCustomers();
      }
    });
  };

  const deleteCustomer = (params) => {
    if (window.confirm('Are you sure you want to delete this customer?')){
        fetch(params.data.links[0].href, { method: 'DELETE' })
        .then(response => {
            if (response.ok){
                setMsg('Customer deleted')
                setOpen(true);
                fetchCustomers();
            }

            else
            alert('Something went wrong');
        })
        .catch(err => console.error(err))
    }
}
  


  const columnDefs = [
    { field: "firstname", sortable: true, filter: true },
    { field: "lastname", sortable: true, filter: true },
    { field: "streetaddress", sortable: true, filter: true },
    { field: "postcode", sortable: true, filter: true },
    { field: "city", sortable: true, filter: true },
    { field: "email", sortable: true, filter: true },
    { field: "phone", sortable: true, filter: true },
    {
      headerName: "",
      field: "links.href.self",
      cellRenderer: (params) => (
        <>
          <EditCustomer updateCustomer={updateCustomer} params={params} />
        </>
      ),
    },
    {
      headerName: "",
      field: "links.href.self",
      cellRenderer: (params) => (
        <IconButton color="error" onClick={() => deleteCustomer(params)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const fetchCustomers = () => {
    fetch("https://traineeapp.azurewebsites.net/api/customers")
      .then((response) => response.json())
      .then((responseData) => setCustomers(responseData.content))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <AddCustomer addCustomer={addCustomer}>Add Customer</AddCustomer>
      <div className="ag-theme-material" style={{ height: 600, width: "80" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={customers}
          pagination={true}
          suppressDragLeaveHidesColumns={true}
        ></AgGridReact>
      </div>
    </div>
  );
}
