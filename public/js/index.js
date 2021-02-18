/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)

/* var typingBool = false; 
var typingIdx = 0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length; */

/****************** 이벤트등록 *****************/

/* 서브 네비 */
$(".navi-wrap span").click(onNaviUp);
$(".circle-wrapper > .sub-navi").click(onSubClick);
/* 서브 네비 active color chg */
$(".navi-wrap span").click(onNaviAct);

/* 모달 */
$(".header-wrapper .about-wrap").click(onModalShow);
$(".modal-wrap .modal-btn").click(onModalHide);


/****************** 이벤트콜백 *******************/
function onNaviUp() {
	idx = $(this).index();
	//console.log(idx);
	if(idx > 0) {
		$(".circle-wrapper").addClass('active');
		$(".main-wrapper").hide();
	}
	else {
		$(".circle-wrapper").removeClass('active');
		$(".main-wrapper").show();
	}
	

}

function onModalShow() {
	$(".modal-container").addClass('active');
	//$(".modal-container").stop().show();
}

function onModalHide() {
	$(".modal-container").removeClass('active');
	//$(".modal-container").stop().fadeOut();
}


var oldId = 0;
function onSubClick() {
	var id = $(this).index();

	if (id == 1) {
		$(".circle-wrapper").css('transform', 'translateY(50%) rotate(-60deg)');
	}
	else if (id == 2) {
		$(".circle-wrapper").css('transform', 'rotate(-120deg)');
	}
	else if (id == 3) {
		$(".circle-wrapper").css('transform', 'rotate(60deg)');
	}
	else if (id == 4) {
		$(".circle-wrapper").css('transformY', 'rotate(-240deg)');
	}
	else if (id == 5) {
		$(".circle-wrapper").css('transformY', 'rotate(-300deg)');
	}
	else if (id == 6) {
		$(".circle-wrapper").css('transformY', 'rotate(-360deg)');
	}
}


function onNaviAct() {
	idx = $(this).index();
	$(".navi-wrap span").removeClass('active');
	$(".navi-wrap span").eq(idx).addClass('active');
}



/****************** 사용자함수 *******************/