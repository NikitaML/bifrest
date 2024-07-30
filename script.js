document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind('[data-fancybox]', {});
});

$(function () {
  const body = $('body');

  function closeMenu() {
    $('.burger').removeClass('active');
    $('.header__menu').css({
      maxHeight: 0,
    });
    $('.overlay').removeClass('active');
    body.removeClass('hidden');
  }

  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.header__menu').css({
        maxHeight: $('.header__menu').prop('scrollHeight'),
      });
      body.addClass('hidden');
    } else {
      $('.header__menu').css({
        maxHeight: 0,
      });

      body.removeClass('hidden');
    }
  });

  $('.overlay').on('click', function () {
    if ($(this).hasClass('active')) {
      closeMenu();
    }
  });

  $('.accordion-item__title ').on('click', function () {
    let parent = $(this).closest('.accordion-item');
    if (parent.hasClass('active')) {
      parent.removeClass('active');
      parent.find('.accordion-item__body').slideUp(200);
    } else {
      parent.addClass('active');
      parent.find('.accordion-item__body').slideDown(200);
    }
  });

  $('.lang-active').on('click', function () {
    let parent = $(this).closest('.lang');
    let list = parent.find('.lang-list');
    if (parent.hasClass('open')) {
      parent.removeClass('open');
      list.slideUp(200);
    } else {
      parent.addClass('open');
      list.slideDown(200);
    }
  });

  $('.lang-list .lang-item').on('click', function () {
    let parent = $(this).closest('.lang');
    let list = parent.find('.lang-list');
    let activeLang = parent.find('.lang-active .lang-item');
    activeLang.html($(this).html());
    parent.removeClass('open');
    list.slideUp(200);
  });

  $("a[href*='#']").on('click', function (e) {
    if ($('.burger').hasClass('active')) {
      closeMenu();
    }
    var anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr('href')).offset().top,
        },
        777,
      );
    e.preventDefault();
    return false;
  });
});
