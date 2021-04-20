import { bulletPointTabs, getBulletPointTabs } from "./bulletPointTabs"

export const handleBullets = (item) => {
const split = item.split("")
let bulletIndex = []
split.forEach((char, index) => {
  if(char.charCodeAt(0) >= 61000 && char.charCodeAt(0) <= 62000) {
    bulletIndex.push({bulletPoint: char.charCodeAt(0), index})
  }
})
if(bulletIndex.length !== 0) {
  const adjusted = bulletIndex.map((num, i) => {
    num.index = num.index + i
    return num
  })
  adjusted.forEach(num => {
    const { index, bulletPoint } = num
    split.splice(index, 0, "<br />" + getBulletPointTabs(bulletPoint))
  })
}
return split.join("")  
}
  