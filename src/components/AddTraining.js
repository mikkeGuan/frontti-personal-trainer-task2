import * as React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function Addtraining({ addTraining }) {
  //const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: "",
    duration: "",
    activity: "",
    firstname:"",
    lastname:"",
  });
  const saveTraining = () => {
    addTraining(training);
    setTraining({ ...training, date: "" });
    setTraining({ ...training, duration: "" });
    setTraining({ ...training, activity: "" });
    setOpen(false);
  };

   /*const fetchCustomers = () => {
    fetch("https://traineeapp.azurewebsites.net/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data.content));
  }; */

  const fetchTrainings = () => {
    fetch("https://traineeapp.azurewebsites.net/gettrainings")
      .then((response) => response.json())
      .then((data) => setTraining(data));
  };
  


 

  React.useEffect(() => {
    fetchTrainings();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
      console.log(training);
    }
  
  };
  
  const handleCancel = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setTraining({ ...training, [event.target.name]: event.target.value });
  }
 

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            name="date"
            value={training.date}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Date"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="duration"
            value={training.duration}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Duration"
            fullWidth={true}
            variant="standard"
          />
          <TextField
            autoFocus
            name="activity"
            value={training.activity}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Activity"
            fullWidth={true}
            variant="standard"
          />
           <TextField
            autoFocus
            name="firstname"
            value={training.firstname}
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
            value={training.lastname}
            onChange={inputChanged}
            margin="dense"
            id="name"
            label="Lastname"
            fullWidth={true}
            variant="standard"
          />
      
        </DialogContent>
        <DialogActions>
          <Button onClick={saveTraining}>Save</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}