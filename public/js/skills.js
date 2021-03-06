/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)

/****************** 이벤트등록 *****************/

window.onload = function() {
	$(".circle-wrapper").addClass('active');
}

$(".circle-wrapper > .sub-navi").click(onSubClick);

$(".circle-wrapper .title").click(onSkill);
$(".circle-wrapper .title").eq(1).trigger('click');


/****************** 이벤트콜백 *******************/
function onSkill() {
	var name = $(this).data('skill');
	$('.skills-wrap').css("display", "none");
	$('.skills-wrap[title='+name+']').css("display", "flex");
}



/* function onNaviUp() {
	idx = $(this).index();

	if(idx > 0) {
		$(".circle-wrapper").addClass('active');
		$(".main-wrapper").hide();
		$(".charger-wrapper").hide();
	}
	else {
		$(".circle-wrapper").removeClass('active');
		$(".main-wrapper").show();
		$(".charger-wrapper").show();
	}
} */

function onNaviUp() {
	$(".circle-wrapper").addClass('active');
}


var oldId = 0;
function onSubClick() {
	var id = $(this).index();
	console.log(id);
	if (id == 0) {
		$(".circle-wrapper").css('transform', 'translateY(-50%) rotate(-120deg)');
	}
	else if (id == 1) {
		$(".circle-wrapper").css('transform', 'translateY(-50%) rotate(-180deg)');
	}
	else if (id == 2) {
		$(".circle-wrapper").css('transform', 'translateY(-50%) rotate(-240deg)');
	}
	else if (id == 3) {
		$(".circle-wrapper").css('transform', 'translateY(-50%) rotate(240deg)');
	}
	else if (id == 4) {
		$(".circle-wrapper").css('transform', 'translateY(-50%) rotate(180deg)');
	}
	else if (id == 5) {
		$(".circle-wrapper").css('transform', 'translateY(-50%) rotate(300deg)');
	}
}





/****************** 사용자함수 *******************/

new WOW().init();
