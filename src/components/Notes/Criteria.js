import React, {useState, useEffect} from 'react';
import { withVisibility, setComposed } from '../../HOCs';
import { makeStyles } from '@material-ui/core/styles';
import Note from './Note';
import NoteContainer from './NoteContainer';
import { formatValues } from '../../utils/Notes';
import { scrapeCriteriaData } from '../../utils/Criteria/scrapeCriteriaData';
import { createCriteria } from '../../utils/Criteria/createCriteria';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Criteria(props) {
  const classes = useStyles();
    const [menuItems, setMenuItems] = useState("");
    const [selectedCriteria, setSelectedCriteria] = useState([]);
    const [policySection, setPolicySection] = useState("");
    const onClick = (e) => {
      console.log(e)
    }
    useEffect(() => {
      scrapeCriteriaData().then(res => {
        const policySections = createCriteria(res.html.innerHTML, onClick).map((section, index) => {
          const item = <span dangerouslySetInnerHTML={{__html:section.title}}></span>;
          console.log(section.policy)
          const value = Object.keys(section.policy).map(key => {
            const element = section.policy[key];
            return section.policy[key].innerHTML
          })
          return <MenuItem value={value} key={index}> {item} </MenuItem>
        });
        
        setMenuItems(policySections)
      })
      
    }, [])
    const handleChange = (event) => {
      setPolicySection(event.target.value);
    };
    return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Policy Section</InputLabel>
        <Select
          labelid="demo-simple-select-label"
          id="demo-simple-select"
          value={policySection}
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
      <div dangerouslySetInnerHTML={{__html:policySection}}>
      </div>
    </div>    
    )
}

const mapStateToProps = (state) => ({
    values: formatValues(state.values),
    notes: state.notes,
    id: "criteria"
  });
  
  const composed = setComposed(mapStateToProps, withVisibility, Criteria);
  export default composed;