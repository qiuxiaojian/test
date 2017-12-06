window.onload = function () {
    // var oNav = document.getElementsByClassName("wjs-nav")
    window.onscroll = function () {
        var oNav = document.getElementsByClassName("wjs-nav")[0]
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop)
        if (scrollTop >= 120) {
            oNav.style.position="fixed";
            oNav.style.top = '0';
            oNav.style.zIndex = '9999';
            oNav.style.background = 'white';
            oNav.style.margin = '0 auto';

        }else if(scrollTop < 120){
            oNav.style.position="static";  
        }
    }
}