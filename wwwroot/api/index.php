<?php

$input = file_get_contents('php://input');
$input = json_decode($input, true);

require_once("../../api/{$input[0]}.php");

?>
