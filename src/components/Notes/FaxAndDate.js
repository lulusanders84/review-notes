import React from 'react';
import * as utils from '../../utils'  
import { setComposed, withVisibility } from '../../HOCs';

export function FaxAndDate(props) {
  const { claimType, sccf } = props.values;
  return (
    <div>
      {claimType === 'home'
        ? `SCCF: ${sccf}`
        : <div>
            Return Fax: 651-662-1235
            <br />Return Due Date: {utils.getTwoWeeksFromNow()}
          </div>
      }
    </div>
  )   
}

const mapStateToProps = (state) => ({
  id: "faxAndDate",
  values: state.values,
});

export default setComposed(mapStateToProps, withVisibility, FaxAndDate)