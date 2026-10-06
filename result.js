let s = document.getElementById("score")

s.addEventListener("click" , function(){
    s.innerHTML = "Congratulation! Your score is 2/2"
    s.style.color = "darkGreen"
   
})



let re = document.getElementById("restart")

re.addEventListener("click" , function(){
    window.location.href = "index.html"
})

