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

function createData(id, name, email, mobile, address, language, payment, other) {
  return { id, name, email, mobile, address, language, payment, other };
}

const rows = [
  createData('1', 'Rajitha Ratna', 'rajitha3@gmail.com', '02175568345', 'reid avenue, Colombo 07', 'english, sinhala, spanish', '1000/hr', 'skills'),
  createData('2', 'Anuki Alwis', 'anukial@gmail.com', '0773456271', 'rajarata, wayamba south', 'english, sinhala, arabic', '800/hr', 'experience'),
  createData('3', 'Mahesh bala', 'balamahe22@gmail.com', '0773427654', 'Kumara veethy, Inuvil', 'english, tamil, french', '1200/hr' , 'preferences'),
];


const styleTables = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function GuideTables() {
  const tableClass = styleTables();
  const buttonClass = styleButtons();
 
  return (
    <TableContainer component={Paper} width="100%">
    <TableRow align = "left">
    <h1>View Guide Details</h1>
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
            <StyledTableCell align="left">Languages</StyledTableCell>
            <StyledTableCell align="left">Payment</StyledTableCell>
            <StyledTableCell align="left">Other Details</StyledTableCell>
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
              <StyledTableCell align="left">{row.language}</StyledTableCell>
              <StyledTableCell align="left">{row.payment}</StyledTableCell>
              <StyledTableCell align="left">{row.other}</StyledTableCell>
              <StyledTableCell align="left"><Link to='/manageuser/edit_admin'><div className={buttonClass.root}><Button variant="contained" color="primary">Edit</Button></div></Link></StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary">Delete</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
