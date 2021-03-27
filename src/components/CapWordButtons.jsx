import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { CapWordButtons } from '../classes/CapWordButtons' 
import withConditionTest from '../HOCs/withConditionTest';

function CapWordButtonsComponent() {

  const {setTitle, handleAddCapWord, handleRemoveCapWord} = new CapWordButtons();

  return (
    <div>
      <Tooltip title={setTitle("add to")}>
        <IconButton onClick={handleAddCapWord}>
          <AddIcon />
        </IconButton>  
      </Tooltip>  
      <Tooltip title={setTitle("remove from")}>
        <IconButton onClick={handleRemoveCapWord}>
          <DeleteIcon />
        </IconButton>  
      </Tooltip>
    </div> 
  )
}

export default withConditionTest(CapWordButtonsComponent, {id: "capWordButtons"})

