<?php 
  define("_VALID_PHP", true);
  require_once("init.php");
?>
<script>localStorage.removeItem("email");</script>

<?php
session_start();
$_SESSION = array();
$_SESSION["email"] = 0;
unset($_SESSION);

session_destroy();
redirect_to("index.php");
?>