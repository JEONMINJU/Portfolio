/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)

var typingBool = false; 
var typingIdx = 0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

/****************** 이벤트등록 *****************/

/* 서브 네비 */
$(".navi-wrap span").click(onNaviUp);
$(".sub-navi-wrapper > .sub-navi").click(onSubClick);

/* 모달 */
$(".header-wrap .about-wrap").click(onModalShow);
$(".modal-wrap .modal-btn").click(onModalHide);


/****************** 이벤트콜백 *******************/
function onNaviUp() {
	idx = $(this).index();
	console.log(idx);
	if(idx > 0) {
		$(".sub-navi-wrapper").addClass('active');
		$(".mid-container").hide();
	}
	else {
		$(".sub-navi-wrapper").removeClass('active');
		$(".mid-container").show();
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
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
	}
	else if (id == 2) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(120deg)');
	}
	else if (id == 3) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(180deg)');
	}
	else if (id == 4) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(240deg)');
	}
	else if (id == 5) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(300deg)');
	}
	else if (id == 6) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(0deg)');
	}
}






/****************** 사용자함수 *******************/