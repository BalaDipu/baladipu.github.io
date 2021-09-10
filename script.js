$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});

var typing = new Typed(".typing",{
    strings: ["Software Engineering Undergrad Student","Software Engineering Trainee", "Website Developer", "Sportsman"],
    typeSpeed:60,
    backSpeed:50,
    loop:true
});
var typing = new Typed(".typing-2",{
    strings: ["DIPANKAR","DIPU"],
    typeSpeed:100,
    backSpeed:80,
    loop:true,
});