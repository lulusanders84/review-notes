import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/noteStyles';
import { fullNamesAction } from '../../redux/actions/notes';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(() => (styles));

export function MedPolicy() {
  const values = useSelector(state => state.values)
  const fullnames = useSelector(state => state.notes.fullnames)
  const dispatch = useDispatch();
  const classes = useStyles();
  
  React.useEffect(() => {
    dispatch(fullNamesAction(values))
  }, [dispatch, values] );

  return (
        <ul className={classes.list}>
          {fullnames}
        </ul>        
  )    
}

export default MedPolicy