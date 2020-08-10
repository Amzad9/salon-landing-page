
$('.slider').slick({
    arrows: false,
    autoplay: true,
    speed: 800,
    dots:true,
    draggable: true,
    focusOnSelect: true
}).slickAnimation();

$('.client-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    focusOnSelect: true
});
$('.slider').mouseover(function() {
    $(this).slick('play')
});


    // menu
let menu =function(){
    const openNav = document.querySelector('.open-nav');
    const Close = document.querySelector('.close');
    const fixedMenuu = document.querySelector('.fixed-menu');
    openNav.addEventListener('click', () => {
        Close.classList.add('close-zoom');
        fixedMenuu.classList.add('open');
       
       
    });
    Close.addEventListener('click', () => {
        fixedMenuu.classList.remove('open');
        Close.classList.remove('close-zoom');
    });
    
}
menu();

//dropdown
$('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');
  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-menu > .dropdown .show').removeClass("show");
    
  });
  return false;
});

//calender
$('#datetimepicker_mask').datetimepicker({
    mask:'9999/19/39 29:59',
  });
  $('#datetimepicker').datetimepicker();
  $('#datetimepicker').datetimepicker({value:'2015/04/15 05:06'});
  $('#datetimepicker1').datetimepicker({
    datepicker:false,
    format:'H:i',
    step:5
  });
  $('#datetimepicker2').datetimepicker({
    timepicker:false,
    format:'d/m/Y',
    formatDate:'Y/m/d',
    minDate:'-1970/01/02', // yesterday is minimum date
    maxDate:'+1970/01/02' // and tommorow is maximum date calendar
  });
  $('#datetimepicker3').datetimepicker({
    inline:true
  });
  $('#datetimepicker4').datetimepicker();
  $('#open').click(function(){
    $('#datetimepicker4').datetimepicker('show');
  });
  $('#close').click(function(){
    $('#datetimepicker4').datetimepicker('hide');
  });
  $('#datetimepicker5').datetimepicker({
    datepicker:false,
    allowTimes:['12:00','13:00','15:00','17:00','17:05','17:20','19:00','20:00']
  });
  $('#datetimepicker6').datetimepicker();
  $('#destroy').click(function(){
    if( $('#datetimepicker6').data('xdsoft_datetimepicker') ){
      $('#datetimepicker6').datetimepicker('destroy');
      this.value = 'create';
    }else{
      $('#datetimepicker6').datetimepicker();
      this.value = 'destroy';
    }
  });


  $(window).scroll(function(){
    var sticky = $('.navbar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 170) sticky.addClass('fixed-top');
    else sticky.removeClass('fixed-top');
  });

