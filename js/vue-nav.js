var app = new Vue({
    el: '#home',
    data:{
        name: 'User naW',
        date: new Date() + '에 접속함.',
        logIn: true
    }
})

function openSide(){
    if($(window).width < 768){
            document.getElementById("sideNav").style.width = "50%";

    }
    else{document.getElementById("sideNav").style.width = "15%";}
}

function closeSide(){
    document.getElementById("sideNav").style.width = "0";
}