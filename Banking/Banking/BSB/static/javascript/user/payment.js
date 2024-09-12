labelStyling()
function labelStyling(){
    let acName = document.querySelector(".ac-name-input");
    let acNameLabel = document.querySelector(".ac-name-label");
    acName.addEventListener("focus", (e) => {
        acNameLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    acName.addEventListener("blur", (e) => {
        if (acName.value == "") {
            acNameLabel.style.cssText = `
        top:6px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            acNameLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    let acNum = document.querySelector(".ac-num-input");
    let acNumLabel = document.querySelector(".ac-num-label");
    acNum.addEventListener("focus", (e) => {
        acNumLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    acNum.addEventListener("blur", (e) => {
        if (acNum.value == "") {
            acNumLabel.style.cssText = `
        top:6px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            acNumLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    let acReNum = document.querySelector(".ac-re-num-input");
    let acReNumLabel = document.querySelector(".ac-re-num-label");
    acReNum.addEventListener("focus", (e) => {
        acReNumLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    acReNum.addEventListener("blur", (e) => {
        if (acReNum.value == "") {
            acReNumLabel.style.cssText = `
        top:6px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            acReNumLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    let ifsc = document.querySelector(".ifsc-input");
    let ifscLabel = document.querySelector(".ifsc-label");
    ifsc.addEventListener("focus", (e) => {
        ifscLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    ifsc.addEventListener("blur", (e) => {
        if (ifsc.value == "") {
            ifscLabel.style.cssText = `
        top:6px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            ifscLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    let acTransac = document.querySelector(".ac-tran-input");
    let acTransacLabel = document.querySelector(".ac-tran-label");
    acTransac.addEventListener("focus", (e) => {
        acTransacLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    acTransac.addEventListener("blur", (e) => {
        if (acTransac.value == "") {
            acTransacLabel.style.cssText = `
        top:6px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            acTransacLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })

    let tranPass = document.querySelector(".tran-pass-input");
    let tranPassLabel = document.querySelector(".tran-pass-label");
    tranPass.addEventListener("focus", (e) => {
        tranPassLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
    });
    tranPass.addEventListener("blur", (e) => {
        if (tranPass.value == "") {
            tranPassLabel.style.cssText = `
        top:6px;
        transition:.5s;
        font-size: 1.2rem;
        color:black;
    `;
        } else {
            tranPassLabel.style.cssText = `
        top:-12px;
        transition:.5s;
        font-size: 1rem;
        font-weight:450;
        color:darkgoldenrod;
        padding:0px 3px;
        background-color: #ffffff;
    `;
        }
    })
}