$(document).ready(function(){
  $("#home").show();
  $("#web").hide();
  $("#photo").hide();
  $("#graphic").hide();

  //loquen nav link
  $("#nav-jumbo").click(function(){
    //first hide all unused sections
    $("#web").hide();
    $("#photo").hide();
    $("#graphic").hide();
    //then display jumbo div
    $("#home").show();
  });

  //web nav link
  $("#nav-web").click(function(){
    //first hide all unused sections
    $("#home").hide();
    $("#photo").hide();
    $("#graphic").hide();
    //then display web div
    $("#web").show();
  });


  //explore button
  $("#explore").click(function(){
    //first hide all unused sections
    $("#home").hide();
    $("#photo").hide();
    $("#graphic").hide();
    //then display web div
    $("#web").show();
  });

  //photo nav link
  $("#nav-photo").click(function(){
    //first hide all unused sections
    $("#home").hide();
    $("#web").hide();
    $("#graphic").hide();
    //then display photo div
    $("#photo").show();
  });

  //graphic nav link
  $("#nav-graphic").click(function(){
    //first hide all unused sections
    $("#home").hide();
    $("#photo").hide();
    $("#web").hide();
    //then display graphic div
    $("#graphic").show();
  });

});
