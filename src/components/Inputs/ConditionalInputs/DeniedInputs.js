import React from 'react';
import ReactSelectSingle from '../ReactSelectSingle';
import { makeStyles } from '@material-ui/core/styles';
import { suggestions } from '../../../utils/AutoComplete/';
import { rejectCodes } from '../../../data/rejectCodes'
import Conditional from './conditionalInputs';
import { setComposed, withConditionTest } from '../../../HOCs';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
  }
}));
export function DeniedInputs(props) {
  
  const classes = useStyles();
  const {denialId, values} = props;
  console.log(values.paDeter)
  return (
    <div className={classes.card}>
        <ReactSelectSingle id={denialId} suggestions={suggestions(rejectCodes)} label="Denial Rationale:" /> 
        <Conditional.DenialType values={{denialId}} />
        <Conditional.ClinicalRationale values={{denialId, ...values}} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  id: "deniedInputs",
  values: state.values,
  suggestions: state.suggestions
});

export default setComposed(mapStateToProps, withConditionTest, DeniedInputs)