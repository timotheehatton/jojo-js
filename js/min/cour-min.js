$(document).ready(function(){$("#menuCour > ul > li > p").click(function(){$("#menuCour").addClass("col-md-2 col-sm-2 col-xs-2")}),$(".sousMenu").hide(),$(".titreMenuCour").on("click",function(){$(this).not($(this)).hasClass("activeS")?$(".activeS").removeClass("activeS").slideToggle():($(".activeS").removeClass("activeS").slideToggle(),$(this).next(".sousMenu").addClass("activeS").slideToggle())}),$(".ContenuCour").hide(),$(".titreSousMenu").on("click",function(){$(this).not($(this)).hasClass("activeC")?$(".activeC").removeClass("activeC").slideToggle():($(".activeC").removeClass("activeC").slideToggle(),$(this).next(".ContenuCour").addClass("activeC").slideToggle())})});