import React from 'react';
import ReactSelectSingle from './ReactSelectSingle';
import { makeStyles } from '@material-ui/core/styles';
import { suggestions } from '../../utils/AutoComplete/';
import { rejectCodes } from '../../data/rejectCodes'
import { setComposed, withConditionTest } from '../../HOCs';
import Inputs from '../../classes/Inputs';
import inputs from '../../inputs/inputs';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
  }
}));
export function DeniedInputs(props) {
  const classes = useStyles();
  const {denialId} = props;
  const components = new Inputs(["denialType", "clinicalRationale"], inputs)
  const DenialType = components.getInput("denialType");
  const ClinicalRationale = components.getInput("clinicalRationale");
  
  return (
    <div className={classes.card}>
        <ReactSelectSingle id={denialId} suggestions={suggestions(rejectCodes)} label="Denial Rationale:" /> 
        <DenialType values={{denialId}} />
        <ClinicalRationale values={{denialId}} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  id: "deniedInputs",
  values: state.values,
  suggestions: state.suggestions
});

export default setComposed(mapStateToProps, withConditionTest, DeniedInputs)