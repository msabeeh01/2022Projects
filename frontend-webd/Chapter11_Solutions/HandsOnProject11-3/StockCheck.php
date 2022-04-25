<?php
$TickerSymbol = $_GET["t"];
header("Cache-Control: no-cache");
header("Content-Type: text/csv");
$Quote = "https://markets.businessinsider.com/stocks/yahoo_1-stock";
$QuoteString = file_get_contents($Quote);
echo $QuoteString;
?>