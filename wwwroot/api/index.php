<?php

$dsn = "sqlsrv:host=ng.cesrz10dkvvb.eu-west-2.rds.amazonaws.com;port=1433;dbname=rdsadmin;charset=utf8";
$pdo = new PDO($dsn, $_SERVER['RDS_USERNAME'], $_SERVER['RDS_PASSWORD']);

?>
