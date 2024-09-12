basicStyles();
addressStyles();
contactStyles();
identityStyles();
passwordStyles();


                                                        // Basic Style
function basicStyles(){
    // Name input
let fname = document.querySelector(".take-fname");
let fnameLabel = document.querySelector(".take-fname-label");
fname.addEventListener("focus", (e) => {
    fnameLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
});
fname.addEventListener("blur", (e) => {
    if (fname.value == "") {
        fnameLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
    } else {
        fnameLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    }
})

let lname = document.querySelector(".take-lname");
let lnameLabel = document.querySelector(".take-lname-label");
lname.addEventListener("focus", (e) => {
    lnameLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
});
lname.addEventListener("blur", (e) => {
    if (lname.value == "") {
        lnameLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
    } else {
        lnameLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    }
})

// Date Input
let date = document.querySelector(".take-date");
let dateLabel = document.querySelector(".take-date-label");
date.addEventListener("focus", (e) => {
    dateLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
});
date.addEventListener("blur", (e) => {
    if (date.value == "") {
        dateLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
    } else {
        dateLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    }

})

// Year Input
let year = document.querySelector(".take-year");
let yearLabel = document.querySelector(".take-year-label");
year.addEventListener("focus", (e) => {
    yearLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
});
year.addEventListener("blur", (e) => {
    if (year.value == "") {
        yearLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
    } else {
        yearLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    }
})
}

                                                        // Address Style
function addressStyles() {
    // Address input
    let address = document.querySelector(".take-addr");
    let addressLabel = document.querySelector(".take-addr-label");
    address.addEventListener("focus", (e) => {
        addressLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    address.addEventListener("blur", (e) => {
        if (address.value == "") {
            addressLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            addressLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    // Pin Code Input

    let pincode = document.querySelector(".take-pincode");
    let pincodeLabel = document.querySelector(".take-pincode-label");
    pincode.addEventListener("focus", (e) => {
        pincodeLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    pincode.addEventListener("blur", (e) => {
        if (pincode.value == "") {
            pincodeLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            pincodeLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })
}


                                                        // Contact Style
function contactStyles() {
    // Phone Number input
    let phone = document.querySelector(".take-ph-number");
    let phoneLabel = document.querySelector(".take-ph-number-label");
    phone.addEventListener("focus", (e) => {
        phoneLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    phone.addEventListener("blur", (e) => {
        if (phone.value == "") {
            phoneLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            phoneLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    // E-mail Input

    let mail = document.querySelector(".take-mail");
    let mailLabel = document.querySelector(".take-mail-label");
    mail.addEventListener("focus", (e) => {
        mailLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    mail.addEventListener("blur", (e) => {
        if (mail.value == "") {
            mailLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            mailLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })
}

                                                        // Contact Style
function contactStyles() {
    // Phone Number input
    let phone = document.querySelector(".take-ph-number");
    let phoneLabel = document.querySelector(".take-ph-number-label");
    phone.addEventListener("focus", (e) => {
        phoneLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    phone.addEventListener("blur", (e) => {
        if (phone.value == "") {
            phoneLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            phoneLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    // E-mail Input

    let mail = document.querySelector(".take-mail");
    let mailLabel = document.querySelector(".take-mail-label");
    mail.addEventListener("focus", (e) => {
        mailLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    mail.addEventListener("blur", (e) => {
        if (mail.value == "") {
            mailLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            mailLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })
}

                                                        // Identity Style
function identityStyles() {
    // Aadhaar Number input
    let aadhaar = document.querySelector(".take-aadh-numb");
    let aadhaarLabel = document.querySelector(".take-aadh-numb-label");
    aadhaar.addEventListener("focus", (e) => {
        aadhaarLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    aadhaar.addEventListener("blur", (e) => {
        if (aadhaar.value == "") {
            aadhaarLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            aadhaarLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    // E-mail Input

    let pan = document.querySelector(".take-pan-numb");
    let panLabel = document.querySelector(".take-pan-numb-label");
    pan.addEventListener("focus", (e) => {
        panLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    pan.addEventListener("blur", (e) => {
        if (pan.value == "") {
            panLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            panLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })
}

                                                        // Password Style
function passwordStyles() {
    // Aadhaar Number input
    let createPass = document.querySelector(".take-password");
    let createPassLabel = document.querySelector(".take-password-label");
    createPass.addEventListener("focus", (e) => {
        createPassLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    createPass.addEventListener("blur", (e) => {
        if (createPass.value == "") {
            createPassLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            createPassLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    // E-mail Input

    let confPass = document.querySelector(".take-conf-pass");
    let confPassLabel = document.querySelector(".take-conf-pass-label");
    confPass.addEventListener("focus", (e) => {
        confPassLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    confPass.addEventListener("blur", (e) => {
        if (confPass.value == "") {
            confPassLabel.style.cssText = `
        top:20px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            confPassLabel.style.cssText = `
        top:-3px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:cornflowerblue;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })
}

                                                        // Basic Validation
function basicValid() {
    let fname = document.querySelector(".take-fname");
    let lname = document.querySelector(".take-lname");
    let gender = document.querySelector("#gender");
    let date = document.querySelector(".take-date");
    let month = document.querySelector("#month");
    let year = document.querySelector(".take-year");
    let pass = true;

    if (fname.value == "") {
        pass = false;
        fname.style.borderColor = "red";
    }else if (!isNaN(fname.value)) {
        pass = false;
        alert("Please Enter your Valid First Name.");
        fname.style.borderColor = "red";
    } else {
        fname.style.borderColor = "gray";
    }
    if (lname.value == "") {
        pass = false;
        lname.style.borderColor = "red";
    }else if (!isNaN(lname.value)) {
        pass = false;
        alert("Please Enter your Valid Last Name.");
        lname.style.borderColor = "red";
    } else {
        lname.style.borderColor = "gray";
    }
    if (gender.value == "") {
        pass = false;
        gender.style.borderColor = "red";
    } else {
        gender.style.borderColor = "gray";
    }
    if (date.value == "") {
        pass = false;
        date.style.borderColor = "red";
    }else if (date.value<1 && date.value>31) {
        pass = false;
        alert("Please Enter Valid Date.");
        date.style.borderColor = "red";
    }else if (isNaN(date.value)) {
        pass = false;
        alert("Please Enter Valid Date.");
        date.style.borderColor = "red";
    }
    else if (isNaN(date.value.length!=2)) {
        pass = false;
        alert("Please Enter Valid Date.");
        date.style.borderColor = "red";
    }else {
        date.style.borderColor = "gray";
    }
    if (month.value == "") {
        pass = false;
        month.style.borderColor = "red";
    } else {
        month.style.borderColor = "gray";
    }
    if (year.value == "") {
        pass = false;
        year.style.borderColor = "red";
    }else if (isNaN(year.value)) {
        pass = false;
        alert("Please Enter Valid Year.");
        year.style.borderColor = "red";
    }
    else if (isNaN(year.value.length!=4)) {
        pass = false;
        alert("Please Enter Valid Year.");
        year.style.borderColor = "red";
    } else {
        year.style.borderColor = "gray";
    }

    let basic = document.querySelector("#basic-info");
    let newAddr = document.querySelector("#address-info");
    if (pass == true) {
        basic.classList.add("remove-basic");
        setTimeout(() => {
            basic.style.display = "none";
            // newAddr.style.display = "flex";
            newAddr.style.cssText=`
                display:flex;
                transform:translateX(0px);
                animation:goToAddr .3s ease-in;
            `;
        }, 600);

    }
    return pass;
}

                                                        // Address Validation
function addressValid() {
    let address = document.querySelector(".take-addr");
    let pincode = document.querySelector(".take-pincode");
    let pass = true;

    if (address.value == "") {
        pass = false;
        address.style.borderColor = "red";
    } else {
        address.style.borderColor = "gray";
    }
    if (pincode.value == "") {
        pass = false;
        pincode.style.borderColor = "red";
    }else if (pincode.value.length != 6) {
        pass = false;
        pincode.style.borderColor = "red";
        alert("Pincode must be of 6 Digits.");
    }else if (isNaN(pincode.value)) {
        pass = false;
        pincode.style.borderColor = "red";
        alert("Please Enter a valid Pincode.");
    } else {
        pincode.style.borderColor = "gray";
    }

    // let basic = document.querySelector("#basic-info");
    let newAddr = document.querySelector("#address-info");
    let contact = document.querySelector("#contact-info");
    if (pass == true) {
        newAddr.classList.add("backward-address");
        setTimeout(() => {
            newAddr.style.display = "none";
            // contact.style.display="flex";
            contact.style.cssText=`
                display:flex;
                transform:translateX(0px);
                animation:goToContact .3s ease-in;
            `;
        }, 600);

    }
    return pass;
}

                                                        // Contact Validation
function contactValid() {
    let phone = document.querySelector(".take-ph-number");
    let mail = document.querySelector(".take-mail");
    let pass = true;

    if (phone.value == "") {
        pass = false;
        phone.style.borderColor = "red";
    } else {
        phone.style.borderColor = "gray";
    }
    if (mail.value == "") {
        pass = false;
        mail.style.borderColor = "red";
    } else {
        mail.style.borderColor = "gray";
    }

    // let basic = document.querySelector("#basic-info");
    let contact = document.querySelector("#contact-info");
    let identity = document.querySelector("#identity-info");
    if (pass == true) {
        contact.classList.add("backward-address");
        setTimeout(() => {
            contact.style.display = "none";
            // identity.style.display="flex";
            identity.style.cssText=`
                display:flex;
                transform:translateX(0px);
                animation:goToIdentity .3s ease-in;
            `;
        }, 500);

    }
    return pass;
}

                                                        // Identity Validation
function identityValid() {
    let aadhaar = document.querySelector(".take-aadh-numb");
    let pan = document.querySelector(".take-pan-numb");
    let pass = true;

    if (aadhaar.value == "") {
        pass = false;
        aadhaar.style.borderColor = "red";
    }else if (isNaN(aadhaar.value)) {
        pass = false;
        alert("Please Enter your Valid Aadhaar Number.");
        aadhaar.style.borderColor = "red";
    }else if (aadhaar.value.length!=12) {
        pass = false;
        alert("Aadhaar Number must be of 12 digits.");
        aadhaar.style.borderColor = "red";
    } else {
        aadhaar.style.borderColor = "gray";
    }
    if (pan.value == "") {
        pass = false;
        pan.style.borderColor = "red";
    }else if (pan.value.length!=10) {
        pass = false;
        alert("PAN Number must be contain 10 Characters");
        pan.style.borderColor = "red";
    } else {
        pan.style.borderColor = "gray";
    }

    let identity = document.querySelector("#identity-info");
    let password = document.querySelector("#password-info");
    if (pass == true) {
        identity.classList.add("backward-identity");
        setTimeout(() => {
            identity.style.display = "none";
            // password.style.display="flex";
            password.style.cssText=`
                display:flex;
                transform:translateX(0px);
                animation:goToPassword .3s ease-in;
            `;
        }, 500);

    }
    return pass;
}

                                                        // Password Validation
function passwordValid() {
    let createPass = document.querySelector(".take-password");
    let confPass = document.querySelector(".take-conf-pass");
    let pass = true;

    if (createPass.value == "") {
        pass = false;
        createPass.style.borderColor = "red";
    } else {
        createPass.style.borderColor = "gray";
    }
    if (confPass.value == "") {
        pass = false;
        confPass.style.borderColor = "red";
    } else {
        confPass.style.borderColor = "gray";
    }

    if(createPass.value!=confPass.value){
        pass=false;
        alert("Password Not Matched...");
        confPass.style.borderColor = "red";
    }else {
        confPass.style.borderColor = "gray";
    }
    return pass;
}

// Navigation Bar

function backToName() {
    let basic = document.querySelector("#basic-info");
    let newAddr = document.querySelector("#address-info");
    newAddr.classList.add("forward-address");
    setTimeout(() => {
        newAddr.style.display = "none";
        // basic.style.display = "flex";
        // basic.classList.add("add-basic");
        basic.style.cssText=`
            display:flex;
            transform:translateX(0px);
            animation:backToBasic .3s ease-in;
        `;
    }, 600);
}

function backToAddress() {
    let newAddr = document.querySelector("#address-info");
    let contact = document.querySelector("#contact-info");
    contact.classList.add("forward-contact");
    setTimeout(() => {
        contact.style.display = "none";
        // newAddr.style.display = "flex";
        // newAddr.classList.remove("remove");
        newAddr.style.cssText=`
            display:flex;
            transform:translateX(0px);
            animation:backToAddr .3s ease-in;
        `;
    }, 500);
}

function backToContact() {
    let identity = document.querySelector("#identity-info");
    let contact = document.querySelector("#contact-info");
    identity.classList.add("forward-identity");
    setTimeout(() => {
        identity.style.display = "none";
        // contact.style.display = "flex";
        // contact.classList.remove("remove");
        contact.style.cssText=`
            display:flex;
            transform:translateX(0px);
            animation:backToContact .3s ease-in;
        `;
    }, 500);
}
// function goToContact() {
//     let address = document.querySelector("#address-info");
//     address.classList.add("backward-address");
// }
