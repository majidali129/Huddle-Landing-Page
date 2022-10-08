let subBtn = document.querySelector(".subscribe-btn");

subBtn.addEventListener("click",()=>{
    let mail = document.getElementById("mail-address").value;
    if(mail=="" || mail==" "){
        document.querySelector(".error-message").innerHTML = "Field can't be empty.";
    }else{
        document.getElementById("mail-address").value = "";
        document.querySelector(".error-message").innerHTML = "";
    }
})