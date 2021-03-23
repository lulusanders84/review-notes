export const setBlockProgress = (props) => {
  const { blockInProgress, backgroundImage } = props;
  if(backgroundImage) {
    blockInProgress.backgroundImage = backgroundImage;
  }
  return blockInProgress;
}