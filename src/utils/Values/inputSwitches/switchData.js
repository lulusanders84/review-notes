const switches = {
  "allMet": ["exCircum"],
  "claimType": ["noPricingRationale"],
  "code": ["service"],
  "deter": ["exCircum", "allMet", "code", "rationale", "specficType"],
  "lob": ["claimType"],
  "paDiagnosis": ["diagnosis"],
  "paDeter": ["deter", "disableAllMet"],
  "paMatch": ["deter", "disableAllMet"],
  "paProvider": ["provider"],
  "policy": ["info", "interqual", "deter", "rationale", "exCircum"],
  "rationale": ["exCircum"],
  "relatedInfo": ["rationale"],
  "serviceType": ["drugReview", "specificType", "noPricingRationale"],
  "special": ["claimSystem"]
}