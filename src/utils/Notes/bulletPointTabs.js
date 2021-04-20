const bulletPointTabs = {
  61574: "",
  61614: "&nbsp;&nbsp;&nbsp;&nbsp;",
  61601: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  61607: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  61591: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
}

export const getBulletPointTabs = (bulletPoint) => {
  return bulletPointTabs[bulletPoint] || "&nbsp;&nbsp;&nbsp;&nbsp;"
}