<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

$country1 = $_POST['country1'];
$country2 = $_POST['country2'];
$country3 = $_POST['country3'];
$country4 = $_POST['country4'];
$country5 = $_POST['country5'];
$country6 = $_POST['country6'];

$human1 = $_POST['human1'];
$human2 = $_POST['human2'];
$human3 = $_POST['human3'];
$human4 = $_POST['human4'];

$otel1 = $_POST['otel1'];
$otel2 = $_POST['otel2'];
$otel3 = $_POST['otel3'];
$otel4 = $_POST['otel4'];


$relax1 = $_POST['relax1'];
$relax2 = $_POST['relax2'];
$relax3 = $_POST['relax3'];
$relax4 = $_POST['relax4'];
$relax5 = $_POST['relax5'];
$relax6 = $_POST['relax6'];

$box1 = $_POST['box1'];
$box2 = $_POST['box2'];
$box3 = $_POST['box3'];




// Формирование самого письма
$title = "Новая заявка с сайта";
$body = "
<b>Имя:</b> $name <br>
<b>Телефон:</b> $phone <br>
<b>Страны:</b> $country1 $country2 $country3 $country4 $country5 $country6 <br>
<b>Количество людей:</b> $human1 $human2 $human3 $human4  <br>
<b>Отель:</b> $otel1 $otel2 $otel3 $otel4  <br>
<b>Вид отдыха:</b> $relax1 $relax2 $relax3 $relax4 $relax5 $relax6 <br>
<b>Подарок:</b> $box1 $box2 $box3  <br>
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
