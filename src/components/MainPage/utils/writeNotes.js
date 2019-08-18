import * as $ from 'jquery';

export function writeNotes (values) {
  return `Medical Claim Review Note:
    REQ-${values.req}: Clinical Note
    Clinician: ${values.reviewed}`
}