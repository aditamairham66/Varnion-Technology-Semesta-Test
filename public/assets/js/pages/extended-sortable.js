for (var example1 = document.getElementById("example1"), example2Left = document.getElementById("example2-left"), example2Right = document.getElementById("example2-right"), example3Left = document.getElementById("example3-left"), example3Right = document.getElementById("example3-right"), example4Left = document.getElementById("example4-left"), example4Right = document.getElementById("example4-right"), example5 = document.getElementById("example5"), example6 = document.getElementById("example6"), example7 = document.getElementById("example7"), gridDemo = document.getElementById("gridDemo"), multiDragDemo = document.getElementById("multiDragDemo"), swapDemo = document.getElementById("swapDemo"), nestedSortables = (new Sortable(example1,{
 animation: 150,
 ghostClass: "blue-background-class"
}),
new Sortable(example2Left,{
 group: "shared",
 animation: 150
}),
new Sortable(example2Right,{
 group: "shared",
 animation: 150
}),
new Sortable(example3Left,{
 group: {
     name: "shared",
     pull: "clone"
 },
 animation: 150
}),
new Sortable(example3Right,{
 group: {
     name: "shared",
     pull: "clone"
 },
 animation: 150
}),
new Sortable(example4Left,{
 group: {
     name: "shared",
     pull: "clone",
     put: !1
 },
 animation: 150,
 sort: !1
}),
new Sortable(example4Right,{
 group: "shared",
 animation: 150
}),
new Sortable(example5,{
 handle: ".handle",
 animation: 150
}),
new Sortable(example6,{
 filter: ".filtered",
 animation: 150
}),
new Sortable(gridDemo,{
 animation: 150,
 ghostClass: "blue-background-class"
}),
[].slice.call(document.querySelectorAll(".nested-sortable"))), i = 0; i < nestedSortables.length; i++)
 new Sortable(nestedSortables[i],{
     group: "nested",
     animation: 150,
     fallbackOnBody: !0,
     swapThreshold: .65
 });
new Sortable(multiDragDemo,{
 multiDrag: !0,
 selectedClass: "selected",
 fallbackTolerance: 3,
 animation: 150
}),
new Sortable(swapDemo,{
 swap: !0,
 swapClass: "highlight",
 animation: 150
});
