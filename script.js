function calcCost() {
  var areaWidth = document.querySelector('#widthOfArea').value;
  var areaHeight = document.querySelector('#heightOfArea').value;
  var tileWidth = document.querySelector('#widthOfTile').value;
  var tileHeight = document.querySelector('#widthOfTile').value;
  var costOfTile = document.querySelector('#costOfTile').value;
  var displayPara = document.querySelector('#userDisplay');

  var costOfJob = ((Math.round((areaWidth/tileWidth))*Math.round((areaHeight/tileHeight)))*costOfTile);

  displayPara.innerHTML = "Total cost of the job is £" + parseFloat(Math.round(costOfJob * 100) / 100).toFixed(2)
}
