import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, name, email, mobile, language, no_pending_bookings, payment, other) {
  return { id, name, email, mobile, language, no_pending_bookings, payment, other };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', 'English, Sinhala','3'),
  createData('2', 'Anuki Alwis', 'anukial@gmail.com', '0773456271', 'English, Tamil','0'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AdminAssignGuide() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <TableContainer component={Paper} width="100%">
   
    <h1>Assign Guide</h1> 
   
  
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            <StyledTableCell align="left">Languages</StyledTableCell>
            <StyledTableCell align="left">No of Pending<br></br> bookings</StyledTableCell>
            
            <StyledTableCell align="left">ASSIGN</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.mobile}</StyledTableCell>
              <StyledTableCell align="left">{row.language}</StyledTableCell>
         
              <Button onClick={handleClickOpen}> <StyledTableCell align="left">{row.no_pending_bookings}</StyledTableCell> </Button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title2">{"Booking ID :"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              BookingID 1: <br></br>
               Package Name: <br></br>
               Duration: <br></br>
               .................. <br></br>
               BookingID 2: <br></br>
               Package Name: <br></br>
               Duration: <br></br>
               .................. <br></br>
               BookingID 3: <br></br>
               Package Name: <br></br>
               Duration: <br></br>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            
            </DialogActions>
          </Dialog>

              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="primary">ASSIGN</Button></div></StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}