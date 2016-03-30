
var imageObjectArray = [];
var clicks = 0;
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass;

function ImageConstructor(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.numberDisplayed = 0;
  this.numberClicked = 0;
}

ImageConstructor.prototype.displayIncrementor = function(){
  this.numberDisplayed++;
};

ImageConstructor.prototype.clickIncrementor = function(){
  this.numberClicked++;
};

bag = new ImageConstructor('bag', 'img/bag.jpg');
banana = new ImageConstructor('banana', 'img/banana.jpg');
bathroom = new ImageConstructor('bathroom', 'img/bathroom.jpg');
boots = new ImageConstructor('boots', 'img/boots.jpg');
breakfast = new ImageConstructor('breakfast', 'img/breakfast.jpg');
bubblegum = new ImageConstructor('bubblegum', 'img/bubblegum.jpg');
chair = new ImageConstructor('chair', 'img/chair.jpg');
cthulhu = new ImageConstructor('cthulhu', 'img/cthulhu.jpg');
dogDuck = new ImageConstructor('dogDuck', 'img/dog-duck.jpg');
dragon = new ImageConstructor('dragon', 'img/dragon.jpg');
pen = new ImageConstructor('pen', 'img/pen.jpg');
petSweep = new ImageConstructor('petSweep', 'img/pet-sweep.jpg');
scissors = new ImageConstructor('scissors', 'img/scissors.jpg');
shark = new ImageConstructor('shark', 'img/shark.jpg');
sweep = new ImageConstructor('sweep', 'img/sweep.png');
tauntaun = new ImageConstructor('tauntaun', 'img/tauntaun.jpg');
unicorn = new ImageConstructor('unicorn', 'img/unicorn.jpg');
usb = new ImageConstructor('usb', 'img/usb.gif');
waterCan = new ImageConstructor('waterCan', 'img/water-can.jpg');
wineGlass = new ImageConstructor('wineGlass', 'img/wine-glass.jpg');

imageObjectArray.push(bag);
imageObjectArray.push(banana);
imageObjectArray.push(bathroom);
imageObjectArray.push(boots);
imageObjectArray.push(breakfast);
imageObjectArray.push(bubblegum);
imageObjectArray.push(chair);
imageObjectArray.push(cthulhu);
imageObjectArray.push(dogDuck);
imageObjectArray.push(dragon);
imageObjectArray.push(pen);
imageObjectArray.push(petSweep);
imageObjectArray.push(scissors);
imageObjectArray.push(shark);
imageObjectArray.push(sweep);
imageObjectArray.push(tauntaun);
imageObjectArray.push(unicorn);
imageObjectArray.push(usb);
imageObjectArray.push(waterCan);
imageObjectArray.push(wineGlass);

//functions to display the data. Manipulate the dom. Random number.
function loadImage(){
  var randomImage1 = Math.floor((Math.random() * 19) + 1);
  var randomImage2 = Math.floor((Math.random() * 19) + 1);
  var randomImage3 = Math.floor((Math.random() * 19) + 1);

  var threeImageDiv = document.getElementById('three-images');

  // create three image tags
  // add them to the div with id="threeImages"

  // create an image tag
  var imageOne = document.createElement('img');
  var imageTwo = document.createElement('img');
  var imageThree = document.createElement('img');
  // set its src attribute to a random image objects file path
  imageOne.setAttribute('src', imageObjectArray[randomImage1].filePath);
  imageTwo.setAttribute('src', imageObjectArray[randomImage2].filePath);
  imageThree.setAttribute('src', imageObjectArray[randomImage3].filePath);
  // append the image to the page
  threeImageDiv.appendChild(imageOne);
  threeImageDiv.appendChild(imageTwo);
  threeImageDiv.appendChild(imageThree);
//put counter here?
};

function ButtonConstructor(buttonName, buttonFilePath){
  this.buttonName = buttonName;
  this.buttonFilePath = buttonFilePath;
}

tenMoreClicks = new ButtonConstructor ('tenMoreClicks', 'image/htmlButton.jpeg');
giveMeData = new ButtonConstructor ('giveMeData', 'image/htmlButton.jpeg');
//if (imageReload === 25) {

  // var imageTwo = document.createElement('img');
  // var imageThree = document.createElement('img');

loadImage();
