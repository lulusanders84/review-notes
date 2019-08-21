export const handleInputsSwitch = (handler, serviceSelect, storage, setState, value, values) => {
    switch(value.name) {
        case "pa-match": 
          const newValue = values["pa-deter"] === "approved" ? "approve" : "deny";
          handler({name: "deter", value: newValue});
          if(value.value === "yes") {
            setState({disableAllMet: true})
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
          const drugReview = value.value === "drug" ? true : false;
          setState({drugReview,});
          break;
        default:
          break;
      }
}