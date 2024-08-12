document.querySelector('.btn-1').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action of the link
    document.querySelector('#chat').scrollIntoView({
        behavior: 'smooth'
    });
});
const nav = document.querySelector("nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// js code to make draggable nav
function onDrag({ movementY }) {
  const navStyle = window.getComputedStyle(nav),
    navTop = parseInt(navStyle.top),
    navHeight = parseInt(navStyle.height),
    windHeight = window.innerHeight;
  
  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  
  if (navTop > windHeight - navHeight) {
    nav.style.top = `${windHeight - navHeight}px`;
  }
}

nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag);
});


