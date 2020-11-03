<?php

$AWS = isset($_SERVER['AWS']);

define('MESSAGE', $AWS ? 'AWS' : 'NOT AWS');

?>
