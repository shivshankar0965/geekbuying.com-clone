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
