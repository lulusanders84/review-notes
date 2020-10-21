import React from 'react';
import CodeAndService from './CodeAndService';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {handleInputChange} from '../../utils/Inputs/';

export const CodeAndServiceInputs = (props) => {
  const handleCount = (e) => {
    console.log("handling count")
    handleInputChange({...props, id: "code"}, "");
  }
  
  const codeAndServices = props.values.code.map((item, index) => {
    const { code, mod, service} = item;
    return <Grid item xs={12} key={index}>
      <CodeAndService code={code} mod={mod} service={service} index={index} />
    </Grid>
  })

  return (
    <Grid container alignItems="flex-end">
       {codeAndServices}
       <Grid item xs={12}>
        <Button children="Plus" onClick={e => {handleCount(e)}}/> 
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(CodeAndServiceInputs)