function userFeed(){
    let userInput=document.querySelector(".user-taken").value;
    let show=document.querySelector(".user-message-display");
    let text=userInput;
    show.style.display="block";
    show.innerHTML=text;
    document.querySelector(".user-taken").value="";
}