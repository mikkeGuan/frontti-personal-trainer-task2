import React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function EditCustomer({ updateCustomer, params }) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
    setCustomer({
      firstname: params.data.firstname,
      lastname: params.data.lastname,
      streetaddress: params.data.streetaddress,
      postcode: params.data.postcode,
      city: params.data.city,
      email: params.data.email,
      phone: params.data.phone,
    });
  };
 
  const handleSave = () => {
    console.log("TALLENNUS");
    updateCustomer(customer, params.data.links[0].href);
    setOpen(false);
  };
  const inputChanged = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Edit Customer
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            name="firstname"
            value={customer.firstname}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Firstname"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="lastname"
            value={customer.lastname}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Lastname"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="streetaddress"
            value={customer.streetaddress}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Streetaddress"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="postcode"
            value={customer.postcode}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Postcode"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="city"
            value={customer.city}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="City"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="email"
            value={customer.email}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Email"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="phone"
            value={customer.phone}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Phone"
            fullWidth={true}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
