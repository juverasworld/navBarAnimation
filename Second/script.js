const colors = ["#ff4141", "#f49fae", "#7c81a7", "a05da6", "#a78580"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);

  const randomColor = colors[randomIndex];

  return randomColor;
}

function changeColor(el) {
  document.getElementById(el).addEventListener("mouseenter", () => {
    document.getElementById(el).style.backgroundColor = getRandomColor();
    document.getElementById(el).style.color = "#fff";
  });
  document.getElementById(el).addEventListener("mouseleave", () => {
    document.getElementById(el).style.backgroundColor = "#fff";
    document.getElementById(el).style.color = "#0a090a";
  });
}

changeColor("btn1");
changeColor("btn2");

function openModal() {
  let tl = new gsap.timeline({});

  tl.to(".modal_container", {
    duration: 1,
    scale: 1,
    opacity: 1,
    ease: Expo.easeInOut,
  });
  tl.to(".img", {
    duration: 1,
    stagger: 0.2,
    width: "0vw",
    ease: Expo.easeInOut,
  });
  tl.to(".modal",{
    duration:1,
    opacity:1,
    ease: Expo.easeInOut

  }, "2.9")

  tl.play();

  document.querySelector(".close_btn").addEventListener("click",()=>{
    tl.reverse()
  })

}
