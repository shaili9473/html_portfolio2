<?php

include 'piggy_bank.php';

session_start();

if (!isset($_SESSION['piggyBank'])) {
    $_SESSION['piggyBank'] = new Piggy_Bank();
}

if ($_POST['euro']) {
    $_SESSION['piggyBank']->addEuro($_POST['euro']);
}

if ($_POST['cent']) {
    $_SESSION['piggyBank']->addCent($_POST['cent']);
}

if ($_POST['spendEuro'] && $_POST['spendCent']) {
    $_SESSION['piggyBank']->spendMoney($_POST['spendEuro'], $_POST['spendCent']);
} else if ($_POST['spendEuro']) {
    $_SESSION['piggyBank']->spendMoney($_POST['spendEuro'], 0);
} else if ($_POST['spendCent']) {
    $_SESSION['piggyBank']->spendMoney(0, $_POST['spendCent']);
}

$mood = $_SESSION['piggyBank']->getMood();
$output = $_SESSION['piggyBank']->getOutput();

include 'piggy_bank_gui.html';