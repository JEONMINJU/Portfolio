/****************** 전역설정 *******************/
var idx = 0; // Home, Skills, Project (0,1,2)


/****************** 이벤트등록 *****************/

/* 헤더 네비 active color chg */
$(".navi-wrap a").click(onNaviAct);

/* 모달 */
$(".header-wrapper .about-wrap").click(onModalShow);
$(".modal-wrapper .close-btn").click(onModalHide);
$(".modal-container").click(onModalHide);
$(".modal-wrapper").click(onModalWrapperClick);



/****************** 이벤트콜백 *******************/

/* navi bar ef */
function onNaviAct() {
	idx = $(this).index();
	$(".navi-wrap a").removeClass('active');
	$(".navi-wrap a").eq(idx).addClass('active');
}

/* modal */
function onModalShow() {
	$(".modal-container").addClass('active');
}
function onModalHide() {
	$(".modal-container").removeClass('active');
}
function onModalWrapperClick(e) {
	e.stopPropagation();
}

/****************** modal typing ef *******************/

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