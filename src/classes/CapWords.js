// import { allCapWords } from '../data/allCapWords';
// import { getStorage } from '../utils/getStorage';
import { saveToStorage } from '../utils/saveToStorage';


export class CapWords {
  constructor() {
    this.words = [];
    // this.retrieveStoredWords();
    this.newWords = [];
    this.wordSource = "";
  }
  addWord(word) {
    this._addWord(word);
    this.storeWords();
  }
  deleteWord(word) {
    this._deleteWord(word);
    this.storeWords();
  }
  _addWord(word) {
    this.words = [...this.words, word.toUpperCase().trim()];
  }
  _deleteWord(word) {
    this.words = this.words.filter(item => { return item !== word.toUpperCase().trim() })
  }
  // retrieveStoredWords() {
  //   const storedWords = getStorage("capWords", null);
  //   this.wordSource = storedWords ? "stored" : "file";
  //   this.words = storedWords
  //     ? storedWords
  //     : allCapWords;
  // }
  mergeAndStoreCapWords(allCapWords) {
    switch (this.wordSource) {
      case "stored":
        this.compareWords(allCapWords);
        this.addNewWords();
        break;
      case "file":
        break;
      default:
        break;
    }
    this.storeWords();
  }
  compareWords(words) {
    words.forEach(word => {
      const wordIsStored = this.words.includes(word);
      if (!wordIsStored) {
        this.newWords(word);
      }
    });
  }
  addNewWords() {
    this.words = [...this.words, ...this.newWords];
  }
  storeWords() {
    saveToStorage("capWords", this.words);
  }
  getAll() {
    return this.words;
  }
}
