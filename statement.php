<?php 
  define("_VALID_PHP", true);
  require_once("init.php");
?>
<?php
if ($user->logged_in && $user->is_admin) {
    require "views/statement.php";
} else {
    require "views/login.php";
}
?>