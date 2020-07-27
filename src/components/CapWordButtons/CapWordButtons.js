import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { CapWords } from '../../classes/CapWords';

const capWords = new CapWords();

export const CapWordButtons = () => {
  const handleAddCapWord = () => {
    const word = document.getSelection().toString();
    capWords.addWord(word);
    replaceSelectedText(word.toUpperCase());
  }
  const handleRemoveCapWord = () => {
    const word = document.getSelection().toString();
    capWords.deleteWord(word);
    replaceSelectedText(word.toLowerCase());
  }
  const title = (verb) => {
    return "Select word and click here to " + verb + " capitalized words list"
  }
  return (
    <div>
      <Tooltip title={title("add to")}>
        <IconButton onClick={handleAddCapWord}>
          <AddIcon />
        </IconButton>  
      </Tooltip>  
      <Tooltip title={title("remove from")}>
        <IconButton onClick={handleRemoveCapWord}>
          <DeleteIcon />
        </IconButton>  
      </Tooltip>
    </div>
    
    
  )
}

function replaceSelectedText(replacementText) {
  var sel, range;
  if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          range.insertNode(document.createTextNode(replacementText));
      }
  } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      range.text = replacementText;
  }
}