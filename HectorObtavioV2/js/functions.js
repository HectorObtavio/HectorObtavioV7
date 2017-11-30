$(window).scroll(function(){
  console.log('hi')


$('.trigger').on('click',function(){
  $(this).toggleClass('clicked');
});

$('html').on('click', function(){
  $(this).find('body').append('<div class="box">alert!</div>');
});

$('.imgbox2').each(function(i){
  setTimeout(function(){
    $('.imgbox2').eq(i).addClass('is-visible');
  }, 200 * i);
});
