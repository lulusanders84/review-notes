export const buildVersions = (reducer) => {
  const {
    commercialCurrentVersion, 
    commercialNewVersion, 
    fepCurrentVersion,
    fepNewVersion
  } = reducer;
  return {
    fep: {
      newVersion: fepNewVersion,
      currentVersion: fepCurrentVersion
    },
    commercial: {
      newVersion: commercialNewVersion,
      currentVersion: commercialCurrentVersion
    }
  }
}