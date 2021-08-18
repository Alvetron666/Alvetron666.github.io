(function ($) {

  $(".quiz-form").submit(function (event) {
    event.preventDefault();

    // Сохраняем в переменную form id текущей формы, на которой сработало событие submit
    let form = $('#' + $(this).attr('id'))[0];

    // Сохраняем в переменную класс с параграфом для вывода сообщений


    let fd = new FormData(form);
    $.ajax({
      url: "/../php/send-message-to-telegram.php",
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
    });
  });

}(jQuery));