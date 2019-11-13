import React from 'react';
import { setInterqual } from './setPolicyString';

export const getFullnames = (values) => {
  const interqual = setInterqual(values, "med policy");
  return values.policy.map((policy, index) => {
    const number = policy["Policy #"];
    const name = policy["Full Policy"];
    const isNotNumber = isNaN(number.charAt(0))
    const policyOrigin = isNotNumber ? "Blue Cross Blue Shield of Minnesota Medical Policy for" : "Federal Employee Program (FEP) Medical Policy for"
    return values.interqual
      ? <li key={index}>{interqual}</li>
      : <li key={index}>{number} {policyOrigin} {name}</li>
  })
}