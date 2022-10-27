$(function () {
  $(".big_pha_img_set").slick({
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    slide: "img", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
    nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부
  });
});

function modalon() {
  var modal = document.querySelector(".modal_center");
  const modalemail = document.querySelector(".modal_email");
  const modalemail_bt = document.querySelector(".keep_join");
  modal.style.display = "block";
  modalemail.style.display = "none";
  var background = document.querySelector(".black");

  if (modal.style.display == "block") {
    document.body.style.overflow = "hidden";

    background.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = "visible";
    });
    if (modal.style.display == "block") {
      modalemail_bt.addEventListener("click", function () {
        modal.style.display = "hidden";
        modalemail.style.display = "block";
      });
    }
    if (modalemail.style.display == "block") {
      document.body.style.overflow = "hidden";

      background.addEventListener("click", function () {
        modalemail.style.display = "none";
        document.body.style.overflow = "visible";
      });
    }
  }
}

function modaloff() {
  var modal = document.querySelector(".modal_center");
  const modalemail = document.querySelector(".modal_email_js");
  const modaloff = document.querySelector(".modaloff_icon");
  modaloff.addEventListener("click", function () {
    modal.style.display = "block";
    modalemail.style.display = "none";
  });
}

function modalclose() {
  var modal = document.querySelector(".modal_center");
  const modalemail = document.querySelector(".modal_email_js");
  const modalclose = document.querySelector(".close_icon");
  modalclose.addEventListener("click", function () {
    modal.style.display = "none";
    modalemail.style.display = "none";
    document.body.style.overflow = "visible";
  });
}

// setTimeout(function(){
//     const loadding = document.querySelector(".loading")
//     loadding.style.display = "none"
// }, 3000);

function checkall() {
  const checkbox_all = document.querySelector(".checkbox_all");
  const checkall = document.querySelector("#all_check");
  const check_select1 = document.querySelector(".check_select1");
  const check_select2 = document.querySelector(".check_select2");
  const check_select3 = document.querySelector(".check_select3");
  checkbox_all.checked = true;
  // checkall.addEventListener("click", function(){
  check_select1.checked = true;
  check_select2.checked = true;
  check_select3.checked = true;

  if ((checkbox_all.checked = true)) {
    checkbox_all.addEventListener("click", function () {
      checkbox_all.checked = false;
      check_select1.checked = false;
      check_select2.checked = false;
      check_select3.checked = false;
    });
  }
}
