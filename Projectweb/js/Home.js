
const feedBack = new Object();
feedBack.count=0;
feedBack.runoff=false;
feedBack.dataBoxAll={'attri_butes':[],'databox':[]};
feedBack.error=false;
feedBack.slideStart=true;
feedBack.slideloopVal=7000;
feedBack.setRuls = function(nextPrev){
const getslidediv = this.dataBoxAll;
var slideDiv = getslidediv.attri_butes.slideritem;
var role = false;
this.count+=nextPrev;

if (this.count<0) {
 this.count = slideDiv.length-1;
}else if(this.count >slideDiv.length-1){
 this.count = 0;
}

if(nextPrev == 1){
role = true
}else if(nextPrev ==-1){
role = false
}

let data = {
  'index':this.count,
  'role':role,
  'clickval':false,
}

this.makeAnimate(data);
}

feedBack.downCircleClick =function(cliceddiv,index){
let dotbox = this.dataBoxAll['attri_butes']['dotbox'];
let circleicons = dotbox.querySelectorAll('.down-circle');
let tabindex = parseInt(cliceddiv.getAttribute('tabindex'));

let clickval = {'clickdiv':cliceddiv,'clickindex':tabindex};
let data = {
  'index':tabindex,
  'role':true,
  'clickval':clickval
}


if (this.slideStart) { //if setinterval clear or off this true
this.slideStart = false;
}else{
  this.makeAnimate(data);
this.count=index;
}

}

feedBack.makeDownBox =function(imgurl,active ,index){
  var newDiv = document.createElement("div");
  var innardiv =  document.createElement("div");
    var  image = document.createElement("IMG");
innardiv.setAttribute('class','down-img-box');

if(active){
   newDiv.setAttribute('class','down-circle active');
}else{
  newDiv.setAttribute('class','down-circle');
}

newDiv.setAttribute('tabindex',index);
//newDiv.textContent = this.count;
    image.setAttribute("src", imgurl);
    image.setAttribute("alt", "The Pulpit Rock");
     newDiv.append(innardiv);
   innardiv.append(image);
   const self = this;
   newDiv.addEventListener("click", function(){
    self.downCircleClick(this,index);
});

   return newDiv;

};
feedBack.feedBackStart =function(arg){
if (arg && arg.baseid) {
const mainid = document.getElementById(arg.baseid);
if (mainid) {
const  slideParent = mainid.querySelector('.feed-middlebox');
if (slideParent) {
 const  slideDiv = slideParent.querySelectorAll('.feed-slideitem');
if (slideDiv) {
var circle = mainid.querySelector('.feed-frofile-box');
var circleDown = mainid.querySelector('.feed-downicons-box');
var nextbutton = mainid.querySelector('[data-role="slide-next"]');
var prevbutton =  mainid.querySelector('[data-role="slide-prev"]');
var setname =mainid.querySelector('[data-profile="setname"]');
var setinfo =mainid.querySelector('[data-profile="setinfo"]');

if (circle) {
if (circleDown) {
if (nextbutton) {
if (prevbutton) {
if (setname) {
if (setinfo) {

var error = false;
const dataBox =[];

for (let index = 0; index < slideDiv.length; index++) {

if(error){
console.error('data-name or data-info or data-img misssing please resolve it first');
}else{
let dataName =  slideDiv[index].hasAttribute("data-name");
let dataInfo =  slideDiv[index].hasAttribute("data-info");
let dataimg =  slideDiv[index].hasAttribute("data-img");
if(dataName && dataInfo && dataimg){
let getName = slideDiv[index].getAttributeNode("data-name").value;
let getInfo = slideDiv[index].getAttributeNode("data-info").value;
let getImg = slideDiv[index].getAttributeNode("data-img").value;
dataBox.push({'name':getName,'info':getInfo,'img':getImg});
}else{
error = true;
}
}
};

if (error) {
  console.error('data-name or data-info or data-img misssing please resolve it first');

}else{
let firsData =dataBox[0];
let makeparent = document.createElement('div');
makeparent.setAttribute('class','feed-inner-profile active');
 let  profileimg = document.createElement("IMG");
  profileimg.setAttribute("src", firsData.img);
  profileimg.setAttribute('class','circle-img');
  makeparent.append(profileimg);
circle.append(makeparent);
setname.innerHTML='';
setinfo.innerHTML='';
let makesetname = document.createElement('div');
let makesetinfo = document.createElement('div');
makesetinfo.setAttribute('class','getinfo active');
makesetinfo.append(firsData['info']);
makesetname.setAttribute('class','getname active');
makesetname.append(firsData['name'])
setname.append(makesetname);
setinfo.append(makesetinfo);

circleDown.innerHTML='';
var em = 5;
var lastem = 3;
for (let index = 0; index < dataBox.length; index++) {
 let listimg  = dataBox[index];
let imgaeUrl = listimg.img;
var boolrole = false;

if (index==0) { boolrole = true;}
let newDiv =  this.makeDownBox(imgaeUrl,boolrole,index);
if (index <dataBox.length-1) {
em -=0.5;
let st =  "width:"+em+"em; height:"+em+"em;";
newDiv.setAttribute("style",st);
}else{

let st =  "width:"+lastem+"em; height:"+lastem+"em; opacity:0.80;";
newDiv.setAttribute("style",st);
}


 circleDown.append(newDiv);

 

} //end for



const setData = {
'attri_butes':{
  'mainid':mainid,
  'slideritem':slideDiv,
  'profile':circle,
  'dotbox':circleDown,
  'slidenext':nextbutton,
  'slideprev':prevbutton,
  'setname':setname,
  'setinfo':setinfo,
  },
'databox':dataBox,
}

this.dataBoxAll.attri_butes = setData['attri_butes'];
this.dataBoxAll.databox = setData['databox'];
//this.dataBoxAll.push(setData);
this.nextPrev();
this.tapDitect();

} //if (error)


}else {console.error('data-profile="setname" is missing');}
}else {console.error('data-profile="setinfo" is missing');}
}else{console.error('slide-next attributes is missing');}
}else{console.error('feed-frofile-box is missing');}
}else{console.error('feed-frofile-box is missing');}
}else{
console.error('feed-downicons-box is missing');}
}else {console.error('feed-slideitem class missing');}
}else{console.error('feed-middlebox class missing');}}else {
console.error('mainid ID is missing');}
}else{console.error('your sidelide not define');}

} //end function



feedBack.autoSlide = function(){
// slideStart:false,
  //slideloopVal:2000,

const autoStart = setInterval(()=>{
  if (this.slideStart) {
      this.setRuls(1);
    }else{clearInterval(autoStart); }

},this.slideloopVal);

},

feedBack.tapDitect =function(){

if (this.dataBoxAll['attri_butes']) {
const self =this;
let getId = this.dataBoxAll['attri_butes'];
if (getId.mainid) {

const mainid = getId.mainid;
var clickindex;
var opval = 0;

  mainid.addEventListener("touchstart", function(e){
let touches = e.changedTouches;
let pX = touches[0].pageX;
opval = pX;
  }, false);


mainid.addEventListener("touchend", function(e){
let touches = e.changedTouches;
let pX = touches[0].pageX;

if (pX>opval) { //'left to right';
clickindex = 1;

if (self.slideStart) {//if setinterval clear or off this true
self.slideStart = false
}else{
self.setRuls(clickindex);
}

}else if(pX<opval){//'right to left';
clickindex = -1;
if (self.slideStart) {//if setinterval clear or off this true
self.slideStart = false
}else{
self.setRuls(clickindex);
}

}

  }, false);

}//end if (getId.mainid)

}//end id if (this.dataBoxAll['attri_butes']);


};


feedBack.nextPrev = function(){

if (this.dataBoxAll['attri_butes']) {
let nextprev = this.dataBoxAll['attri_butes'];
if (nextprev.slidenext && nextprev.slideprev) {
var clickindex;

  nextprev.slidenext.addEventListener("click", ()=>{
clickindex = 1;
//this.makesvgbounce(e)

if (this.slideStart) {//if setinterval clear or off this true
this.slideStart = false
}else{
this.setRuls(clickindex);
}

});
nextprev.slideprev.addEventListener("click", ()=>{
clickindex = -1;
if(this.slideStart) {//if setinterval clear or off this true
this.slideStart = false
}else{
this.setRuls(clickindex);
}
});

} 

}

};
feedBack.makeinforSlide =function(circleDown,data){

/*
this function call from makeaminate functioon
 */

let em = 5;

if (data.clickval) {
if (data.clickval.clickdiv) {
if (data.clickval.clickindex || data.clickval.clickindex==0) {
const circleDownChild = circleDown.querySelectorAll('.down-circle');
circleDown.prepend(data.clickval.clickdiv);
const addsize = circleDown.querySelectorAll('.down-circle');
//add use for circleDownChild assine bofore prepend
for (let i = 0; i < circleDownChild.length; i++) {
 if (circleDownChild[i]==data.clickval.clickdiv) {
circleDownChild[i].classList.add('active');
 }else{
if (circleDownChild[i].classList.contains("active")) {
circleDownChild[i].classList.remove("active");
 }
 }
let emval = em-=0.5;
if (i<circleDownChild.length-1) {
let st =  "width:"+emval+"em; height:"+emval+"em;";
addsize[i].setAttribute("style",st);
}else{

let emval = 3;
let st =  "width:"+emval+"em; height:"+emval+"em; opacity:0.8";
addsize[i].setAttribute("style",st);

}


}

}
 }
}else{

if (data.role) {
circleDown.append(circleDown.firstElementChild);
const circleDownChild = circleDown.querySelectorAll('.down-circle');
for (let i = 0; i < circleDownChild.length; i++) {
let downimgbox = circleDownChild[i];
if (downimgbox.classList.contains("active")) {
downimgbox.classList.remove("active");
 }

let emval = em-=0.5;
if (i<circleDownChild.length-1) {
let st =  "width:"+emval+"em; height:"+emval+"em;";
downimgbox.setAttribute("style",st);

}else{
let emval = 3;
let st =  "width:"+emval+"em; height:"+emval+"em; opacity:0.8";
downimgbox.setAttribute("style",st);
}
downimgbox.style.order = i;

}
circleDownChild[0].classList.add('active');


}else{

const circleDownChild = circleDown.querySelectorAll('.down-circle');
circleDownChild[circleDownChild.length-1].classList.add('active');
for (let i = circleDownChild.length-1; i >= 0; i--) {
let downimgbox = circleDownChild[i];
 if (downimgbox.classList.contains("active")) {
downimgbox.classList.remove("active");
 }
  
let emval = em-=0.5;
if (i!=0) {
let st =  "width:"+emval+"em; height:"+emval+"em;";
downimgbox.setAttribute("style",st);
}else{
let emval = 3;
let st =  "width:"+emval+"em; height:"+emval+"em; opacity:0.8";
downimgbox.setAttribute("style",st);
}
downimgbox.style.order = i;

}

circleDown.prepend(circleDown.lastElementChild);
circleDownChild[circleDownChild.length-1].classList.add('active');

}

}



}
feedBack.makeAnimate =function(data){

/*
this fuction call from downCircleClick(cliceddiv,index) and  setRuls(nextPrev)
 */


let index = data['index'];
var role =  data['role'];
let clickval = data['clickval'];
if (clickval) {
role = true;

}

const getData = this.dataBoxAll;


const getattr = getData['attri_butes'];
const getinfo = getData['databox'];

let slideDiv = getattr['slideritem'];
let circleDown = getattr['dotbox'];
var circle = getattr['profile'];
var setname = getattr['setname'];
var setinfo = getattr['setinfo'];


let feedData = getinfo[index];
/*
this getinfo[index] data come from this constractor
 */


for (let i = 0; i < slideDiv.length; i++) {


 if (index==i) {
slideDiv[i].classList.add("active");
if(role){
slideDiv[i].classList.add('left');
}else{
slideDiv[i].classList.add('right');
}

 }else{

let getClass = slideDiv[i].classList;
if (getClass.contains('active')) {
 getClass.remove("active");
}

if (getClass.contains('left')) {
 getClass.remove("left");
}
if (getClass.contains('right')) {
 getClass.remove("right");
}


 }
}



//circle.classList.remove('active');
circle.removeChild(circle.childNodes[0]);
setname.removeChild(setname.childNodes[0]);
setinfo.removeChild(setinfo.childNodes[0]);
let img =  document.createElement("IMG");
img.setAttribute('src',feedData.img);
img.setAttribute("alt", "The Pulpit Rock");
circle.append(img);
let makeparent = document.createElement('div');
makeparent.setAttribute('class','feed-inner-profile');
makeparent.append(img);
circle.append(makeparent);

let makesetname = document.createElement('div');
let makesetinfo = document.createElement('div');
makesetinfo.setAttribute('class','getinfo');
makesetinfo.append(feedData.info);
makesetname.setAttribute('class','getname');
makesetname.append(feedData['name'])
setname.append(makesetname);
setinfo.append(makesetinfo);
setTimeout(function(){
makeparent.classList.add('active');
makesetname.classList.add('active');
makesetinfo.classList.add('active');
},10);



//circleDownChild[index].nextSibling.style.display = 'none';


this.makeinforSlide(circleDown,data);



//circleDown.find('.down-circle').eq(index).addClass('active');



};

feedBack.makeSvg = function(){

var draw1 = SVG('svgmakefeedback-1').size('100%','100%');

var draw2 = SVG('svgmakefeedback-2').size('100%','100%');
draw1.viewbox({ x:0, y: 0, width:492, height:125 });
draw2.viewbox({ x:0, y: 0, width:492, height:125 });

var pathtop = draw1.path('M 0 125.4 C 0.3 110.06 3.13 96.4 8.62 85.94 C 32.38 40.64 199.86 45 244.78 0.35 C 290.18 45 457.65 40.64 481.38 85.94 C 486.87 96.4 489.71 110.06 489.99 125.4 L 0 125.4 Z');

//var rect = draw.rect(svgw,rectH).move(0,pathH).fill('lime');
var pathbottom = draw2.path('M 0 125.4 C 0.3 110.06 3.13 96.4 8.62 85.94 C 32.38 40.64 199.86 45 244.78 0.35 C 290.18 45 457.65 40.64 481.38 85.94 C 486.87 96.4 489.71 110.06 489.99 125.4 L 0 125.4 Z');
pathtop.fill('#ffffff').move(1,5);
draw1.translate(0, 7)
pathtop.stroke({ color: 'red', width: 2, linecap: 'round', linejoin: 'round' });
pathbottom.fill('#ffffff').move(1,-5);
pathbottom.stroke({ color: '#ffffff', width: 2, linecap: 'round', linejoin: 'round' });
pathbottom.rotate(180);

pathtop.addClass('droppath-arrow');
pathbottom.addClass('droppath-arrow')



}



feedBack.makeSvg();
feedBack.feedBackStart({
baseid:'feedback-box',
 });

feedBack.autoSlide();
