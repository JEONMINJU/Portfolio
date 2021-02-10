/****************** 전역설정 *******************/


/****************** 이벤트등록 *****************/

$(".header-wrap .skills").click(onNaviUp);

$(".header-wrap .about-wrap").click(onModalShow);
$(".modal-wrap .modal-btn").click(onModalHide);


/****************** 이벤트콜백 *******************/
function onNaviUp() {
	$(".line-wrap .sub-navi-wrapper").stop().slideToggle(300);
	$(".mid-text-wrap h2.text").hide();
}

function onModalShow() {
	$(".modal-container").stop().fadeIn();
}

function onModalHide() {
	$(".modal-container").stop().fadeOut();
}

/****************** 사용자함수 *******************/