<?php

var_dump($_POST);

if (!empty($_POST) && $_POST['submit']) {
    extract($_POST);
    echo 'Form have been submited';
    echo "<br>";
    echo $num1 + $num2;
    echo $name . ' ' . $password;

//    var_dump($_POST);
}