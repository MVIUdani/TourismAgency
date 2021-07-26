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

function createData(id, name, email, mobile, address) {
  return { id, name, email, mobile, address };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', 'reid avenue, Colombo 07'),
  createData('2', 'Anuki Alwis', 'anukial@gmail.com', '0773456271', 'rajarata, wayamba south'),
  createData('3', 'Mahesh bala', 'balamahe22@gmail.com', '0773427654', 'Kumara veethy, Inuvil'),
];

const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

const styleButtons = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function CustomerTables() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();

  // <h1>View Customer Details</h1>
  return (
    <TableContainer component={Paper} width="100%">
    <TableRow align = "left">
    <h1>View Customer Details</h1>

    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left" margin="100px"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="left"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>
    <StyledTableCell align="right"></StyledTableCell>


    <Link to='/manageuser/add_admin'>
    <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="primary" align="left">ADD USER</Button></div></StyledTableCell>
    </Link>
    </TableRow>
      <Table className={tableClass.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Mobile</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Edit</StyledTableCell>
            <StyledTableCell align="left">Delete</StyledTableCell>
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
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left"><Link to='/manageuser/edit_admin'><div className={buttonClass.root}><Button variant="contained" color="primary">Edit</Button></div></Link></StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary">Delete</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

/*
<div className={classes.root}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons" color="primary">
        Link
      </Button>
    </div> */
