let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let option3 = document.getElementById("option3")
let option4 = document.getElementById("option4")


let ans = document.getElementById("total")

let questionNumber = 1





let L = document.getElementById("btn")
let S = document.getElementById("question")


L.addEventListener("click", function(){
    S.innerHTML = "What is 100 - 50?"
    option1.innerHTML = "40"
    option2.innerHTML = "20"
    option3.innerHTML = "90"
    option4.innerHTML = "50"


  questionNumber = 2

})




option1.addEventListener("click", function(){

    if(questionNumber == 1){
        ans.innerHTML = "Wrong"
        ans.style.color = "red"
    }
    else{
        ans.innerHTML = "Wrong"
        ans.style.color = "red"
    }

});


option2.addEventListener("click", function(){

    if(questionNumber == 1){
        ans.innerHTML = "Correct"
        ans.style.color = "darkGreen"
       
    }
    else{
        ans.innerHTML = "Wrong"
        ans.style.color = "red"
       
    }

});


option3.addEventListener("click", function(){

    if(questionNumber == 1){
        ans.innerHTML = "Wrong"
        ans.style.color = "red"
    }
    else{
        ans.innerHTML = "Wrong"
        ans.style.color = "red"
    }

});


option4.addEventListener("click", function(){

    if(questionNumber == 1){
        ans.innerHTML = "Wrong"
        ans.style.color = "red"
    }
    else{
        ans.innerHTML = "Correct"
        ans.style.color = "darkGreen"
    }

});


let C = document.getElementById("ctn")

C.addEventListener("click", function(){
    window.location.href = "result.html"
    
})




