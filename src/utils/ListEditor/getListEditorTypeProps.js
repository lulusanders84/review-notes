const listEditorTypeProps = {
  "code/service": {
    title: "Click to view or edit saved code/service pairs",
    headers: ["code", "service"],
    storageLocation: "codeServicePairs"
  }
}

export const getListEditorTypeProps = (type) => {
  return listEditorTypeProps[type]
}