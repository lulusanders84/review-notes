import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { CapWordButtons } from './classes'

export const CapWordButtonsComponent = () => {

  const utils = new CapWordButtons();
  const addTitle = utils.setTitle("add to");
  const removeTitle = utils.setTitle("remove from");

  return (
    <div>
      <Tooltip title={addTitle}>
        <IconButton onClick={utils.handleAddCapWord}>
          <AddIcon />
        </IconButton>  
      </Tooltip>  
      <Tooltip title={removeTitle}>
        <IconButton onClick={utils.handleRemoveCapWord}>
          <DeleteIcon />
        </IconButton>  
      </Tooltip>
    </div> 
  )
}

export default CapWordButtonsComponent
