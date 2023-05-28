<?php 
  define("_VALID_PHP", true);
  require_once("init.php");
?>
<?php
if ($user->logged_in && $user->is_admin) {
  if (isset($_GET['uid'])) {
    $uid = intval($_GET['uid']);
    $row = $employee->Get($uid);
    require "views/employee_profile.php";
  } else {
    require "views/employee.php";
  }
} else {
    require "views/login.php";
}
?>