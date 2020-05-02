import React from 'react';
import { getClaimNoteData } from '../../utils/ClaimNote/getClaimNoteData';
import { referReasons } from '../../data/referReasons';
import { getFullnames, getQueue } from '../../utils/Notes';
import { getInfoRequestData } from '../../utils/InfoRequestNote/getInfoRequestData';
import { getMedClaimReviewData } from '../../utils/MedClaimReviewNote/getMedClaimReviewData';

export const setClaimNoteData = (values) => (dispatch) => {
  const data = getClaimNoteData(values);
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })
}

export const setMedClaimReviewData = (values) => (dispatch) => {
  const data = getMedClaimReviewData(values);
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })

}
export const setInfoRequestData = (values) => (dispatch) => {
  const data = getInfoRequestData(values);
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })
}

export const setQueueAction = (values) => (dispatch) => {
  const queue = getQueue(values);
  dispatch(setQueue(queue))
}

export const referReasonsAction = (values) => (dispatch) => {
  const reasons = referReasons.map((option, index) => {
    const selected = values.referReason === option ? "X" : "";
    return <li key={index}> {selected} {option} </li>
  })
  const reasonsList = () => {
    return (
      <ul style={{
      listStyle: "none",
      margin: 0,
      padding: 0
    }}>
        {reasons}
      </ul>  
    )
  }
  dispatch(setReferReasons(reasonsList()));
}

export const fullNamesAction = (values) => (dispatch) => {
  const fullnames = getFullnames(values);
  dispatch(setFullnames(fullnames));
}

export const actionGenerator = (key, data) => ({
  type: "SET_NOTE_DATA",
  key,
  data,
})

const SET_POLICY_STRING = "SET_POLICY_STRING"
export const setPolicyString = (policyString) => ({
  type: SET_POLICY_STRING,
  policyString,
})

const SET_QUEUE = "SET_QUEUE"
export const setQueue = (queue) => ({
  type: SET_QUEUE,
  queue,
})

const SET_FULLNAMES = "SET_FULLNAMES"
export const setFullnames = (fullnames) => ({
  type: SET_FULLNAMES,
  fullnames,
})

const SET_REFER_REASONS = "SET_REFER_REASONS"
export const setReferReasons = (reasons) => ({
  type: SET_REFER_REASONS,
  reasons,
})

