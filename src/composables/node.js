export function getNodeByBubbleOfEvent (currentEle, targetEle) {
  if (currentEle.tagName.toLowerCase() === targetEle) {
    return currentEle
  }
  const prevEle = currentEle.parentNode
  if (prevEle.tagName.toLowerCase() === targetEle) {
    return prevEle
  }
  return getNodeByBubbleOfEvent(prevEle, targetEle)
}