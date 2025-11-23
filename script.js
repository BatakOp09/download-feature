var btn = document.querySelector("button");
var inner = document.querySelector(".inner")
var h1 = document.querySelector(".bottom h1")
var h2 = document.querySelector(".box h2")

let grow = 0;

btn.addEventListener('click', function () {

    btn.style.pointerEvents = "none"
    
    let num =50 + Math.floor(Math.random()*50)
    h2.innerHTML = `your <span>song.mp3</span> will be downloaded in ${(num*100)/1000} sec`;
    let set = setInterval(function (){
       grow++;
        inner.style.width = grow + "%";
        h1.innerHTML = grow + "%";
        btn.textContent="downloading"

   }, num)
    
    setTimeout(() => {
        clearInterval(set)
        btn.textContent = "downloaded"
    },num*100);
    

})