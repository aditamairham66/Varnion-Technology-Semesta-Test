for (var slider = document.getElementById("slider"), resultElement = (noUiSlider.create(slider, {
 start: [20, 80],
 connect: !0,
 range: {
     min: 0,
     max: 100
 }
}),
document.getElementById("result")), sliders = document.getElementsByClassName("sliders"), colors = [0, 0, 0], select = ([].slice.call(sliders).forEach(function(t, n) {
 noUiSlider.create(t, {
     start: 127,
     connect: [!0, !1],
     orientation: "vertical",
     range: {
         min: 0,
         max: 255
     },
     format: wNumb({
         decimals: 0
     })
 }),
 t.noUiSlider.on("update", function() {
     colors[n] = t.noUiSlider.get();
     var e = "rgb(" + colors.join(",") + ")";
     resultElement.style.background = e,
     resultElement.style.color = e
 })
}),
document.getElementById("input-select")), i = -20; i <= 40; i++) {
 var option = document.createElement("option");
 option.text = i,
 option.value = i,
 select.appendChild(option)
}
var html5Slider = document.getElementById("html5")
, inputNumber = (noUiSlider.create(html5Slider, {
 start: [10, 30],
 connect: !0,
 range: {
     min: -20,
     max: 40
 }
}),
document.getElementById("input-number"))
, nonLinearSlider = (html5Slider.noUiSlider.on("update", function(e, t) {
 e = e[t];
 t ? inputNumber.value = e : select.value = Math.round(e)
}),
select.addEventListener("change", function() {
 html5Slider.noUiSlider.set([this.value, null])
}),
inputNumber.addEventListener("change", function() {
 html5Slider.noUiSlider.set([null, this.value])
}),
document.getElementById("nonlinear"))
, nodes = (noUiSlider.create(nonLinearSlider, {
 connect: !0,
 behaviour: "tap",
 start: [500, 4e3],
 range: {
     min: [0],
     "10%": [500, 500],
     "50%": [4e3, 1e3],
     max: [1e4]
 }
}),
[document.getElementById("lower-value"), document.getElementById("upper-value")])
, lockedState = (nonLinearSlider.noUiSlider.on("update", function(e, t, n, l, i) {
 nodes[t].innerHTML = e[t] + ", " + i[t].toFixed(2) + "%"
}),
!1)
, lockedSlider = !1
, lockedValues = [60, 80]
, slider1 = document.getElementById("slider1")
, slider2 = document.getElementById("slider2")
, lockButton = document.getElementById("lockbutton")
, slider1Value = document.getElementById("slider1-span")
, slider2Value = document.getElementById("slider2-span");
function crossUpdate(e, t) {
 var n;
 lockedState && (e -= lockedValues[(n = slider1 === t ? 0 : 1) ? 0 : 1] - lockedValues[n],
 t.noUiSlider.set(e))
}
function setLockedValues() {
 lockedValues = [Number(slider1.noUiSlider.get()), Number(slider2.noUiSlider.get())]
}
lockButton.addEventListener("click", function() {
 lockedState = !lockedState,
 this.textContent = lockedState ? "Unlock" : "lock"
}),
noUiSlider.create(slider1, {
 start: 60,
 animate: !1,
 range: {
     min: 50,
     max: 100
 }
}),
noUiSlider.create(slider2, {
 start: 80,
 animate: !1,
 range: {
     min: 50,
     max: 100
 }
}),
slider1.noUiSlider.on("update", function(e, t) {
 slider1Value.innerHTML = e[t]
}),
slider2.noUiSlider.on("update", function(e, t) {
 slider2Value.innerHTML = e[t]
}),
slider1.noUiSlider.on("change", setLockedValues),
slider2.noUiSlider.on("change", setLockedValues),
slider1.noUiSlider.on("slide", function(e, t) {
 crossUpdate(e[t], slider2)
}),
slider2.noUiSlider.on("slide", function(e, t) {
 crossUpdate(e[t], slider1)
});
for (var hidingTooltipSlider = document.getElementById("slider-hide"), slider = (noUiSlider.create(hidingTooltipSlider, {
 range: {
     min: 0,
     max: 100
 },
 start: [20, 80],
 tooltips: !0
}),
document.getElementById("slider-color")), connect = (noUiSlider.create(slider, {
 start: [4e3, 8e3, 12e3, 16e3],
 connect: [!1, !0, !0, !0, !0],
 range: {
     min: [2e3],
     max: [2e4]
 }
}),
slider.querySelectorAll(".noUi-connect")), classes = ["c-1-color", "c-2-color", "c-3-color", "c-4-color", "c-5-color"], i = 0; i < connect.length; i++)
 connect[i].classList.add(classes[i]);
var toggleSlider = document.getElementById("slider-toggle")
, softSlider = (noUiSlider.create(toggleSlider, {
 orientation: "vertical",
 start: 0,
 range: {
     min: [0, 1],
     max: 1
 },
 format: wNumb({
     decimals: 0
 })
}),
toggleSlider.noUiSlider.on("update", function(e, t) {
 "1" === e[t] ? toggleSlider.classList.add("off") : toggleSlider.classList.remove("off")
}),
document.getElementById("soft"));
noUiSlider.create(softSlider, {
 start: 50,
 range: {
     min: 0,
     max: 100
 },
 pips: {
     mode: "values",
     values: [20, 80],
     density: 4
 }
}),
softSlider.noUiSlider.on("change", function(e, t) {
 e[t] < 20 ? softSlider.noUiSlider.set(20) : 80 < e[t] && softSlider.noUiSlider.set(80)
});
