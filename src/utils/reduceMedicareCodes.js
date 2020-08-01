import { medicareCodes } from "../data/medicareCodes";
export const reduceMedicareCodes = () => {
   const codes = Object.keys(medicareCodes);
   return codes.reduce((acc, code) => {
      const medicarePolicies = medicareCodes[code].reduce((acc, policy) => {
         if (policy["Policy #"] !== "Medicare Benefit Policy Manual Chapters 10 & 15") {
            let policyArr = policy["Policy #"].split("\n").join(" ");
            policyArr = policyArr.split(" ");
            policyArr = policyArr.filter(item => {
               return item !== "Medicare";
            });
            const newPolicyArr = policyArr.map(policy => {
               policy = policy.replace("(", "");
               return policy.replace(")", "");
            });
            newPolicyArr.forEach(code => {
               if (code !== "") {
                  const char0 = code.charAt(0);
                  const docId = code.substring(0, 6);
                  let type;
                  let href = `https://www.cms.gov/medicare-coverage-database/search/document-id-search-results.aspx?DocID=${docId}&bc=IAAAAAAAAAAA&&SearchType=Advanced`;
                  switch (char0) {
                     case "L":
                        type = "LCD";
                        break;
                     case "I":
                     case "V":
                     case "X":
                        type = "BCBSMN";
                        href = null;
                        break;
                     default:
                        type = "NCD";
                        break;
                  }
                  acc.push({ "Policy #": code, "Full Policy": policy["Full Policy"], type, href, });
               }
            });
         }
         else {
            acc.push(policy);
         }
         return acc;
      }, []);
      if (medicarePolicies.length > 0) {
         acc[code] = medicarePolicies;
      }
      return acc;
   }, {});
};
