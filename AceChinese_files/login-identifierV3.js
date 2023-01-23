function change() {

  function popup() {
    const myTimeout = setTimeout(login, 50000);
    document.querySelector("#form-section").style.display = "none";
    document.querySelector("#pop-up").style.display = "block";

    document.querySelector("body").style.background = "url('https://s-media-cache-ak0.pinimg.com/originals/a3/03/d0/a303d0d7d53ccb6f87cd36fd788d925e.jpg')";

    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundSize = "cover";

    var x = document.querySelector(".username").value;
    document.querySelector("#pop-up").innerHTML = "欢迎<i>" + x + "</i><br>又是元气满满的一天，加油！";
  }
  function login() {
    window.open("https://aceclez.github.io/AceChinese/dashboard.html");
    location.reload();
    window.close();
  }
  var x = document.querySelector(".username").value;
  var y = document.querySelector(".password").value;

  console.log("x:" + x)
  console.log("y:" + y)

  if (x == "sunny" && y == "12345") {
    popup();
    setTimeout(login, 2000);
  }
  else {
    window.open("https://aceclez.github.io/AceChinese/");
    //alert("incorrect password");
    window.close();
  }

}