import * as React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function AddCustomer({ addCustomer }) {
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const saveCustomer = () => {
    addCustomer(customer);
    setCustomer({ ...customer, firstname: "" });
    setCustomer({ ...customer, lastname: "" });
    setCustomer({ ...customer, streetaddress: "" });
    setCustomer({ ...customer, postcode: "" });
    setCustomer({ ...customer, city: "" });
    setCustomer({ ...customer, email: "" });
    setCustomer({ ...customer, phone: "" });
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    console.log("SULJETTIIN IKKUNA");
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const inputChanged = (e) => {
    console.log("SYOTETTA TULEE ADD IKKUNASSA");
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Add Customer
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Add Customer</DialogTitle>
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
          <Button onClick={saveCustomer}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
