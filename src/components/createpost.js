import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function Createpost() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Create new thread
        {/* <AddCircleOutlineIcon></AddCircleOutlineIcon> */}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
        <DialogTitle>New thread</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="Thread title" />
          <TextField margin="dense" id="outlined-textarea" label="Your content here" fullWidth multiline maxRows={15} rows={5} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Publish</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
