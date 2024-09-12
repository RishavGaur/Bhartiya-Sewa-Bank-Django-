function profile() {
    let profile = document.querySelector(".profile");
    let profile_drop = document.querySelector(".prof-sec");
    let cont = 0;
    profile.addEventListener("click", (e) => {
        if (cont == 0) {
            cont = 1;
            profile_drop.style.display = "block";
        } else {
            cont = 0;
            profile_drop.style.display = "none";
        }
    })
    profile_drop.addEventListener("mouseleave", (e) => {
        profile_drop.style.display = "none";
    })
}

function menuBar(){
    let bar=document.querySelector(".hidden");
    let menu=document.querySelector(".menu");
    let cancel=document.querySelector(".cancel");
    let menuDrop=document.querySelector(".menu-drop");
    let time=document.querySelector(".time");
    let click=0;
    bar.addEventListener("click",(e)=>{
        if(click==0){
            click=1;
            menu.style.display="none";
            time.style.display="none";
            cancel.style.display="block";
            menuDrop.style.display="block";
        }else{
            click=0;
            menu.style.display="block";
            time.style.display="inline-block";
            cancel.style.display="none";
            menuDrop.style.display="none";
        }
    })
}
profile();
menuBar();
function time(){
    const xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.querySelector(".clock").innerHTML=this.responseText;
        }
    };
    xhttp.open("GET","javascript/time.php");
    xhttp.send();
}
// setInterval(time,1000);