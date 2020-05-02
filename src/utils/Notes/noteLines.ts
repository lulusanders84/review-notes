export const noteLines: {[index: string]: string[]} = {
  "FullReviewNote": ["req", "name", "lob", "service", "drugRequest",
      "code", "pend", "pa", "claimHistory", "policyString",  "benefits", 
      "summary", "exCircum", "criteriaMet", "criteriaNotMet", "deter"],
  "FollowDecisionNote": ["req", "name", "lob", "service",
      "code", "pend", "pa", "decisionReq", "policyString", "benefits", 
      "summary", "deter"],
  "MedDirectorNote": ["referral", "referReasons", "from", "to", "mdNote"],
  "Misroute": ["req", "code", "pend", "misrouteRationale", "misrouteDeter" ],
  "InfoRequest": ["req", "addInfo", "code", "pend", "policyString", "pa", "related", "route"],
  "LetterNote": ["req", "addInfo"]
}


