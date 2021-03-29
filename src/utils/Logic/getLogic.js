import { logic } from '../../logic'

export function getLogic(id) {

let path = [];
let logicFunc;
getParentAndGrandParent(path, logic, id)

while(path.length > 0) {

  logicFunc = logicFunc === undefined 
    ? logic[path[0]]
    : logicFunc[path[0]]
  path.splice(0, 1)
}

return logicFunc[id]
}




function getParentAndGrandParent(path, logicObj, value) {

    for (var key in logicObj) {

        if (typeof logicObj[key] === 'object') {
            path.push(key.toString());
            getParentAndGrandParent(path, logicObj[key], value);
        } else {
          
            if(key === value) {
                break;
            }
        }
    }
}
