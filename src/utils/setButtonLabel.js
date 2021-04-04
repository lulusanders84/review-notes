export const setButtonLabel = ({setDisabled, setText, preClickLabel, postClickLabel}) => {
  setText(postClickLabel);
  setDisabled(true);
  setTimeout(function () { 
    setText(preClickLabel) 
    setDisabled(false)
  }, 2000);
}