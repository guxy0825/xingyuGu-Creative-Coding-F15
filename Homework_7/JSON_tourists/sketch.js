var json_data;
var years = [];
var tourists = [];
var spending = [];
var timg_1;
var timg_2;
var timg_3;
var timg_4;
var timg_5;
var coin_img;
var listLength;

function preload(){
  var url = 'https://data.nola.gov/api/views/hc59-n6t7/rows.json';
  json_data = loadJSON(url);
  
  timg_1 = loadImage("assets/tourist_1.png");
  timg_2 = loadImage("assets/tourist_2.png");
  timg_3 = loadImage("assets/tourist_3.png");
  timg_4 = loadImage("assets/tourist_4.png");
  timg_5 = loadImage("assets/tourist_5.png");
  coin_img = loadImage("assets/coin.png");
}
function setup() {
  createCanvas(1500,500);
  noLoop();
  
  listLength = json_data.data.length;
  //read years & toursists amount
  for (var i = 0; i< listLength/2; i++)
  {
  years[i] = json_data.data[i][10];
  // print(years[i]);
  tourists[i] = json_data.data[i][14];
  // print(tourists[i]);
  }
  
  //read years & toursists spending amount
  for (var j = listLength/2; j< listLength; j++)
  {
  var m = j-listLength/2;
  spending[m] = json_data.data[j][14];
  // print(spending[m]);
  }
}

function draw() {
  // img(timg_1,0,0);
  // image(timg_1, 10,10);
  for (var m = 0; m < listLength/2; m++)
  {
    var tourist_amount = int(tourists[m]);
    for(var n = 0; n < tourist_amount; n++)
    {
      if(n%5 == 1)
      {
        drawTourists(timg_1,m,n);
      }
      if(n%5 == 2)
      {
        drawTourists(timg_2,m,n);
      }
      if(n%5 == 3)
      {
        drawTourists(timg_3,m,n);
      }
      if(n%5 == 4)
      {
        drawTourists(timg_4,m,n);
      }
      if(n%5 == 0)
      {
        drawTourists(timg_5,m,n);
      }
    }
    var tourist_spending = int(spending[m]);
    drawSpending(spending[m],m, tourist_spending);
    text("$"+spending[m]+"billion", m*120+20, 80)
    text(tourists[m]+"millions tourists", m*120, 270)
    text(years[m],m*120+35,300);
  }

}

function drawTourists(img,position,amount){
  image(img, position*120+amount*10,200, img.width/15, img.height/15);
}

function drawSpending(spending,position,amount){
  for(var l = 0; l < spending; l++)
  {
    image(coin_img,position*120+20,150-l*10, coin_img.width/5, coin_img.height/5)
  }
  
}