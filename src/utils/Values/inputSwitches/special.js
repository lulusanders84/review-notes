export const special = (value, values) => {
  return {
    claimSystem: value.value === "host" 
      ? "INSINQ" 
      : values.claimSystem
  };
}