import { connect } from 'react-redux';
import { compose } from 'redux';

export const setComposed = (mapStateToProps, HOC, WrappedComponent) => {
  return compose(connect(mapStateToProps))(HOC(WrappedComponent));
};
