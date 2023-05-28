<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* messageHistory */
  if (isset($_POST['messageHistory']))
      : if (intval($_POST['messageHistory']) == 0 || empty($_POST['messageHistory']))
      : redirect_to("../index.php");
  endif;
  $message->History();
  endif;
?>
<?php 
  /* viewMessage */
  if (isset($_POST['viewMessage']))
      : if (intval($_POST['viewMessage']) == 0 || empty($_POST['viewMessage']))
      : redirect_to("../index.php");
  endif;
  $message->View();
  endif;
?>
<?php 
  /* searchEmployee */
  if (isset($_POST['searchEmployee']))
      : if (intval($_POST['searchEmployee']) == 0 || empty($_POST['searchEmployee']))
      : redirect_to("../index.php");
  endif;
  $message->searchEmployee();
  endif;
?>
<?php 
  /* sendMessage */
  if (isset($_POST['sendMessage']))
      : if (intval($_POST['sendMessage']) == 0 || empty($_POST['sendMessage']))
      : redirect_to("../index.php");
  endif;
  $message->sendMessage();
  endif;
?>