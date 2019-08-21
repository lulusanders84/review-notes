export const handleInputsSwitch = (handler, serviceSelect, storage, value, values) => {
    let returnObj = {};
    switch(value.name) {
        case "pa-match": 
          const newValue = values["pa-deter"] === "approved" ? "approve" : "deny";
          handler({name: "deter", value: newValue});
          if(value.value === "yes") {
            returnObj.disableAllMet = true;
          }
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
          returnObj.drugReview = value.value === "drug" ? true : false;
          break;
        default:
          break;
      }
    return returnObj;
}