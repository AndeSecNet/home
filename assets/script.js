// Andes Secure Network — scripts
function $(s,ctx=document){return ctx.querySelector(s)}
function $all(s,ctx=document){return [...ctx.querySelectorAll(s)]}

const yearEl = $("#year"); if(yearEl) yearEl.textContent = new Date().getFullYear()

// Mobile menu (simple)
const menuBtn = $("#menu-btn")
const nav = $(".nav")
if(menuBtn && nav){
  menuBtn.addEventListener("click", ()=>{
    const open = nav.style.display === "flex"
    nav.style.display = open ? "none" : "flex"
    nav.style.flexDirection = "column"
    nav.style.gap = "12px"
    menuBtn.setAttribute("aria-expanded", String(!open))
  })
}

// Skin switcher
$all(".chip").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const skin = btn.dataset.skin
    document.body.classList.remove("skin-grid","skin-mesh","skin-radial")
    document.body.classList.add(skin)
  })
})

// Fake contact form handler
function handleSubmit(e){
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target).entries())
  alert(`Gracias, ${data.nombre}! Te contactaremos a ${data.correo}.`)
  e.target.reset()
  return false
}
