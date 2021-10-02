<?php
// Автор: Дмитрий Давыдов
// Материал с сайта https://smartlanding.biz/otpravka-dannyx-formy-v-telegram.html

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $token = "1920990488:AAE37UFREY2yD4VVnYKAgNXSZ-z8QKWvmIk";
    $chat_id = "-554297203";

    if (!empty($_POST['name']) && !empty($_POST['phone'])){
        $bot_url = "https://api.telegram.org/bot{$token}/";
        $urlForPhoto = $bot_url . "sendPhoto?chat_id=" . $chat_id;


        if (isset($_POST['name'])) {
          if (!empty($_POST['name'])){
            $name = "Имя пославшего: " . strip_tags($_POST['name']) . "%0A";
          }
        }

        if (isset($_POST['phone'])) {
          if (!empty($_POST['phone'])){
            $phone = "Телефон: " . "%2B" . strip_tags($_POST['phone']) . "%0A";
          }
        }

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

        // Формируем текст сообщения
        $txt = $name . $phone . 
        'Страна: ' . $country1 = $_POST['country1'] . $country2 = $_POST['country2'] . $country3 = $_POST['country3'] . $country4 = $_POST['country4'] . $country5 = $_POST['country5'] . $country6 = $_POST['country6'] . "%0A" .
        'Количество людей: ' .  $human1 = $_POST['human1'] . $human2 = $_POST['human2'] . $human3 = $_POST['human3'] . $human4 = $_POST['human4'] . "%0A" .
        'Отель: ' . $otel1 = $_POST['otel1'] . $otel2 = $_POST['otel2'] . $otel3 = $_POST['otel3'] . $otel4 = $_POST['otel4'] . "%0A" .
        'Вид отдыха: ' . $relax1 = $_POST['relax1'] . $relax2 = $_POST['relax2'] . $relax3 = $_POST['relax3'] . $relax4 = $_POST['relax4'] . $relax5 = $_POST['relax5'] . $relax6 = $_POST['relax6'] . "%0A" .
        'Подарок: ' . $box1 = $_POST['box1'] . $box2 = $_POST['box2'] . $box3 = $_POST['box3'];

        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        if ($output && $sendTextToTelegram) {
            echo json_encode($msgs);
        } elseif ($sendTextToTelegram) {
            echo json_encode($msgs);
          return true;
        } else {
            echo json_encode($msgs);
        }

    } else {
        echo json_encode($msgs);;
    }
} else {
  header ("Location: /");
}
?>