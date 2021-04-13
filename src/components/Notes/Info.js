import React from 'react';
import { saveFormatting } from '../../utils/Notes/saveFormatting';
import { setComposed, withVisibility } from '../../HOCs';


export function Info(props) {
  const { dos, info } = props.values;
  const infoContent = saveFormatting(info);
  return (
    <div>
      Info Requested: For {dos}:{infoContent} 
    </div>
  )
}

const mapStateToProps = (state) => ({
    id: "info",
    values: state.values,
  });
  
  export default setComposed(mapStateToProps, withVisibility, Info)