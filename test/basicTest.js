const crimsonProgressBar = require("./../app.js");
describe('Styling test:', function() {
  it("Using setTimeout to simulate asynchronous code!",function(done){
    this.timeout(10000);
      loop().then(resolve => {
        console.log();
        done();
      });
  });
});

async function loop(){
  for (var i = 1; i <= 100; i++) {
    await delayedLog(i, 100);
  }
  return true;
}
function delay(){
  return new Promise(resolve => setTimeout(resolve, 50));
}

async function delayedLog(currentValue, totalValue){
    await delay();
    await crimsonProgressBar.renderProgressBar(currentValue, totalValue, "green", "red", "|", "=", false, "large");
    return true;
}
