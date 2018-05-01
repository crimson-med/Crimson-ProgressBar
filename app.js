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

module.exports = {
  renderProgressBar: async function (currentValue, totalValue, progressColor = "green", backgroundColor = "yellow", progressSymbol = "=", backgroundSymbol = "-", renderContainer){
    let foreProgress = castColor(progressColor);
    let backProgress = castColor(backgroundColor);

    process.stdout.clearLine();  // clear current text
    process.stdout.cursorTo(0);  // move cursor to beginning of line
    const percent = ((currentValue)/totalValue*50).toFixed(2) ;
    let progressFirst = "";
    let progressLast = "";
    for (let j = 0; j < 50; j++) {
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
