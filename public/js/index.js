/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)

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
		$(".mid-text-wrap h2.text").hide();
	}
	else {
		$(".sub-navi-wrapper").removeClass('active');
		$(".mid-text-wrap h2.text").show();
	}
	

}

function onModalShow() {
	//$(".modal-container").stop().fadeIn();
	$(".modal-container").addClass('active');
}

function onModalHide() {
	$(".modal-container").stop().fadeOut();
}

function onSubClick() {
	var id = $(this).index();

/* 	if(id == 1) {
		$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
	} */

		if (id == 1) {
			$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
		}else if(id == 2){
			$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
		}else if(id == 3){
			$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
		}else if(id == 4){
			$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
		}else if(id == 5){
			$(".sub-navi-wrapper").css('transform', 'translateY(50%) rotate(60deg)');
		}
		

	
	
}

/****************** 사용자함수 *******************/