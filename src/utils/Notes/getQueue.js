import { queues} from '../../data/queues';

export const getQueue = (values) => {
    let {claimType, claimSystem, special, plan, lob} = Object.keys(values).reduce((acc, key) => { 
        if(typeof values[key] === "string") {
            acc[key] = values[key].toLowerCase();
        }
        return acc;
    }, {});
    const system = claimSystem === "ocwa" ? "live" : "adjustment";
    special = special === "n/a" ? false : special;
    const secondKey = special ? special : claimType;
    let queue = queues[lob][secondKey];
    switch(lob) {
        case "commercial":
            const lastKey = special === "employee" ? claimType : system
            return queue[lastKey] ? queue[lastKey] : queue;
        case "gp":
            queue = queues[lob][plan];
            return queue[claimType] ? queue[claimType] : queue;
        default:
            return queues[lob];
    }
}