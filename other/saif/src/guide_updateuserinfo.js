import React, { Component }from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './updateuserinfo.css';
import { useState } from "react";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

import MultiSelect from "react-multi-select-component";
/*
const Languages = () => {
    const options = [
    
      { label: "English", value: "English" },
      { label: "Sinhala ", value: "Sinhala"},
      { label: "Mandarin ", value: "Mandarin" },
      { label: "Hindi ", value: "Hindi" },      
      { label: "Bengali ", value: "Bengali" },
      { label: "Urudu ", value: "Urudu" },
      { label: "Arabic ", value: "Arabic" },
      { label: "Tamil", value: "Tamil" },
    ]
};
  
    const [selected, setSelected] = useState([]); Languages = () => {
        const options = [
          { label: "English ", value: "English" },
          { label: "Sinhala ", value: "Sinhala"},
          { label: "Mandarin ", value: "Mandarin"},
          { label: "Hindi ", value: "Hindi" },          
          { label: "Bengali ", value: "Bengali" },
          { label: "Urudu ", value: "Urudu" },
          { label: "Arabic ", value: "Arabic" },
          { label: "Tamil ", value: "Tamil" },

        ];
    }*/
/*      
        const [selected, setSelected] = useState([]);
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
style: {
maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
width: 250,
},
},
};

const names = [
'English',
'Sinhala',
'Russian',
'Mandarin',
'Hindi',
'Bengali',
'Urudu',
'Arabic',
'Tamil',

];


function getStyles(name, personName, theme) {
return {
fontWeight:
personName.indexOf(name) === -1
? theme.typography.fontWeightRegular
: theme.typography.fontWeightMedium,
};
}

function MultipleSelect()
{
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

const handleChange = (event) => {
setPersonName(event.target.value);
};

const handleChangeMultiple = (event) => {
const { options } = event.target;
const value = [];
for (let i = 0, l = options.length; i < l; i += 1) {
if (options[i].selected) {
  value.push(options[i].value);
}
}
setPersonName(value);
};

}
*/
export default class UpdateGuideinfo extends Component{
    render(){
/*
        const classes = useStyles();
        const theme = useTheme();
        const [personName, setPersonName] = React.useState([]);

const handleChange = (event) => {
  setPersonName(event.target.value);
};

const handleChangeMultiple = (event) => {
  const { options } = event.target;
  const value = [];
  for (let i = 0, l = options.length; i < l; i += 1) {
    if (options[i].selected) {
      value.push(options[i].value);
    }
  }
  setPersonName(value);
};
*/
        // const multipleselect = this.MultipleSelect();
        return(
         <div className="request-wrapper">
         <div className="request-inner">
           <form>
             <h2>Update Guide Details</h2> 
             <div className="form-group">
                     <label>Language Preferences</label>
                     <textarea className="form-control" placeholder="Add preferred languages here" />
    
                 </div>
                 <br/>

                 
                
                 <div className="form-group">
                     <label>Payment</label>
                     <textarea className="form-control" placeholder="Agreed Payment per day" />
                 </div>
                 <br/>
                 <br/>
                 <div className="form-group">
                     <label>Futher Details</label>
                     <textarea className="form-control" placeholder="Optionally add more details here..." />
                 </div>
                 <br/>



               

      <br></br>
             <button type="submit" className="btn btn-primary btn-block">Submit</button>
 
           </form>
           </div>
           </div>
        );
    } 
}