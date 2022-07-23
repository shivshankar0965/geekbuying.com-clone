let mySlide = document.querySelectorAll(".slides");
let dot = document.querySelectorAll(".dot");
let counter = 1;
mySlideFun(counter);
let timer = setInterval(autoslide, 4000);
function autoslide() {
  counter += 1;
  mySlideFun(counter);
}
function plusSlide(n) {
  counter += n;
  mySlideFun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  mySlideFun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 4000);
}

function mySlideFun(n) {
  for (let i = 0; i < mySlide.length; i++) {
    mySlide[i].style.display = "none";
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  if (n > mySlide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = mySlide.length;
  }
  mySlide[counter - 1].style.display = "block";
  dot[counter - 1].classList.add("active");
}
//trending categoris
let trendCat = [
  {
    image_link:
      "https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",
    title: "Smart Home & Garden",
    des: "Smart cleaning robots and vacuums, living room furniture, patio & gargen supplies, up to 60% off!",
  },
  {
    image_link:
      "https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg",
    title: "E-transport",
    des: "My ride My speed My way. I'm keeping up with myself",
  },
  {
    image_link:
      "https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg",
    title: "3D Printers",
    des: "3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing",
  },
];
let trendSection = document.querySelector(".trending-div");
trendCat.map(function (e) {
  let div = document.createElement("div");
  trendSection.append(div);
  let image = document.createElement("img");
  image.src = e.image_link;
  let title = document.createElement("p");
  title.setAttribute("class", "heading");
  title.textContent = e.title;
  let des = document.createElement("p");
  des.textContent = e.des;
  div.append(image, title, des);
});
// displaying the link
let expand = document.querySelector(".expand");
let exp;
expand.addEventListener("click", function () {
  if (exp === 1) {
    document.querySelector(".exp-container").style.display = "flex";
    document.querySelector(
      ".plus-icon"
    ).innerHTML = `<i class="fa-solid fa-minus"></i>`;
    return (exp = 0);
  } else {
    document.querySelector(".exp-container").style.display = "none";
    document.querySelector(
      ".plus-icon"
    ).innerHTML = `<i class="fa-solid fa-plus"></i>`;
    return (exp = 1);
  }
});
// signin and sign up and page router
document.querySelector("#sign-up").addEventListener("click", function () {
  window.location.href = "signup.html";
});
document.querySelector("#sign-in").addEventListener("click", function () {
  window.location.href = "signin.html";
});
// navigation middle bar display and hide
const navbar = document.querySelector(".middle-head-wraper-parent");
window.onscroll = () => {
  if (window.scrollY > 700) {
    navbar.classList.add("fixed-position");
  } else if (window.scrollY < 700) {
    navbar.classList.remove("fixed-position");
    // navbar.classList.add("remove-position");
  }
};
// timer in home page
let countDownDate = new Date("Jul 30, 2022 15:58:52").getTime();
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.querySelector(".timer").innerHTML =
    days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById(".timer").innerHTML = "TIME UP!!";
  }
}, 1000);
