const colors = require("colors/safe");

module.exports = {
  renderProgressBar: async function (currentValue, totalValue){
    process.stdout.clearLine();  // clear current text
    process.stdout.cursorTo(0);  // move cursor to beginning of line
    const percent = ((currentValue)/totalValue*50).toFixed(2) ;
    let progressFirst = "";
    let progressLast = "";
    for (let j = 0; j < 50; j++) {
      if (j <= percent) {
        progressFirst = progressFirst + "=";
      }else{
        progressLast = progressLast + "-";
      }
    }
    progress = " [" + colors.green(progressFirst) + colors.yellow(progressLast)+"]";
    process.stdout.write(progress + "  "+(currentValue)+"/"+totalValue);
    return progress;
  }
};
