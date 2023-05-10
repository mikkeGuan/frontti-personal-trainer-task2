import React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

export default function EditTraining({ updateTraining, params }) {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
    date: "",
    duration: "",
    activity: "",
  });

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
    setTraining({
      date: params.data.date,
      duration: params.data.duration,
      activity: params.data.activity,
      
    });
  };
 
  const handleSave = () => {
    console.log("TALLENNUS");
    updateTraining(training, params.data.links[0].href);
    setOpen(false);
  };
  const inputChanged = (event) => {
    setTraining({ ...training, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="outlined">
        Edit Training
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Edit Training</DialogTitle>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
