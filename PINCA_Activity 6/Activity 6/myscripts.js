document.getElementById('dmbutton').addEventListener('click', function() { 
    const dmb = document.getElementById('dmbutton');

    if (dmb.innerHTML === 'LIGHT MODE') {
        dmb.classList.remove("style");
        dmb.classList.add("style2");
        document.body.classList.toggle("background2");
        dmb.classList.toggle("style2:hover");
        dmb.innerHTML = 'DARK MODE';    
    } else {
        dmb.classList.remove("style2");
        dmb.classList.add("style");
        document.body.classList.toggle("background2");
        dmb.classList.toggle("style2:hover");
        dmb.innerHTML = 'LIGHT MODE';
    }

});