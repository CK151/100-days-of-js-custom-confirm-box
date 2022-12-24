const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeIcon = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnOK = document.querySelector(".btn-ok");
const btnCancel = document.querySelector(".btn-cancel");



/*btn1.addEventListener("click", () => {
    changeBg("red")
})

btn2.addEventListener("click", () => {
    changeBg("purple")
})

function changeBg (color) {
    let x = confirm("Change background" + color);

    if (x) {
        document.body.style.backgroundColor = color;
    }
}*/

//custom confirm box 

class ShowConfirm {
    constructor(title, content, ok, cancle) {
        this.title = title;
        this.content = content;
        this.ok = ok;
        this.cancle = cancle;
    }

    trigger(callbackFn) {
        title.textContent = this.title;
        content.textContent = this.content;
        btnOK.innerText = this.ok;
        btnCancel.innerText = this.cancle;

        confirmEl.classList.remove("close-modal");

        closeIcon.addEventListener("click", this.closeModal);
        btnCancel.addEventListener("click", this.closeModal);

        btnOK.addEventListener("click", () => {
            callbackFn();
            this.closeModal();
        })

        
    }


    closeModal() {
        confirmEl.classList.add("close-modal");
    }
}


//btn event listener

btn1.addEventListener("click", () => {
    changeBg("red")
});

btn2.addEventListener("click", () => {
    changeBg("purple")
});

const changeBag  = new ShowConfirm(
    "Change Background color", "You are about to change the background color!!", "Change", "Don't change"
)

function changeBg(color) {
    changeBag.trigger(setBg);
    function setBg() {
        document.body.style.backgroundColor = color
    }
}