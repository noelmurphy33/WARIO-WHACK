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