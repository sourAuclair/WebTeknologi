
//var c = 0;
var index_c=0; var rounds_c=0; var index_v=0; var rounds_v=0; var index_m=0; var rounds_m=0;
var arr_carbs= ["mashed potato", "rice", "spaghetti","pasta screws", "potato boats","couscous"];
var arr_veg= ["carrot", "aubergine", "broccoli","pumpkin","cauliflower","mushrom"];
var arr_meat= ["steak", "chicken breast", "salmon","trout","calf","pork"];
//var t;
var carb; var veg; var meat;
var timer_is_on = 0;


//carbs
function carbs_func(){
document.getElementById("carbs").value=arr_carbs[index_c];
index_c++;
carbs=setTimeout(carbs_func,500);
if (index_c >arr_carbs.length-1){
	index_c=0;
    if (rounds_c>0){
    clearTimeout(carbs); //prevent the function set with the setTimeout() to execute:
    document.getElementById("carbs").value=arr_carbs[Math.floor(Math.random() * arr_carbs.length)];
    }
    
    rounds_c++; }
}
//veg
function veg_func(){
document.getElementById("veg").value=arr_veg[index_v];
index_v++;
veg=setTimeout(veg_func,500);
if (index_v >arr_veg.length-1){
	index_v=0;
    if (rounds_v>0){
    clearTimeout(veg); //Prevent the function set with the setTimeout() to execute:
    document.getElementById("veg").value=arr_veg[Math.floor(Math.random() * arr_veg.length)];
    }
    
    rounds_v++; }
}
//meat
function meat_func(){
document.getElementById("meat").value=arr_meat[index_m];
index_m++;
meat=setTimeout(meat_func,500);
if (index_m >arr_meat.length-1){
	index_m=0;
    if (rounds_m>0){
    clearTimeout(meat); //Prevent the function set with the setTimeout() to execute:
    document.getElementById("meat").value=arr_meat[Math.floor(Math.random() * arr_meat.length)];
    document.getElementById("meal_generated").value="Woho you created a new meal. Enjoy!";
    }
    
    rounds_m++; }
}

function startMealGen() {
  if (!timer_is_on) {
    timer_is_on = 1;
    //timedCount();
    //Specify the fuctions that are to be called when pushing the button
    carbs_func();
    veg_func();
    meat_func();
  }
}

//function stopCount() {
  //clearTimeout(t);
  //clearTimeout(v); 
  //timer_is_on = 0;
//}
