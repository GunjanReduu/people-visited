//document.getElementById("count").innerHTML=5
let countel=document.getElementById("count-el")
let prevEn = document.getElementById("prev-en")
let count=0
function increment(){
    count= count+1
    countel.textContent=count
}
function save(){
    prevEn.textContent += count+ " - "
    count=0
    countel.textContent=count
}

/*let welcomeEl= document.getElementById("welcome-el")
let name ="Per Harold Borgan"
let greeting = "Welcome back "
welcomeEl.innerText= greeting+ name
welcomeEl.innerText = welcomeEl.innerText + "👋"*/