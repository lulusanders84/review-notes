import React from 'react';
import { getClaimNoteData } from '../../utils/ClaimNote/getClaimNoteData';
import { referReasons } from '../../data/referReasons';
import { getFullnames, getQueue } from '../../utils/Notes';
import { setInterqual } from '../../utils/Notes/setPolicyString';
import { getInfoRequestData } from '../../utils/InfoRequestNote/getInfoRequestData';
import { getMedClaimReviewData } from '../../utils/MedClaimReviewNote/getMedClaimReviewData';
import { getMisrouteData } from '../../utils/Notes/getMisrouteData';

const formatValuesForNotes = (values) => {
  let formattedValues = {}
  Object.keys(values).forEach(value => {
    formattedValues[value] = values[value] === undefined ? "" : values[value] 
  })
  return formattedValues;
}

export const setClaimNoteData = (values) => (dispatch) => {
  const data = getClaimNoteData(formatValuesForNotes(values));
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })
}

export const setMedClaimReviewData = (values) => (dispatch, getState) => {
  const data = getMedClaimReviewData(formatValuesForNotes(values, getState().notes.queue));
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })
}
export const setInfoRequestData = (values) => (dispatch) => {
  const data = getInfoRequestData(formatValuesForNotes(values));
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })
}

export const setMisrouteData = (values) => (dispatch) => {
  const data = getMisrouteData(formatValuesForNotes(values));
  Object.keys(data).forEach(key => {
    dispatch(actionGenerator(key, data[key]))
  })
}

export const setPolicyStringAction = (values) => (dispatch) => {
  const policyString = values.policy.length > 0 
    ? values.policy.some( policy => {return policy["Policy #"] === "InterQual"})
      ? setInterqual(values, "med policy")
      : values.policy.map(policy => {return policy["Policy #"]}).join(" / ") 
    : "N/A";
  dispatch(setPolicyString(policyString));

}
export const setQueueAction = (values) => (dispatch) => {
  const queue = getQueue(formatValuesForNotes(values));
  dispatch(setQueue(queue))
}

export const referReasonsAction = (values) => (dispatch) => {
  const reasons = referReasons.map((option, index) => {
    const selected = values.referReason === option ? "X" : "";
    return <li key={index}> {selected} {option} </li>
  })
  dispatch(setReferReasons(reasons));
}

export const fullNamesAction = (values) => (dispatch) => {
  const fullnames = getFullnames(formatValuesForNotes(values));
  dispatch(setFullnames(fullnames));
}

export const actionGenerator = (key, data) => ({
  type: "SET_NOTE_DATA",
  key,
  data,
})
// const SET_MED_CLAIM_REVIEW_NOTE = "SET_MED_CLAIM_REVIEW_NOTE";
// export const setMedClaimReviewNote = (data) => ({
//   type: SET_MED_CLAIM_REVIEW_NOTE,
//   data
// })
// const SET_INFO_REQUEST_NOTE = "SET_INFO_REQUEST_NOTE";
// export const setInfoRequestNote = (data) => ({
//   type: SET_INFO_REQUEST_NOTE,
//   data
// })


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

// const SET_OCWA_NOTE = "SET_OCWA_NOTE";
// export const setOcwaNote = (ocwaNote) => ({
//   type: SET_OCWA_NOTE,
//   ocwaNote,
// })

// const SET_INSTRUCTIONS = "SET_INSTRUCTIONS";
// export const setInstructions = (instructions) => ({
//   type: SET_INSTRUCTIONS,
//   instructions,
// })

// const SET_MODIFIER22 = "SET_MODIFIER22";
// export const setModifier = (modifier22) => ({
//   type: SET_MODIFIER22,
//   modifier22,
// })

// const SET_REMAINDER = "SET_REMAINDER";
// export const setRemainder = (remainder) => ({
//   type: SET_REMAINDER,
//   remainder,
// })
