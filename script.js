var currentdish = "Wrap";
var prevdish = "";
var c_time = "5";
var p_time = "";
var show_h = true;
var show_q = false;
var show_c = false;
const sp = [
 "What are you making?",
    "Search for recipes?",
    "Find a recipe?",
    "What's for dinner?",
    "Need inspiration?",
    "Discover meals?",
    "Search ingredients?",
    "What's cooking?",
    "Find tasty dishes?",
    "Recipe search?",
    "What to cook?",
    "Find delicious food?",
    "Search meals?",
    "What's on the menu?",
    "Cooking ideas?"
];

const lp = [
  "Flavors in the making...",
  "Cooking up tasty anticipation...",
  "Preparing your gourmet journey...",
  "Savor the culinary anticipation...",
  "Taste buds on standby...",
  "Deliciousness loading, please wait...",
  "Seasoned for your pleasure...",
  "Freshness in every byte...",
  "Simmering with flavor...",
  "Tantalizing your taste buds...",
  "Cooking up some goodness...",
  "Stirring the digital pot...",
  "Simmering with digital flavor...",
  "Baking something delicious...",
  "Seasoning your experience now...",
  "Prepping tasty bytes now...",
  "Blending tasty digital treats...",
  "Mixing up the load...",
  "Whipping up tasty data...",
  "Serving fresh digital bites...",
  "Marinating your screen time...",
  "Grilling your patience lightly...",
  "Kneading more flavor here...",
  "Chopping the loading time...",
  "Sautéing some byte-sized fun...",
  "Sprinkling digital magic now...",
  "Toasting the virtual bread...",
  "Brewing something special...",
  "Roasting some tasty data...",
  "Plating up your experience...",
];

function gohome() {
  console.log("Started Go Home Function");
  document.getElementById('sp').value='';
  show_h = false;
  show_q = false;
  show_c = false;
  var menu = document.getElementById("showdishes");
  document.getElementById("home").classList.add("active");
  document.getElementById("dishes").classList.remove("active");
  document.getElementById("quick").classList.remove("active");
  document.getElementById("showdishes").style.display = "none";
  document.getElementById("_quick").style.display = "none";
  document.getElementById("sp").style.border="0";
  document.getElementById("parent").innerHTML = "";
  menu.innerHTML = "";
  document.getElementById('if').style.display="none";
  console.log("Go Home Function Ended");
  console.log("Redirecting to Landing Function with value '1'");
  landing(1);
}
function landing(a) {
  console.log("Started Landing function with value :"+a);
  if(a==1){
    console.log("Welcome Notification Deactivated !");
    document.getElementById("cover").style.display = "none";
    document.getElementById("notify").style.display = "none";
  const randomIndex = Math.floor(Math.random() * lp.length);
  const randomIndex1 = Math.floor(Math.random() * sp.length);
  const txt = lp[randomIndex];
  const txt1 = sp[randomIndex1];
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://dummyjson.com/recipes");
  xhttp.send();
  xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);
    var sl = 0;
    var menu = document.getElementById("parent");
    var menitems = JSON.parse(this.responseText);
    var rat='';
   

    if (txt.length > 0 && show_h) {
      console.log("Loading Page activated");
      document.getElementById("lp").innerText = txt;
      document.getElementById("sp").placeholder = txt1;
        console.log(" Loader Text :"+txt+"  Seach Bar Text :"+txt1);
      document.getElementById("loader").style.display = "flex";
      menu.style.opacity = "0.09";
      document.getElementById('parent').style.cursor="progress";
      setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById('parent').style.cursor="auto";
        
       
        menu.style.opacity = "1";
        console.log("Loading Ended !");
      }, 3000);
    }

    menu.innerHTML = "";

    for (var i = 0; i < menitems.recipes.length; i++) {
      console.log("Creating item:"+i);
            if(menitems.recipes[i].rating<2&&menitems.recipes[i].rating>=1){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<3&&menitems.recipes[i].rating>=2){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<4&&menitems.recipes[i].rating>=3){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<5&&menitems.recipes[i].rating>=4){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr"></span>`;
              }
              else{
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>`;
              }
      if (menitems.recipes[i].ingredients.length > 2) {
        sl = 1;
      } else {
        sl = 5;
      }
      
      menu.innerHTML +=
        "<div class='div' id='divv'  onclick=showrecip(" +
        menitems.recipes[i].id +
        ")><img class='img' src=" +
        menitems.recipes[i].image +
        "><div>" +
        "<p class='c_head'>" +
        menitems.recipes[i].name +
        "</p>" +
        "<p class='c_prep'><b>Preparation Time:</b> " +
        menitems.recipes[i].prepTimeMinutes +
        "Min</p>" +
        "<p class='c_prep'><b>Cooking time:</b> " +
        menitems.recipes[i].cookTimeMinutes +
        "Min</p>" +
        "<p class='c_ing'><b>Ingredients:</b> " +
        menitems.recipes[i].ingredients[0].slice(0, 15) +
        "...</p>" +
        "<p class='c_tags'>" +
        menitems.recipes[i].tags.slice(0, sl) +
        "</p><p class='c_ing'> <b> Rating: </b>"+rat+"</p>" +
        "</div></div> ";
    }
    console.log("Item Creations Successful !");
    document.getElementById('if').style.display="none";
  }
}
else{
  console.log("Welcome Notification activated");
  document.getElementById('parent').style.opacity="0";
  document.getElementById("loader").style.display = "none";
  document.getElementById("cover").style.display = "block";
  document.getElementById("notify").style.display = "flex";
  let i = 1;

  function updateImage() {
    document.getElementById('notify-img').src = "./images/"+i+".gif";
    i = (i % 4) + 1;
    setTimeout(updateImage, 2000); 
}
updateImage();
}

}

function showcat() {
  console.log("Show categories clicked !");
  document.getElementById('sp').value='';
  show_c = !show_c;
  if (show_c) {
    console.log("Showing categories :"+show_c);
    const arra = [];
    document.getElementById("showdishes").style.display = "block";
    document.getElementById("_quick").style.display = "none";
    document.getElementById("dishes").classList.add("active");
    document.getElementById("home").classList.remove("active");
    document.getElementById("quick").classList.remove("active");
    document.getElementById("sp").style.border="0";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://dummyjson.com/recipes/tags");
    xhttp.send();
    xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);
      var menu = document.getElementById("showdishes");
      var menitems = JSON.parse(this.responseText);
      menu.innerHTML = "";
      arra.length = 0;
      for (var i = 0; i < menitems.length; i++) {
        console.log("Creating category :"+i);
        let item1= menitems[i].trim().replace(" ", "-");
        let itemm =item1.replace(" ", "-");
        
        arra.push(
          "<li class='items' onclick=showtag('" +
            itemm +
            "') ><a id='" +
            itemm +
            "'>" +
            menitems[i] +
            "</a></li>"
        );
        
      }
      console.log("Categories Created !");
      menu.innerHTML = arra.sort().join("");
    }
  } else {
    console.log("Showing categories :"+ show_c);
    document.getElementById("showdishes").style.display = "none";
    document.getElementById("dishes").classList.remove("active");
    gohome();
  }
}
function quick() {
  console.log("Show Quick ones clicked !")
  document.getElementById('sp').value='';
  show_q = !show_q;
  if (show_q) {
    console.log("Showing quick ones :"+show_q);
    const count = [];
    const arra = [];
    document.getElementById("showdishes").style.display = "none";
    document.getElementById("_quick").style.display = "block";
    document.getElementById("quick").classList.add("active");
    document.getElementById("home").classList.remove("active");
    document.getElementById("dishes").classList.remove("active");
    document.getElementById("showdishes").style.display = "none";
    document.getElementById("sp").style.border="0";

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://dummyjson.com/recipes");
    xhttp.send();
    xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);
      var menu = document.getElementById("_quick");
      var menitems = JSON.parse(this.responseText);

      menu.innerHTML = "";
      arra.length = 0;
      for (var i = 0; i < menitems.recipes.length; i++) {
        
        let p_count =
          Number(menitems.recipes[i].prepTimeMinutes) +
          Number(menitems.recipes[i].cookTimeMinutes);

        if (!count.includes(p_count)) {
          count.push(p_count);
          count.sort((a, b) => a - b); 
        }
      }

      for (let i = 0; i < count.length; i++) {
        console.log("Creating quick ones item :"+i);
        arra.push(
          "<li class='items' onclick=showtime(" +
            count[i] +
            ")><a id='" +
            count[i] +
            "'>" +
            count[i] +
            "minutes</a></li>"
        );
      }
      console.log("Quick ones Created !");

      menu.innerHTML = arra.join("");
  
    }
  } else {
    console.log("Showing quick ones :"+show_q);
    document.getElementById("_quick").style.display = "none";
    document.getElementById("quick").classList.remove("active");
    gohome();
  }
}

function showtime(timee) {
  console.log(timee+"min Clicked !");
  p_time = c_time;
  c_time = timee;
  if(c_time==p_time){
    p_time='5';
  }
  
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://dummyjson.com/recipes");
  xhttp.send();
  xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);
    var sl = 0;
    var rat='';
    var menu = document.getElementById("parent");
    var menitems = JSON.parse(this.responseText);
    
var o=0;
    document.getElementById(timee).style.color = "orangered";
    document.getElementById(timee).style.backgroundColor = " rgba(255, 229, 180, 1)";
    document.getElementById(p_time).style.backgroundColor = "white";
    document.getElementById(p_time).style.color = "black";
    menu.innerHTML = "";
    for (var i = 0; i < menitems.recipes.length; i++) {
      if(menitems.recipes[i].rating<2&&menitems.recipes[i].rating>=1){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<3&&menitems.recipes[i].rating>=2){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<4&&menitems.recipes[i].rating>=3){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<5&&menitems.recipes[i].rating>=4){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr"></span>`;
              }
              else{
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>`;
              }
      if (menitems.recipes[i].ingredients.length > 2) {
        sl = 1;
      } else {
        sl = 5;
      }
      p_count =
        Number(menitems.recipes[i].prepTimeMinutes) +
        Number(menitems.recipes[i].cookTimeMinutes);
      if (timee === p_count) {
        o=o+1;
        console.log("Displaying items :"+o);
        
        menu.innerHTML +=
          "<div class='div' onclick=showrecip(" +
          menitems.recipes[i].id +
          ")><img class='img' src=" +
          menitems.recipes[i].image +
          "><div>" +
          "<p class='c_head'>" +
          menitems.recipes[i].name +
          "</p>" +
          "<p class='c_prep'><b>Preparation Time:</b> " +
          menitems.recipes[i].prepTimeMinutes +
          "Min</p>" +
          "<p class='c_prep'><b>Cooking time:</b> " +
          menitems.recipes[i].cookTimeMinutes +
          "Min</p>" +
          "<p class='c_ing'><b>Ingredients:</b> " +
          menitems.recipes[i].ingredients[0].slice(0, 15) +
          "...</p>" +
          "<p class='c_tags'>" +
          menitems.recipes[i].tags.slice(0, sl) +
          "</p><p class='c_ing'> <b> Rating: </b>"+rat+"</p>" +
          "</div></div> ";
          document.getElementById('if').style.display="block";
          document.getElementById('if').innerHTML="Items Found : "+ o;
      }
    }
    console.log("Displayed items :"+o);
    
  }
}

function showtag(ta) {
  
  prevdish = currentdish;
  currentdish = ta;

  if(currentdish==prevdish){
    prevdish='Wrap';
  }

  var tag1 = ta.replace("-", " ");
  var tag = tag1.replace("-", " ");

console.log("Category CLicked :"+tag +"!");
  document.getElementById(ta).style.backgroundColor = "  rgba(255, 229, 180, 1)";
  document.getElementById(ta).style.color = "orangered";
  document.getElementById(prevdish).style.backgroundColor = "white";
  document.getElementById(prevdish).style.color = "black";

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://dummyjson.com/recipes/tag/" + tag);

  xhttp.send();
  xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);
    var sl = 0; var rat='';
    var menu = document.getElementById("parent");
    var menitems = JSON.parse(this.responseText);
  
    menu.innerHTML = "";
  
    for (var i = 0; i < menitems.recipes.length; i++) {
      if(menitems.recipes[i].rating<2&&menitems.recipes[i].rating>=1){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<3&&menitems.recipes[i].rating>=2){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<4&&menitems.recipes[i].rating>=3){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr "></span>
        <span class="fa fa-star starr"></span>`;
              }
              else if(menitems.recipes[i].rating<5&&menitems.recipes[i].rating>=4){
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr"></span>`;
              }
              else{
        rat=`<span class="fa fa-star starr checked"></span>
        <span class="fa fa-star starr  checked"></span>
        <span class="fa fa-star starr  checked"></span>
        <span class="fa fa-star starr  checked"></span>
        <span class="fa fa-star starr  checked"></span>`;
              }
      if (menitems.recipes[i].ingredients.length > 2) {
        sl = 1;
      } else {
        sl = 5;
      }
      console.log("Displaying items :"+i);
      menu.innerHTML +=
        "<div class='div' onclick=showrecip(" +
        menitems.recipes[i].id +
        ")><img class='img' src=" +
        menitems.recipes[i].image +
        "><div>" +
        "<p class='c_head'>" +
        menitems.recipes[i].name +
        "</p>" +
        "<p class='c_prep'><b>Preparation Time:</b> " +
        menitems.recipes[i].prepTimeMinutes +
        "Min</p>" +
        "<p class='c_prep'><b>Cooking time:</b> " +
        menitems.recipes[i].cookTimeMinutes +
        "Min</p>" +
        "<p class='c_ing'><b>Ingredients:</b> " +
        menitems.recipes[i].ingredients[0].slice(0, 15) +
        "...</p>" +
        "<p class='c_tags'>" +
        menitems.recipes[i].tags.slice(0, sl) +
        "</p><p class='c_ing'> <b> Rating: </b>"+rat+"</p>" +
        "</div></div> ";    
    }
    document.getElementById('if').style.display="block";
    document.getElementById('if').innerHTML="Items Found : "+ menitems.total;
    console.log("Displayed items :"+menitems.total);
  }
}
function showrecip(a) {
  
  document.getElementById('sp').value='';
  if (document.getElementById("parent").style.opacity == "1") {
    console.log("Show a Recipe Clicked !");
    document.getElementById("parent").innerHTML = "";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://dummyjson.com/recipes/" + a);
 var k='';
    xhttp.send();
    xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);
      var menu = document.getElementById("parent");
      var menitems = JSON.parse(this.responseText);
      var rat='';
      console.log("Showing recipe of :"+menitems.name);
      menu.innerHTML = "";

      if(menitems.rating<2&&menitems.rating>=1){
rat=`<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr "></span>
<span class="fa fa-star starr "></span>
<span class="fa fa-star starr "></span>
<span class="fa fa-star starr"></span>`;
      }
      else if(menitems.rating<3&&menitems.rating>=2){
rat=`<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr "></span>
<span class="fa fa-star starr "></span>
<span class="fa fa-star starr"></span>`;
      }
      else if(menitems.rating<4&&menitems.rating>=3){
rat=`<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr "></span>
<span class="fa fa-star starr"></span>`;
      }
      else if(menitems.rating<5&&menitems.rating>=4){
rat=`<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr"></span>`;
      }
      else{
rat=`<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>
<span class="fa fa-star starr checked"></span>`;
      }
      
      k +=
        "<div><div class='showrecip-head'>" +
            menitems.name +"</div>" +
        "<div class='showrecip-div'><div>" +
        "<p class='showrecip-prep'><b>Preparation Time:</b> " +
        menitems.prepTimeMinutes +
        "Min</p>" +
        "<p class='showrecip-cook'><b>Cooking time:</b>" +
        menitems.cookTimeMinutes +
        "Min</p>" +
        "<b>Ingredients:</b><ul class='showrecip-ing'>";
      for (var i = 0; i < menitems.ingredients.length; i++) {
       k += "<li>" + menitems.ingredients[i] +"</li>";
      }
      k+= "</ul><b>Instructions:</b><ul class='showrecip-ins'>";
      for (var i = 0; i < menitems.instructions.length; i++) {
      k+= "<li>" + menitems.instructions[i]+ "</li>";
      }
      k +="</ul><p class='showrecip-tags'><b>" + menitems.tags + "</b></p></div><img src=" +
        menitems.image + "></div></div><p class='showrecip-ins'> <b> Rating: </b>"+rat+"</p>";
      menu.innerHTML=k;
      document.getElementById('if').style.display="none";
    }
  }
}

function searchrecipe(){
  console.log("Search a Recipe CLicked !");
    var searchcontent=document.getElementById('sp').value.trim();
    if(searchcontent.length<1){
      show_h=false;
      gohome();
    }
    else{
    const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://dummyjson.com/recipes/search?q=" + searchcontent);
  xhttp.send();
  xhttp.onload = function () { console.log("Request Status : "+this.status+"-"+this.statusText);

    var sl = 0;
    var menu = document.getElementById("parent");
    var menitems = JSON.parse(this.responseText);
    var rat='';
    if(menitems.rating<2&&menitems.rating>=1){
      rat=`<span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr "></span>
      <span class="fa fa-star starr "></span>
      <span class="fa fa-star starr "></span>
      <span class="fa fa-star starr"></span>`;
            }
            else if(menitems.rating<3&&menitems.rating>=2){
      rat=`<span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr "></span>
      <span class="fa fa-star starr "></span>
      <span class="fa fa-star starr"></span>`;
            }
            else if(menitems.rating<4&&menitems.rating>=3){
      rat=`<span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr "></span>
      <span class="fa fa-star starr"></span>`;
            }
            else if(menitems.rating<5&&menitems.rating>=4){
      rat=`<span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr"></span>`;
            }
            else{
      rat=`<span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>
      <span class="fa fa-star starr checked"></span>`;
            }
    menu.innerHTML = "";
    if (menitems.total>0){
      console.log("Displaying items with :"+searchcontent);
    for (var i = 0; i < menitems.recipes.length; i++) {
  
      if (menitems.recipes[i].ingredients.length > 2) {
        sl = 1;
      } else {
        sl = 5;
      }
      console.log("Displaying item :"+i);
      menu.innerHTML +=
        "<div class='div' onclick=showrecip(" +
        menitems.recipes[i].id +
        ")><img class='img' src=" +
        menitems.recipes[i].image +
        "><div>" +
        "<p class='c_head'>" +
        menitems.recipes[i].name +
        "</p>" +
        "<p class='c_prep'><b>Preparation Time:</b> " +
        menitems.recipes[i].prepTimeMinutes +
        "Min</p>" +
        "<p class='c_prep'><b>Cooking time:</b> " +
        menitems.recipes[i].cookTimeMinutes +
        "Min</p>" +
        "<p class='c_ing'><b>Ingredients:</b> " +
        menitems.recipes[i].ingredients[0].slice(0, 15) +
        "...</p>" +
        "<p class='c_tags'>" +
        menitems.recipes[i].tags +
        "</p><p class='c_ing'> <b> Rating: </b>"+rat+"</p>" +
        "</div></div> ";

      document.getElementById('if').style.display="block";
      document.getElementById('if').innerHTML="Items Found : "+ menitems.total;
      console.log("Displayed items :"+menitems.total);

    }}
    else{
      console.log("No items Found :"+searchcontent);
      document.getElementById('if').style.display="none";
      if(searchcontent.includes("<")){
menu.innerHTML="<p class='nof'>No items found matching your search : '"+searchcontent.replaceAll(/</g,"----")+"'</p>";
      }
      else{
        menu.innerHTML="<p class='nof'>No items found matching your search : '"+searchcontent+"'</p>"
      }
     }
  }

}

}
function searchfocus(){
  console.log("Focused on search bar");
    show_h=false;
   
    document.getElementById("sp").style.border="2px solid coral";
    document.getElementById("home").classList.remove("active");
    document.getElementById("dishes").classList.remove("active");
    document.getElementById("quick").classList.remove("active");
    document.getElementById("showdishes").style.display = "none";
    document.getElementById("_quick").style.display = "none";
    console.log("Redirecting to Landing Function with value '1'");
    
 landing(1);   
}
