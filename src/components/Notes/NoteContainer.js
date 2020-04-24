export default function NoteContainer(props) {

  if(props.visible) {
    return ( props.children )
  } else return null;
  
}