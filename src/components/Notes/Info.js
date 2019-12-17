import React from 'react';
import { saveFormatting } from '../../utils/Notes/saveFormatting';
import { connect } from 'react-redux'

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
    values: state.values,
  });
  
  export default connect(mapStateToProps)(Info)