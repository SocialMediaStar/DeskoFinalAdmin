<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* loginForm */
  if (isset($_POST['loginForm']))
      : if (intval($_POST['loginForm']) == 0 || empty($_POST['loginForm']))
      : redirect_to("../index.php");
  endif;
  $username = sanitize($_POST["username"]);
  $password = sanitize($_POST["password"]); 
  $user->loginForm($username,$password);
  endif;
?>
<?php 
  /* GetAllUsers */
  if (isset($_POST['GetAllUsers']))
      : if (intval($_POST['GetAllUsers']) == 0 || empty($_POST['GetAllUsers']))
      : redirect_to("../index.php");
  endif;
  $user->GetAllUsers();
  endif;
?>
