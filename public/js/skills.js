/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)
var skillsIdx = 0;


/****************** 이벤트등록 *****************/

window.onload = function() {
	$(".circle-wrapper").addClass('active');
}

$(".circle-wrapper > .sub-navi").click(onSubClick);

$(".circle-wrapper .front").click(onFrontSkillsShow);
$(".circle-wrapper .back").click(onBackSkillsShow);
$(".circle-wrapper .design").click(onDesignSkillsShow);


/****************** 이벤트콜백 *******************/
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



function onFrontSkillsShow() {
	idx = $(this).index();
	if(idx = 1 && 4) {
		$(".skills-wrapper .skills-wrap1").stop().fadeIn(300);
		$(".skills-wrapper .skills-wrap2").stop().hide();
	}
	else {
		$(".skills-wrapper .skills-wrap1").addClass('active');
	}
}

function onBackSkillsShow() {
	idx = $(this).index();
	if(idx = 2 && 5) {
		$(".skills-wrapper .skills-wrap2").stop().fadeIn(300);
		$(".skills-wrapper .skills-wrap1").stop().hide();
		$(".skills-wrapper .skills-wrap0").stop().hide();
	}
	else {
		$(".skills-wrapper .skills-wrap2").addClass('active');
	}
}

function onDesignSkillsShow() {
	idx = $(this).index();
	if(idx = 0 && 3) {
		$(".skills-wrapper .skills-wrap0").stop().fadeIn(300);
		$(".skills-wrapper .skills-wrap1").stop().hide();
		$(".skills-wrapper .skills-wrap2").stop().hide();
	}
	else {
		$(".skills-wrapper .skills-wrap0").addClass('active');
	}
}






/****************** 사용자함수 *******************/

new WOW().init();
