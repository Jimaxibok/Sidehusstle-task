
let form = document.getElementById("form")
form.addEventListener("submit", addDetails, false)

function addDetails(e){
e.preventDefault();
let nameElement = document.getElementById('name-input')
let email = document.getElementById('email').value
let subject = document.getElementById('subject').value
let phone = document.getElementById('phone')
let message = document.getElementById('message')

let name = nameElement.value.trim()

if(name === "" || email === "" || subject === "" || phone === "" || message === ""){
    alert('please fill out the fields')
    return
}else{
   
    location.href="index.html"
    alert("form submitted successfully" )
   }
  
}

