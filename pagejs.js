$(function(){
    $('.big_pha_img_set').slick({
        slide: 'img', // 슬라이드 되어야 할 태그
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,		// 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
        draggable : true,
        dotclass :"slick-dots",
        dots: true,
    })
})


function modalon(){
    var modal = document.querySelector(".modal_center");
    modal.style.display = "block";

    var background = document.querySelector('.black');

    if(modal.style.display == 'block'){
        console.log('!');
        document.body.style.overflow = 'hidden';
        
        background.addEventListener('click',function(){
            modal.style.display = 'none';
        })
    }

}
// function modaloff(){
//     const modal = document.querySelector(".modal_center")
//     modal.style.display = "none"
// }

setTimeout(function(){
    const loadding = document.querySelector(".loading")
    loadding.style.display = "none"
}, 3000);