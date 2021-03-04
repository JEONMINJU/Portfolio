/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)


/****************** 이벤트등록 *****************/

/* 서브 네비 */
$(".navi-wrap span").click(onNaviUp);
$(".circle-wrapper > .sub-navi").click(onSubClick);
/* 서브 네비 active color chg */
$(".navi-wrap span").click(onNaviAct);

/* 모달 */
$(".header-wrapper .about-wrap").click(onModalShow);
$(".modal-wrapper .close-btn").click(onModalHide);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);

$(".charger-wrapper .thunder img").mouseover(onHoverBoxShow);
$(".charger-wrapper .thunder img").mouseleave(onHoverBoxHide);


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
}

function onModalHide() {
	$(".modal-container").removeClass('active');
}

function onModalWrapperClick(e) {
	e.stopPropagation();
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

function onHoverBoxShow() {
	$(".charger-wrapper .thunder .hover-box").css("display","block").animate("stop");
}
function onHoverBoxHide() {
	$(".charger-wrapper .thunder .hover-box").css("display","none");
}

/****************** 사용자함수 *******************/

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  


new WOW().init();