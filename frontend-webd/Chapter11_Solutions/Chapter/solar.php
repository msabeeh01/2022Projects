<?php
/* To make this app work, you must replace the text "apikey" in the following statement with a valid API key */
$WeatherSource = "https://api.forecast.io/forecast/40d71n74d01/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>