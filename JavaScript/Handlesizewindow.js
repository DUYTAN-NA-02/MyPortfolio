const selector = document.querySelector(".selector");
const button_icon = document.querySelector(".icon-selector");

const adjustSelector = () => {
    if (window.innerWidth <= 1040) {
        selector.classList.remove("selector-display");
        selector.classList.add("selector-hidden");
    } else {
        selector.classList.remove("selector-hidden");
        selector.classList.add("selector-display");
    }
};

function Handlesizewindow () {
    // init
    adjustSelector();
    // keep track of window size
    window.addEventListener('resize', adjustSelector);

    button_icon.addEventListener("click", () => {
        if(selector.classList.contains("selector-hidden")){
            selector.classList.remove("selector-hidden");
            selector.classList.add("selector-display");
        }else{
            selector.classList.remove("selector-display");
            selector.classList.add("selector-hidden");
        }
    });
}


export default Handlesizewindow;