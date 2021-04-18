import React from 'react';
import { setInterqual } from './setPolicyString';

export const getFullnames = (values) => {
  const interqual = setInterqual(values, "med policy");
  return values.policy.map((policy, index) => {
    const {number, name} = policy
    const isNotNumber = isNaN(number.charAt(0))
    let policyOrigin = isNotNumber 
    ? "Blue Cross Blue Shield of Minnesota Medical Policy" 
    : "Federal Employee Program (FEP) Medical Policy";
    policyOrigin = policy.type === "LCD" || policy.type === "NCD"
      ? `Medicare ${policy.type} for`
      : policyOrigin;
    return values.interqual
      ? <li key={index}>{interqual}</li>
      : isNotNumber
        ? <li key={index}>{number} {policyOrigin} for {name}</li>
        : <li key={index}> {policyOrigin} {number} for {name}</li>
  })
}