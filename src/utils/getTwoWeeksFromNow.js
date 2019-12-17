export function getTwoWeeksFromNow() {
    const date = new Date(Date.now() + 12096e5)
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const y = date.getFullYear();
    return `${m}/${d}/${y}`;
}