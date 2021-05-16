
 askName();
 showTime();


 function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
 }
 function showTime() {
   var date = new Date();
  
   var y= date.getFullYear();
   var a=date.getMonth();
var g=date.getDate()
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = date.getDay();
 
   if (session == 1) {
     session = "Pazartesi";
   } else if (session == 2) {
     session = "Salı";
   } else if (session == 3) {
     session = "Çarşamba";
   } else if (session == 4) {
     session = "Perşembe";
   } else if (session == 5) {
     session = "Cuma";
   } else if (session == 6) {
     session = "Cumartesi";
   } else if (session == 0) {
     session = "Pazar";
   }
 
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   var time =  g+"."+a+"."+y+","+ h + ":" + m + ":" + s + " " + session;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;
 
   setTimeout(showTime, 1000);
 }
 
