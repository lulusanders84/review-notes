import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { fullNamesAction } from '../../redux/actions/notes';
import { withVisibility, setComposed } from '../../HOCs';
import Note from './Note';

const useStyles = makeStyles(() => (styles));

export function MedPolicy(props) {
  const { fullnames, dispatch, values } = props;
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(fullNamesAction(values))
  }, [dispatch, values] );

  return (
      <Note title="Medical Policy">
        <ul className={classes.list}>
          {fullnames}
        </ul>
      </Note>        
  )    
}

const mapStateToProps = (state) => ({
  values: state.values,
  fullnames: state.notes.fullnames,
  id: "medPol"
});

const composed = setComposed(mapStateToProps, withVisibility, MedPolicy);
export default composed;