
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});

(function($) {
$(function() {
  $('.button_promo').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks').fadeOut('slow');
});
});
})(jQuery);

const slider = tns({
  container: '.myslider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  controls: false, 
  nav: false,
  navPosition: top
});

document.querySelector('.prev').onclick = function () {
slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
slider.goTo('next');
};

function validateForms(form) {
  $(form).validate({
  rules: {
    name: {
      required: true, 
      minlength: 2
    }, 
    phone: "required",
    surname: {
      required: true, 
      minlength: 2
    },
    privacypolicy: "required"
  },
  messages: {
    name: "Пожалуйста, введите свое имя",
    surname: "Пожалуйста, введите свою фамилию",
    phone: "Пожалуйста, введите свой номер телефона", 
    privacypolicy: "Пожалуйста, заполните все обязательные поля"
  }
});
};
  validateForms ('#consultation-form');
  validateForms ('#modal-form');

  $('input[name=phone]').mask("+380 (99) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }
    
    $.ajax({
      type: "POST",
      url: "mailer/smart.php", 
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset')
    });
    return false;
});
new WOW().init();