import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { setComposed, withConditionTest } from '../../HOCs';
import InputsContainer from '../InputsContainer';
import { reviewed } from '../../noteTemplates/reviewed';

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: theme.spacing(2),
    overflow: "visible"
  }
}));
function ReviewedInputs (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} >
      <InputsContainer noteTemplate={reviewed} />
    </Card>
  )
}

const mapStateToProps = (state) => ({
  id: "reviewedInputs",
  values: state.values,
});

export default setComposed(mapStateToProps, withConditionTest, ReviewedInputs)
