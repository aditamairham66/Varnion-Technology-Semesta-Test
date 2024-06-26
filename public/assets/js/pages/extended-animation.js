function testAnim(e) {
 const t = document.querySelector("#animationSandbox");
 t.classList.add(e, "animated"),
 t.addEventListener("animationend", ()=>{
     t.classList.remove(e, "animated")
 }
 , {
     once: !0
 })
}
document.addEventListener("DOMContentLoaded", ()=>{
 const e = document.querySelector(".js--triggerAnimation")
   , t = document.querySelector(".js--animations");
 e.addEventListener("click", e=>{
     e.preventDefault(),
     testAnim(t.value)
 }
 ),
 t.addEventListener("change", ()=>{
     testAnim(t.value)
 }
 )
}
);
