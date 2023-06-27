function setTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  document.getElementById("hour").textContent = hour.toString().padStart(2, '0');
  document.getElementById("min").textContent = min.toString().padStart(2, '0');
  document.getElementById("sec").textContent = sec.toString().padStart(2, '0');

  if (hour >= 12) {
    document.getElementById("ampm").textContent = "PM";
    if (hour != 12) document.getElementById("hour").textContent = (hour - 12).toString().padStart(2, '0');
  } else {
    document.getElementById("ampm").textContent = "AM";
    if (hour == 0) document.getElementById("hour").textContent = 12;
  }

  switch (true) {
    case hour >= 4 && hour <= 11:
      document.getElementsByClassName("greet_block2")[0].textContent =
        "GOOD MORNING!!";
      break;
    case hour > 11 && hour < 16:
      document.getElementsByClassName("greet_block2")[0].textContent =
        "GOOD AFTERNOON!!";
      break;
    case hour >= 16 && hour < 20:
      document.getElementsByClassName("greet_block2")[0].textContent =
        "GOOD EVENING!!";
      break;
    case hour >= 20 && hour <= 3:
      document.getElementsByClassName("greet_block2")[0].textContent =
        "GOOD NIGHT!!";
      break;
  }
}

setInterval(setTime, 1000);

function update_schedule(i, time) {
  var status1, status2;
  
  var nt = Number(time);
  var nt2;
  if (nt < 12) {
    status1 = "AM";
    nt2 = nt+1
    if (nt2 == 12)
      status2 = "PM";
    else
      status2 = "AM";
    if (nt == 0)
      nt = 12;
  } else {   //nt>=12
    status1 = "PM";
    nt2 = nt+1;
    if (nt2 > 23) {
      status2 = "AM";
      nt2 = 12;
    } else {
      status2 = "PM";
      nt2 = nt2 - 12;
    }
    if (nt != 12){
      nt = nt - 12;
    }
  }

  var li = document.getElementsByTagName("li");
  switch (i) {
    case 0:
      li[i].textContent = `Wake Up Time : ${nt + status1} - ${nt2 + status2}`;
      break;
    case 1:
      li[i].textContent = `Lunch Time : ${nt + status1} - ${nt2 + status2}`;
      break;
    case 2:
      li[i].textContent = `Nap Time : ${nt + status1} - ${nt2 + status2}`;
      break;
    case 3:
      li[i].textContent = `Night Time : ${nt + status1} - ${nt2 + status2}`;
      break;
  }
}

function setAlarm() {
  var sel = document.getElementsByTagName("select");
  //   var time = document.getElementById("hour");
  let time = new Date();
  let hour = time.getHours();
  for (let item = 0; item < sel.length; item++) {
    update_schedule(item, sel[item].value);
    if (sel[item].value == hour) {
      if (sel[item].id == "wakeup") {
        //set the image, text, schedule
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/Component 30 – 1.svg");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "GRAB SOME HEALTHY BREAKFAST!!!";
      } else if (sel[item].id == "lunch") {
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/lunch_image.svg");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "LET'S HAVE SOME LUNCH!!!";
      } else if (sel[item].id == "nap") {
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/coffee.png");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!!!";
      } else if (sel[item].id == "night") {
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/good_night.svg");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "CLOSE YOUR EYES AND GO TO SLEEP!!!";
      }
    }
  }
}

var alarm_btm = document.getElementById("alarm-btn");
alarm_btm.addEventListener("mouseover", (event) => {
  document.getElementById("alarm-btn").textContent = "Party time!";
});
alarm_btm.addEventListener("mouseout", (event) => {
  document.getElementById("alarm-btn").textContent = "Set Alarm!";
});
