var randomImage = //image from array

function DataCollector(image, imageSource, numberAppearances, clickPercent) {
  this.image = image;
  this.imageSource = imageSource;
  this.numberAppearances = numberAppearances;
  this.clickPercent = clickPercent;

DataCollector.prototype.rendertopage = function() {}
}

function userClick(event){
  (globalTotalClicks < 25, globalTotalClicks ++);
  console.log('event.target', event.target);
  if globalTotalClicks < 5) {
    deleteImages(imgOne, imgTwo, imgThree);
    displayThreeImages(imgOne, imgTwo, imgThree);
  }
else    {
  deleteImages(imgOne, imgTwo, imgThree);
  alert('you have clicked 25 times');
}
for (var i =0; i <imageDatatArray.length; i++){
  if(imageDataArray[i], imgSrc === currentImgSrc){
    imageDataArray[i].numOfClicks++;
  }
}
}

function handleImageClick(event){
  console.log('event.target: ', event.target);
  console.log('hello from handleImageClick event handler.');
}

var trackImages = document.getElementsByClassName('track-images');

for (var i = 0; i < trackImages.length; i++){
  trackImages[i].addEventListener('click', handleImageClick);
}
