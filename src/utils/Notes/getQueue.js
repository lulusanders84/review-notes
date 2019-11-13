import { queues} from '../../data/queues';

export const getQueue = (values) => {
    let {claimType, claimSystem, special, lob } = values;
    const system = claimSystem.toLowerCase() === "ocwa" ? "live" : "adjustment";
    special = special === "N/A" ? false : special;
    switch(lob) {
        case "commercial":
            const lastKey = special
                ? special === "employee"
                    ? claimType
                    : system
                : null;
            return special 
                ? special !== "foreign"  
                    ? queues[special][lastKey] 
                    : queues[special]
                : queues[claimType];
        case "GP":
            return queues[claimType.toLowerCase()];
        default:
            return queues[lob.toLowerCase()];
    }
}