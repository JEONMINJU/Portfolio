/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)

var path = document.querySelector('.path');
var length = path.getTotalLength();

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
		$(".charger-wrapper").hide();
	}
	else {
		$(".circle-wrapper").removeClass('active');
		$(".main-wrapper").show();
		$(".charger-wrapper").show();
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


function onNaviAct() {
	idx = $(this).index();
	$(".navi-wrap span").removeClass('active');
	$(".navi-wrap span").eq(idx).addClass('active');
}

 function onFirstLineShow() {
 $('.main-wrapper .first-line').addClass('active');
}


/****************** 사용자함수 *******************/