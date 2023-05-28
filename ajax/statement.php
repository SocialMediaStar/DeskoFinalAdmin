<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* loadFilterData */
  if (isset($_POST['loadFilterData']))
      : if (intval($_POST['loadFilterData']) == 0 || empty($_POST['loadFilterData']))
      : redirect_to("../index.php");
  endif;
  $statement->loadFilterData();
  endif;
?>
<?php
  /* loadStatement */
  if (isset($_POST['loadStatement']))
      : if (intval($_POST['loadStatement']) == 0 || empty($_POST['loadStatement']))
      : redirect_to("../index.php");
  endif;
  $statement->loadStatement();
  endif;
?>
<?php 
  /* viewStatement */
  if (isset($_POST['viewStatement']))
      : if (intval($_POST['viewStatement']) == 0 || empty($_POST['viewStatement']))
      : redirect_to("../index.php");
  endif;
  $statement->viewStatement();
  endif;
?>
<?php 
  /* acceptStatement */
  if (isset($_POST['acceptStatement']))
      : if (intval($_POST['acceptStatement']) == 0 || empty($_POST['acceptStatement']))
      : redirect_to("../index.php");
  endif;
  $statement->acceptStatement();
  endif;
?>
<?php 
  /* rejectStatement */
  if (isset($_POST['rejectStatement']))
      : if (intval($_POST['rejectStatement']) == 0 || empty($_POST['rejectStatement']))
      : redirect_to("../index.php");
  endif;
  $statement->rejectStatement();
  endif;
?>
<?php 
  /* loadProfileStatement */
  if (isset($_POST['loadProfileStatement']))
      : if (intval($_POST['loadProfileStatement']) == 0 || empty($_POST['loadProfileStatement']))
      : redirect_to("../index.php");
  endif;
  $statement->loadProfileStatement();
  endif;
?>
