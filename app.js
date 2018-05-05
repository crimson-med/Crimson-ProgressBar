const colors = require("colors/safe");

function castColor(color){
  let toCast = colors.cyan;
  if (color == "black"){
    toCast =  colors.black;
  }else if (color == "red") {
    toCast =  colors.red;
  }else if (color == "green") {
    toCast =  colors.green;
  }else if (color == "yellow") {
    toCast =  colors.yellow;
  }else if (color == "blue") {
    toCast =  colors.blue;
  }else if (color == "magenta") {
    toCast =  colors.magenta;
  }else if (color == "cyan") {
    toCast =  colors.cyan;
  }else if (color == "white") {
    toCast =  colors.white;
  }else if (color == "gray") {
    toCast =  colors.gray;
  }else if (color == "grey") {
    toCast =  colors.grey;
  }
  return toCast;
};
function castSize(progressSize, buffer = 0){
  const maxSize = process.stdout.columns;
  let toCast = maxSize/2;
  if (progressSize === "xsmall"){
    toCast = (maxSize/4).toFixed(0);
  }else if (progressSize === "small"){
    toCast = (maxSize/3).toFixed(0);
  }else if (progressSize === "medium"){
    toCast = (maxSize/2).toFixed(0);
  }else if (progressSize === "large"){
    toCast = ((maxSize/3)*2).toFixed(0);
  }else if (progressSize === "xlarge"){
    toCast = maxSize;
  }
  if (toCast + buffer >= maxSize){
    toCast = toCast - buffer -1;
  }
  return toCast;
}
module.exports = {
  renderProgressBar: async function (currentValue, totalValue, progressColor = "green", backgroundColor = "yellow", progressSymbol = "=", backgroundSymbol = "-", renderContainer, progressSize){
    let foreProgress = castColor(progressColor);
    let backProgress = castColor(backgroundColor);
    let lengthBuffer = currentValue.toString().length + totalValue.toString().length + 3;
    if (renderContainer === true){
      lengthBuffer = lengthBuffer + 2;
    }
    let lengthProgress = castSize(progressSize, lengthBuffer);
    process.stdout.clearLine();  // clear current text
    process.stdout.cursorTo(0);  // move cursor to beginning of line
    const percent = ((currentValue)/totalValue*lengthProgress).toFixed(2) ;
    let progressFirst = "";
    let progressLast = "";
    for (let j = 0; j < lengthProgress; j++) {
      if (j <= percent) {
        progressFirst = progressFirst + progressSymbol;
      }else{
        progressLast = progressLast + backgroundSymbol;
      }
    }
    if (renderContainer === true){
      progress = "[" + foreProgress(progressFirst) + backProgress(progressLast)+"]";
    }else{
      progress = foreProgress(progressFirst) + backProgress(progressLast);
    }
    process.stdout.write(progress + "  "+(currentValue)+"/"+totalValue);
    return progress;
  }
};
