
var el1 = document.getElementById('imageOne');
var el2 = document.getElementById('imageTwo') ;
var el3 = document.getElementById('imageThree');
var el4 = document.getElementById('imageFour');
var el5 = document.getElementById('imageFive');
var el6 = document.getElementById('imageSix');
var el7 = document.getElementById('imageSeven');
var el8 = document.getElementById('imageEight');
var el9 = document.getElementById('imageNine');
var el10 = document.getElementById('imageTen');
var el11 = document.getElementById('imageEleven');
var el12 = document.getElementById('imageTwelve');
var el13 = document.getElementById('imageThirteen');
var el14 = document.getElementById('imageFourteen');
var el15 = document.getElementById('imageFifteen');
var el16 = document.getElementById('imageSixteen');
var el17 = document.getElementById('imageSeventeen');
var el18 = document.getElementById('imageEighteen');
var el19 = document.getElementById('imageNineteen');
var el20 = document.getElementById('imageTwenty');

var images = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19, el20];

var randomImage = Math.floor((Math.random() * 19) + 1);
var inputImage = imgages[randomImage];

function postImage() {
//trying to get random image to HTML div class first, second, thirdImage
//Do I need a counter, or just push 3 times?
}
function imageNumberAppears() {
  //counter for number of image appearances
  //if firstImage || secondImage || thirdImage for el count up
}

function clickPercentage() {
  // times clicked divided by imageNumberAppears
  // do I put event listener for click in here?
}
function DataCollector(image, numberAppearances, clickPercent) {
  this.image = image;
  this.numberAppearances = imageNumberAppears;
  this.clickPercent = clickPercentage;
};


var imageAppearances =


var ballard = new PizzaLocation('ballard')
ballard.pushHourlyData(new HourlyData('8:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('9:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('10:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('11:00 am', 0, 4, 0, 4));
ballard.pushHourlyData(new HourlyData('12:00 pm', 0, 4, 0, 4));
/*function DataCollector(image, imageSource, numberAppearances, clickPercent) {
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
}*/
