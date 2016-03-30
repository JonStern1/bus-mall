
//Trying to put images into an array
var imagesArray = [];
var clicks = 0;
var bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, usb, waterCan, wineGlass;
//Attempting to create random image picker
//I didn't note this well. Trying to tie in random # with a variable
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

imageArray.push(bag);
imageArray.push(banana);
imageArray.push(bathroom);
imageArray.push(boots);
imageArray.push(breakfast);
imageArray.push(bubblegum);
imageArray.push(chair);
imageArray.push(cthulhu);
imageArray.push(dogDuck);
imageArray.push(dragon);
imageArray.push(pen);
imageArray.push(petSweep);
imageArray.push(scissors);
imageArray.push(shark);
imageArray.push(sweep);
imageArray.push(tauntaun);
imageArray.push(unicorn);
imageArray.push(usb);
imageArray.push(waterCan);
imageArray.push(wineGlass);

//functions to display the data. Manipulate the dom. Random number.
