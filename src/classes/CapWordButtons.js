import { CapWords } from './';
import {bindMethods} from '../utils/Classes'

export class CapWordButtons {
  constructor() {
    this._capWords = new CapWords();
    bindMethods(this)
  }

  handleAddCapWord = () =>  {
    this._handleCapWordChange("add");
  };

  handleRemoveCapWord = () => {
    this._handleCapWordChange("delete");
  };

  setTitle = (verb) => {
    return "Select word and click here to " + verb + " capitalized words list";
  };

  _handleCapWordChange = (changeType) => {
    const word = document.getSelection().toString();
    const [changeFunc, replacementWord] = this._changeTypeProps[changeType];
    this._capWords[changeFunc](word);
    this._replaceSelectedText(replacementWord(word));
  };

  _replaceSelectedText = (replacementText) => {
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
  };
  
  _changeTypeProps = {
    "add": ["addWord", (word) => word.toUpperCase()],
    "delete": ["deleteWord", (word) => word.toLowerCase()]
  };
}
