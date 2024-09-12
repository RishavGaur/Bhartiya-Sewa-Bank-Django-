console.log("ok");
function searchBox() {
    let search = document.querySelector(".search");
    search.addEventListener("focus", (e) => {
        if (search.style.outline == "none") {
            search.style.outline = "1px solid orange";
        } else {
            search.style.outline = "0px";
        }
    })
}

function buttonDrop() {
    let theme = document.querySelector(".theme");
    let themeDrop = document.querySelector(".theme-opt");
    let display = "hide";
    theme.addEventListener("click", (e) => {
        if (display == "hide") {
            display = "show";
            themeDrop.style.display = "block";
            languageDrop.style.display = "none";
        }
        else {
            display = "hide";
            themeDrop.style.display = "none";
        }
    })

    let language = document.querySelector(".language");
    let languageDrop = document.querySelector(".language-opt");
    language.addEventListener("click", (e) => {
        if (display == "hide") {
            display = "show";
            languageDrop.style.display = "block";
            themeDrop.style.display = "none";
        } else {
            display = "hide";
            languageDrop.style.display = "none";
        }
    })

    let first = document.querySelector("#first-nav");
    let second = document.querySelector("#second-nav");
    let hidden = document.querySelector("#hidden-nav");
    [first, second, hidden].map(element => element.addEventListener("mouseenter", (e) => {
        themeDrop.style.display = "none";
        languageDrop.style.display = "none";
    }))

   

    let menuBar = document.querySelector("#list");
    let menuCont = document.querySelector("#list-drop");
    let list = document.querySelector(".bi-list");
    let cross = document.querySelector(".bi-x-lg");
    menuBar.addEventListener("click", (e) => {
        if (display == "hide") {
            display = "show";
            list.style.display = "none";
            cross.style.display = "block";
            menuCont.style.display = "block";
        }
        else {
            display = "hide";
            list.style.display = "block";
            cross.style.display = "none";
            menuCont.style.display = "none";
        }
    })
}
function theme() {
    let light = document.querySelector(".light-mode");
    let dark = document.querySelector(".dark-mode");
    let body = document.querySelector("body");
    let changed = "no";
    dark.addEventListener("click", (e) => {
        if (changed == "no") {
            changed = "yes";
            body.style.cssText = `
                background-color:black;
                color:white;
            `;

        }
    })
    light.addEventListener("click", (e) => {
        if (changed == "yes") {
            changed = "no";
            body.style.cssText = `
                background-color:white;
                color:black;
            `;
        }
    })
}
function loginBtn() {
    $("#log-in").click(function () {
        $("#login-drop").slideToggle(500);
    })
}
function navBar() {
    
    let firstNav = document.querySelector("#first-nav");
    let account = document.querySelector(".accounts");
    let accountDrop = document.querySelector(".drop-ac");
    let dropIco = document.querySelector(".ac-fix");
    account.addEventListener("mouseenter", (e) => {
        serviceDrop.style.display = "none";
        sdropIco.style.display = "none";
        accountDrop.style.display = "flex";
        dropIco.style.display = "block";
    })
    accountDrop.addEventListener("mouseleave", (e) => {
        accountDrop.style.display = "none";
        dropIco.style.display = "none";
    })
    account.addEventListener("click", (e) => {
        accountDrop.style.display = "none";
        dropIco.style.display = "none";
    })

    let service = document.querySelector(".services");
    let serviceDrop = document.querySelector(".drop-down-serv");
    let sdropIco = document.querySelector(".serv-fix");
    service.addEventListener("mouseenter", (e) => {
        accountDrop.style.display = "none";
        dropIco.style.display = "none";
        serviceDrop.style.display = "flex";
        sdropIco.style.display = "block";
    })
    serviceDrop.addEventListener("mouseleave", (e) => {
        serviceDrop.style.display = "none";
        sdropIco.style.display = "none";
    })

    firstNav.addEventListener("mouseenter", (e) => {
        accountDrop.style.display = "none";
        dropIco.style.display = "none";
        serviceDrop.style.display = "none";
        sdropIco.style.display = "none";
    })

    // Hide Dropdown

    let first = document.querySelector("#first-nav");
    let home = document.querySelector(".home");
    let services = document.querySelector(".services");
    let about = document.querySelector(".about");
    [first, home, services, about].map(element => element.addEventListener("mouseenter", (e) => {
        serviceDrop.style.display = "none";
        sdropIco.style.display = "none";
        accountDrop.style.display = "none";
        dropIco.style.display = "none";
    }));
}
searchBox();
buttonDrop();
theme();
loginBtn();
navBar();