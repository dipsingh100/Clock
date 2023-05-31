function setTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  document.getElementById("hour").textContent = hour;
  document.getElementById("min").textContent = min;
  document.getElementById("sec").textContent = sec;

  if (hour > 12) {
    if (hour != 12) document.getElementById("hour").textContent = hour - 12;
    document.getElementById("ampm").textContent = "PM";
  } else {
    if (hour == 0) {
      document.getElementById("hour").textContent = 12;
    }
    document.getElementById("ampm").textContent = "AM";
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

function update_schedule() {
  var sel = document.getElementsByTagName("select");
  var li = document.getElementsByTagName("li");
  var status1, status2;

  for (let i = 0; i < sel.length; i++) {
    var nt = Number(sel[i].value);
    var nt2;
    if (nt < 12) {
      status1 = "AM";
      if (nt + 1 > 12) {
        nt2 = nt + 1 - 12;
        status2 = "PM";
      } 
      else {
        if (nt + 1 == 12) {
          nt2 = 12;
          status2 = "PM";
        } 
        else {
          nt2 = nt + 1;
          status2 = "AM";
          if(nt == 0){
            nt = 12;
          }
        }
    }
  } else {
      status1 = "PM";
      if (nt + 1 > 23) {
        nt = nt - 12;
        nt2 = 12;
        status2 = "AM";
      } else {
        nt = nt - 12;
        nt2 = nt + 1;
        status2 = "PM";
      }
    }

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
}

function setAlarm() {
  var sel = document.getElementsByTagName("select");
  //   var time = document.getElementById("hour");
  let time = new Date();
  let hour = time.getHours();
  update_schedule();
  for (let item of sel) {
    if (item.value == hour) {
      if (item.id == "wakeup") {
        //set the image, text, schedule
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/Component 30 – 1.svg");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "GRAB SOME HEALTHY BREAKFAST!!!";
      } else if (item.id == "lunch") {
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/lunch_image.svg");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "LET'S HAVE SOME LUNCH!!!";
      } else if (item.id == "nap") {
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/coffee.png");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!!!";
      } else if (item.id == "night") {
        document
          .getElementById("image_ch")
          .setAttribute("src", "img/good_night.svg");
        document.getElementsByClassName("greet_block1")[0].textContent =
          "CLOSE YOUR EYES AND GO TO SLEEP!!!";
      }
      break;
    }
  }
}

var alarm_btm =  document.getElementById("alarm-btn");
alarm_btm.addEventListener("mouseover",(event)=>{
  document.getElementById("alarm-btn").textContent = "Party time!";
})
alarm_btm.addEventListener("mouseout",(event)=>{
  document.getElementById("alarm-btn").textContent = "Set Alarm!";
})