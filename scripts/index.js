let cxMenu = document.querySelector('#burger');
let cxNav = document.querySelector('#nav');

cxMenu.addEventListener('click', function(){
    if(cxNav.style.display == "none"){
        cxNav.style.display = "block";
    }else{
        cxNav.style.display = "none";
    }
})
