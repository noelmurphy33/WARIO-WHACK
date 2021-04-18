$( document ).ready(function() {
//function to toggle to how to play div
$("#howtobtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#mainscoreboard").hide("slow");
    $("#contact").hide("slow");
    $("#howtoplay").show("slow");
     $(this).addClass("active");
});
//function to toggle to scoreboard div
$("#scoreboardbtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#contact").hide("slow");
    $("#mainscoreboard").show("slow");
     $(this).addClass("active");
});
//function to toggle to contact
$("#contactbtn").click(function () {
    $("#intro").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#mainscoreboard").hide("slow");
    $("#contact").show("slow");
     $(this).addClass("active");
});
//function to toggle to intro
$("#introbtn").click(function () {
    $("#contact").hide("slow");
    $(".nav-link").removeClass("active");
    $("#howtoplay").hide("slow");
    $("#mainscoreboard").hide("slow");
    $("#intro").show("slow");
     $(this).addClass("active");
});

//gameplay 
const pipes = document.querySelectorAll(".pipe");
const wario = document.querySelectorAll(".wario");
const mario = document.querySelectorAll(".mario");
const startgame = document.querySelector(".startbtn")
const displaytimeleft  = document.querySelector("#time")
const displayscore  = document.querySelector("#score")




});