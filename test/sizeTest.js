const crimsonProgressBar = require("./../app.js");
describe('Size test:', function() {
  it("Extra Small output",function(done){
    this.timeout(10000);
      loop("xsmall").then(resolve => {
        console.log();
        done();
      });
  });
  it("Small output",function(done){
    this.timeout(10000);
      loop("small").then(resolve => {
        console.log();
        done();
      });
  });
  it("Medium output",function(done){
    this.timeout(10000);
      loop("medium").then(resolve => {
        console.log();
        done();
      });
  });
  it("Large output",function(done){
    this.timeout(10000);
      loop("large").then(resolve => {
        console.log();
        done();
      });
  });
  it("Extra Large output",function(done){
    this.timeout(10000);
      loop("xlarge").then(resolve => {
        console.log();
        done();
      });
  });
});

async function loop(size){
  for (var i = 1; i <= 100; i++) {
    await delayedLog(i, 100, size);
  }
  return true;
}
function delay(){
  return new Promise(resolve => setTimeout(resolve, 50));
}

async function delayedLog(currentValue, totalValue, size){
    await delay();
    await crimsonProgressBar.renderProgressBar(currentValue, totalValue, "green", "red", "|", "=", false, size);
    return true;
}
