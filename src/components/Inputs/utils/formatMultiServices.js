export const formatMultiServices = (services) => {
    console.log(services)
    switch (services.length) {
        case 0:
            return "";
        case 1:
            return services[0];
        case 2: 
            return services.join(" and ");
        default:
            const last = services.pop();
            const bulk = services.join(" , ");
            return bulk + " and " + last;
    }
}