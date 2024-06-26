class AdvancedForm {
 constructor() {
     this.body = document.getElementsByTagName("body")[0],
     this.window = window
 }
 initcolorpickers() {
     var e = document.querySelectorAll(".classic-colorpicker")
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".classic-colorpicker",
             theme: "classic",
             default: "#405189",
             swatches: ["rgba(244, 67, 54, 1)", "rgba(233, 30, 99, 0.95)", "rgba(156, 39, 176, 0.9)", "rgba(103, 58, 183, 0.85)", "rgba(63, 81, 181, 0.8)", "rgba(33, 150, 243, 0.75)", "rgba(3, 169, 244, 0.7)", "rgba(0, 188, 212, 0.7)", "rgba(0, 150, 136, 0.75)", "rgba(76, 175, 80, 0.8)", "rgba(139, 195, 74, 0.85)", "rgba(205, 220, 57, 0.9)", "rgba(255, 235, 59, 0.95)", "rgba(255, 193, 7, 1)"],
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     hex: !0,
                     rgba: !0,
                     hsva: !0,
                     input: !0,
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".monolith-colorpicker"))
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".monolith-colorpicker",
             theme: "monolith",
             default: "#0ab39c",
             swatches: ["rgba(244, 67, 54, 1)", "rgba(233, 30, 99, 0.95)", "rgba(156, 39, 176, 0.9)", "rgba(103, 58, 183, 0.85)", "rgba(63, 81, 181, 0.8)", "rgba(33, 150, 243, 0.75)", "rgba(3, 169, 244, 0.7)"],
             defaultRepresentation: "HEXA",
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     hex: !1,
                     rgba: !1,
                     hsva: !1,
                     input: !0,
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".nano-colorpicker"))
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".nano-colorpicker",
             theme: "nano",
             default: "#3577f1",
             swatches: ["rgba(244, 67, 54, 1)", "rgba(233, 30, 99, 0.95)", "rgba(156, 39, 176, 0.9)", "rgba(103, 58, 183, 0.85)", "rgba(63, 81, 181, 0.8)", "rgba(33, 150, 243, 0.75)", "rgba(3, 169, 244, 0.7)"],
             defaultRepresentation: "HEXA",
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     hex: !1,
                     rgba: !1,
                     hsva: !1,
                     input: !0,
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".colorpicker-demo"))
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".colorpicker-demo",
             theme: "monolith",
             default: "#405189",
             components: {
                 preview: !0,
                 interaction: {
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".colorpicker-opacity-hue"))
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".colorpicker-opacity-hue",
             theme: "monolith",
             default: "#0ab39c",
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".colorpicker-switch"))
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".colorpicker-switch",
             theme: "monolith",
             default: "#3577f1",
             swatches: ["rgba(244, 67, 54, 1)", "rgba(233, 30, 99, 0.95)", "rgba(156, 39, 176, 0.9)", "rgba(103, 58, 183, 0.85)", "rgba(63, 81, 181, 0.8)", "rgba(33, 150, 243, 0.75)", "rgba(3, 169, 244, 0.7)"],
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".colorpicker-input"))
       , e = (e && e.forEach(function() {
         Pickr.create({
             el: ".colorpicker-input",
             theme: "monolith",
             default: "#f7b84b",
             swatches: ["rgba(244, 67, 54, 1)", "rgba(233, 30, 99, 0.95)", "rgba(156, 39, 176, 0.9)", "rgba(103, 58, 183, 0.85)", "rgba(63, 81, 181, 0.8)", "rgba(33, 150, 243, 0.75)", "rgba(3, 169, 244, 0.7)"],
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     input: !0,
                     clear: !0,
                     save: !0
                 }
             }
         })
     }),
     document.querySelectorAll(".colorpicker-format"));
     e && e.forEach(function() {
         Pickr.create({
             el: ".colorpicker-format",
             theme: "monolith",
             default: "#f06548",
             swatches: ["rgba(244, 67, 54, 1)", "rgba(233, 30, 99, 0.95)", "rgba(156, 39, 176, 0.9)", "rgba(103, 58, 183, 0.85)", "rgba(63, 81, 181, 0.8)", "rgba(33, 150, 243, 0.75)", "rgba(3, 169, 244, 0.7)"],
             components: {
                 preview: !0,
                 opacity: !0,
                 hue: !0,
                 interaction: {
                     hex: !0,
                     rgba: !0,
                     hsva: !0,
                     input: !0,
                     clear: !0,
                     save: !0
                 }
             }
         })
     })
 }
 init() {
     this.initcolorpickers()
 }
}
(new AdvancedForm).init();
