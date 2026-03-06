let x = document.getElementById("b1");
x.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*100);
    b1.innerHTML = `<h1>${a}</h1>`;
})

x.addEventListener("mouseleave",function(){
    b1.innerHTML = "<h1>1</h1>";
})

let y = document.getElementById("b2");
let clr = "red";
y.addEventListener("mouseenter",function(){
    if(clr=="red"){
        y.style.backgroundColor = "red";
        clr = "green";
}
else{
    y.style.backgroundColor = "green";
    clr = "red";
}
})

y.addEventListener("mouseleave",function(){
    y.style.backgroundColor = "white";
})

let z = document.getElementById("b3");
z.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    z.style.backgroundColor = `rgb(${a},${b},${c})`;
})
z.addEventListener("mouseleave",function(){
    z.style.backgroundColor = "white";
})


let k = document.getElementById("b4");
k.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);

    z.style.backgroundColor = `rgb(${a},255,255)`;
    x.style.backgroundColor = `rgb(255,${b},255)`;
    y.style.backgroundColor = `rgb(255,255,${c})`;
})
k.addEventListener("mouseleave",function(){
    k.style.backgroundColor = "white";
    x.style.backgroundColor = "white";
    y.style.backgroundColor = "white";
    z.style.backgroundColor = "white";
})

let m = document.getElementById("main");
let c = document.getElementById("cursor");
m.addEventListener("mousemove",function(move){
    c.style.left = move.x + "px";
    c.style.top = move.y + "px";
})












