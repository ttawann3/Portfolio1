// ======= เคอร์เซอร์ดาว =======
const cursor = document.createElement("div");
cursor.classList.add("cursor-star");
cursor.innerText = "★";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  // ดาวเล็กตามเคอร์เซอร์
  const trail = document.createElement("div");
  trail.classList.add("trail-star");
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
  trail.innerText = "★";
  document.body.appendChild(trail);
  setTimeout(()=>trail.remove(),800);
});

// ======= คลิกสร้างรูป =======
document.querySelectorAll(".img-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const src = btn.dataset.src;
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("pop-image");
    img.style.left = Math.random()*(window.innerWidth-100)+"px";
    img.style.top = Math.random()*(window.innerHeight-100)+"px";
    document.body.appendChild(img);
    setTimeout(()=>img.remove(),1500);
  });
});
