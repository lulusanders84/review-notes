import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { populateReviewedValues } from '../utils/Values'

export default function SaveAsRelatedClaim() {
  const values = useSelector(state => state.values)
  const dispatch = useDispatch()
  return (
    <Button onClick={() => populateReviewedValues(values, dispatch)}>
      Save Claim Info as a Related Claim
    </Button>
  )
}

