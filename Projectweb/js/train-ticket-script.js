$("html").niceScroll({
    cursorcolor: "#f8b600",
    cursorwidth: "8px",
    cursorborder: "none",
    railpadding: { top: 0, right: 3, left: 0, bottom: 0 },
});

$(".ticket-area .btn-group button:nth-of-type(1)").click(function(){
    $(".ticket-area .btn-group button").css("background-color","transparent").css("color","#000")
    $(this).css("background-color","#cf9b0d").css("color","#fff");
    $(".second-degree,.third-degree").hide();
    $(".vip").show();

})
$(".ticket-area .btn-group button:nth-of-type(2)").click(function(){
    $(".ticket-area .btn-group button").css("background-color","transparent").css("color","#000")
    $(this).css("background-color","#cf9b0d").css("color","#fff");
    $(".vip,.third-degree").hide();
    $(".second-degree").show();
})
$(".ticket-area .btn-group button:nth-of-type(3)").click(function(){
    $(".ticket-area .btn-group button").css("background-color","transparent").css("color","#000")
    $(this).css("background-color","#cf9b0d").css("color","#fff");
    $(".second-degree,.vip").hide();
    $(".third-degree").show();
})
/*
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgInModal");

var img1 = document.getElementById("vipImg");
var img2 = document.getElementById("secondImg");
var img3 = document.getElementById("thirdImg");
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var close = document.getElementById("btnClose");
close.onclick = function(){
    modal.style.display = "none";
}*/



var modal = document.getElementById("page11");

var price1 = document.getElementById("P1");
var price2 = document.getElementById("P2");
var price3 = document.getElementById("P3");
price1.onclick = function(){
    modal.style.display = "block";
   
}
price2.onclick = function(){
    modal.style.display = "block";
  
}
price3.onclick = function(){
    modal.style.display = "block";
  
}

var close = document.getElementById("btnpage");
close.onclick = function(){
    modal.style.display = "none";
}








