export const handleInputsSwitch = (handler, serviceSelect, storage, info, value, values) => {
    let returnObj = {};
    switch(value.name) {
        case "policy":
          info(value.value);
          break;
        case "pa-deter":
          if(values["pa-match"] === "yes") {
            const newValue = value.value === "approved" ? "approve" : "deny";
            handler({name: "deter", value: newValue});
            returnObj.disableAllMet = true;
          } 
          break;           
        case "pa-match": 
          const newValue = values["pa-deter"] === "approved" ? "approve" : "deny";
          handler({name: "deter", value: newValue});
          const disableAllMet = value.value === "yes" ? true : false;
          returnObj.disableAllMet = disableAllMet;
          break;
        case "deter":
          if(value.value !== "approve") {handler({name: "allMet", value: false})};
          break;
        case "code":
          serviceSelect(value);
          break;
        case "name":
        case "lob":
          storage(value);
          if(value.value === "FEP") {
            returnObj.claimType = "local"
          }
          break;
        case "pa-diagnosis":
            value.name = "diagnosis";
            handler(value);
            break;
        case "pa-provider":
          value.name = "provider";
          handler(value);
          break;
        case "serviceType":
          returnObj.drugReview = value.value === "drug" && values.reviewed === "no" ? true : false;
          const type = value.value === "drug"
            ? "Injectable Drug"
            : value.value === "DME"
              ? "DME"
              : null;
          returnObj.type = type;
          break;
        default:
          break;
      }
    return returnObj;
}