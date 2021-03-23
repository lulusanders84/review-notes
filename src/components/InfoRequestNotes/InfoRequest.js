import React from 'react';
import Note from '../Notes/Note';
import Info from '../Notes/Info';
import { setInfoRequestData } from '../../redux/actions/notes';
import { connect } from 'react-redux';

export function InfoRequest(props) {
  const { values, dispatch, notes } = props;
  const { relatedInfo, initialSccf, claimType } = values;
  const { policyString, code, pend, route, related, } = notes;

  React.useEffect(() => {
    dispatch(setInfoRequestData(values))
  }, [dispatch, values]);

  return (
    <Note title="Info Request Note">
      REQ-{values.req}: Additional Info Requested {relatedInfo === "related" ? `on REQ-${values.initialReq}` : null}
      <br />Suspended codes: {code}
      <br />Suspension: {pend}
      <br />Medical Policy/Criteria: {policyString}
      <br />PA research: No PA found, no history of info requests in UM
      <br />Related UM requests: {related}
      <br />Route: {route}
      {relatedInfo === "related" && claimType === "home" 
        ? <div>
            Original info request sent on SCCF: {initialSccf}
          </div>
        : null
      }
      <Info visible />
    </Note>
  )
}
const mapStateToProps = (state) => ({
  values: state.values,
  notes: state.notes
});

export default connect(mapStateToProps)(InfoRequest)