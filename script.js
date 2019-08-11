const info = document.querySelectorAll('.infoSection');
const Array = ["hexagon","circle","octagon"];

for (var i = 0; i < info.length; i++) {
  let random = Math.floor(Math.random()*3);
  info[i].classList.add(Array[random]);
}

const section = document.querySelectorAll("section");
for (var i = 0; i < section.length; i++) {
  section[i].addEventListener("mouseover",function(){
      this.querySelector("div").classList.add("transparent");
  });
  section[i].addEventListener("mouseout",function(){
      this.querySelector("div").classList.remove("transparent");
  });
}

const a = document.querySelectorAll("a");
for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("mouseover", function(){
    const currentDeco= this.querySelectorAll(".currentDeco");
    this.classList.add("navTrigger")
    for (var i = 0; i < currentDeco.length; i++) {
      currentDeco[i].classList.remove("noshow");
      let random = Math.floor(Math.random()*3);
      currentDeco[i].classList.add(Array[random]);
    }
  })
  a[i].addEventListener("mouseout", function(){
    const currentDeco= this.querySelectorAll(".currentDeco");
    this.classList.remove("navTrigger");
    for (var i = 0; i < currentDeco.length; i++) {
      currentDeco[i].classList.add("noshow");
    }
  })
}
