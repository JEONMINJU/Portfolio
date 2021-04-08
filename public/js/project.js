/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)
var swiper = null; //스와이퍼 함수 전역 선언 해놓고

// opt이 실행되면 name을 값으로 받고 슬라이드를 리턴해준다.
function opt(name) {
	return {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: '.cont-'+name+' .swiper-pagination', //cont-frontend 이런식으로 이름을 구분해준다.
			clickable: true,
		},
		navigation: {
			nextEl: '.cont-'+name+' .bt-next',
			prevEl: '.cont-'+name+' .bt-prev',
		},
	}
}

/****************** 이벤트등록 *****************/

/* 서브 네비 */
window.onload = function() {
	$(".circle-wrapper").addClass('active');
}

$(".circle-wrapper > .sub-navi").click(onSubClick);

/* 모바일 설명 박스*/
$(".swiper-slide .mobile-container .mobile-btn").click(onMoDescShow);
$(".swiper-slide .slide-bg").click(onMoDescHide);

/* 프로젝트 슬라이드 구현 */
$(".circle-wrapper .title").click(onProject);
$(".circle-wrapper .title").eq(1).trigger('click'); //로드되었을때 1번인덱스를 트리거로 클릭해놓기

/****************** 이벤트콜백 *******************/

function onProject() {
	var name = $(this).data('project');
	$('.cont-wrapper').css("display", "none");
	$('.cont-wrapper[title='+name+']').css("display", "block");
	$('.cont-'+name+' .swiper-wrapper').css('transform', 'translate3d(0, 0, 0)'); // 트랜스폼을 기본0값으로 돌리고
	swiper = new Swiper('.cont-'+name+' .swiper-container', opt(name)); //즉 .cont-'+name+'클릭할때마다 슬라이드를 새로 만들어 넣는다. opt(name)이 슬라이드 함수
}


/* 하단 서브 네비 */
var oldId = 0;
function onSubClick() {
	var id = $(this).index();

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


/* 모달 모바일 설명 박스 */
function onMoDescShow() {
	$(".swiper-slide .mobile-container").toggleClass('active');
}
function onMoDescHide() {
	$(".swiper-slide .mobile-container").removeClass('active');
}


/****************** 사용자함수 *******************/


