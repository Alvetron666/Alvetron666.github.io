<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Новая заявка с сайта";
$body = "
<b>Имя:</b> $name <br>
<b>Телефон:</b> $phone <br>

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
		$mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
		$mail->Host = 'smtp.mail.ru';
		$mail->SMTPSecure = 'ssl';
		$mail->Port = 465;
    $mail->Username   = 'captainspike228302@mail.ru '; // Логин на почте
    $mail->Password   = 'Andrea2310'; // Пароль на почте
    $mail->setFrom('captainspike228302@mail.ru', 'noreply@gmail.com'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('putevkatour@bk.ru'); 
    $mail->addAddress('putevkatour@inbox.ru');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) { $result = 'Данные отправлены!';}
	else {$result = 'Ошибка';}
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
