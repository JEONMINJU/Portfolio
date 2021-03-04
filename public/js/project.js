/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)
var swiper = null;


function opt(name) {
	return {
		slidesPerView: 1,
		loop: false,
		pagination: {
			el: '.cont-'+name+' .swiper-pagination',
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
$(".swiper-slide .mobile-container .mobile-btn").click(onMoDescShow);
$(".swiper-slide .slide-bg").click(onMoDescHide);

$(".circle-wrapper .title").click(onProject);
$(".circle-wrapper .title").eq(1).trigger('click');
/****************** 이벤트콜백 *******************/


function onProject() {
	var name = $(this).data('project');
	$('.cont-wrapper').css("display", "none");
	$('.cont-wrapper[title='+name+']').css("display", "block");
	$('.cont-'+name+' .swiper-wrapper').css('transform', 'translate3d(0, 0, 0)')
	swiper = new Swiper('.cont-'+name+' .swiper-container', opt(name));
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



function onMoDescShow() {
	$(".swiper-slide .mobile-container").toggleClass('active');
}

function onMoDescHide() {
	$(".swiper-slide .mobile-container").removeClass('active');
}


/****************** 사용자함수 *******************/


