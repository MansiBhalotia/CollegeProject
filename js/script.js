$(function(){

	$("#navbartoggle").blur(function(event){
		var screenwidth=window.innerWidth;
		if(screenwidth<576){
			$("#collapsibleNavbar").collapse('hide');
		}
	});

});