import React from 'react';
import { sendDispatches } from './sendDispatches';

export const withNoteDataDispatch = (WrappedComponent) => {
  return (props) => {
    const { dataRequests, ...passThroughProps} = props;
    const { dispatch, values} = props;
    React.useEffect(() => {
      sendDispatches(dataRequests, dispatch, values);
    // eslint-disable-next-line
    }, [values])
    return(
      <WrappedComponent {...passThroughProps} />
    )
  }
}

export default withNoteDataDispatch;


