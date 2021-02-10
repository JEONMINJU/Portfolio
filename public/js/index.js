/****************** 전역설정 *******************/
var idx = 0;

/****************** 이벤트등록 *****************/

$(".navi-wrap span").click(onNaviUp);

$(".header-wrap .about-wrap").click(onModalShow);
$(".modal-wrap .modal-btn").click(onModalHide);

$(".sub-navi-wrapper > .sub-navi").click(onSubClick);



/****************** 이벤트콜백 *******************/
function onNaviUp() {
	idx = $(this).index();
	console.log(idx);
	if(idx > 0) {
		$(".sub-navi-wrapper").addClass('active');
	}
	else {
		$(".sub-navi-wrapper").removeClass('active');
	}
	/*
	$(".line-wrap .sub-navi-wrapper").stop().slideToggle(300);
	$(".mid-text-wrap h2.text").hide();
	*/
}

function onModalShow() {
	$(".modal-container").stop().fadeIn();
}

function onModalHide() {
	$(".modal-container").stop().fadeOut();
}

function onSubClick() {
	var id = $(this).index();
	if(id == 1) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(45deg)');
	}
}

/****************** 사용자함수 *******************/