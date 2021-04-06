import React from 'react';
import ReactSelectSingle from './ReactSelectSingle';
import CriteriaQuill from './CriteriaQuill';
import { referReasons } from '../../data/referReasons'; 
import { suggestions } from '../../utils/AutoComplete';

export default function CriteriaInputs() {
  return (
    <div>
        <CriteriaQuill id="criteriaMet" label="Criteria Met"   />
        <CriteriaQuill id="criteriaNotMet" label="Criteria Not Met"  />
        <ReactSelectSingle id="referReason" suggestions={suggestions(referReasons)} label="Reason for Referral"   /> 
    </div>
  )
}
