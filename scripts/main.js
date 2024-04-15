const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset()
    }
};

var tablinks = document.getElementsByClassName("tab-links"); 
        var tabconts = document.getElementsByClassName("tab-conts");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabcont of tabconts){
                tabcont.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        } 
