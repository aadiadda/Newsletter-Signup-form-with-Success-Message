
function emailCheck() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailText = document.querySelector("#email-id").value;
    
    if(emailText.match(mailFormat)) {
        document.getElementById("email-id").classList.remove("email-error");
        document.querySelector(".container").style.display = "none";
        document.querySelector(".submittedContainer").style.display = "flex";

    } else if(!(emailText.match(mailFormat))) {
        document.getElementById("email-id").classList.add("email-error");
        
    
}

}

function dismissFunc() {
    document.querySelector(".submittedContainer").style.display = "none";
    document.querySelector(".container").style.display = "flex";
}