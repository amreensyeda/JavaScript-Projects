let counter=0;
let decreaseCountEl=document.getElementById("decreaseCount-el")
let countEl=document.getElementById("count-el")
let resetEl=document.getElementById("reset-el")
let increaseCountEl=document.querySelector("#increaseCount-el")

decreaseCountEl.addEventListener("click",function(){
    counter-=1
    countEl.style.color="red";
    countEl.textContent=counter
})
resetEl.addEventListener("click",function(){
    counter=0
    countEl.style.color="black";
    countEl.textContent=counter
})
increaseCountEl.addEventListener("click",function(){
    counter+=1
    countEl.style.color="green"
    countEl.textContent=counter
})
