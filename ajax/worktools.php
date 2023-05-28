<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* worktoolsAdd */
  if (isset($_POST['worktoolsAdd']))
      : if (intval($_POST['worktoolsAdd']) == 0 || empty($_POST['worktoolsAdd']))
      : redirect_to("../index.php");
  endif;
  $worktool->Add();
  endif;
?>
<?php 
  /* worktoolsLoad */
  if (isset($_POST['worktoolsLoad']))
      : if (intval($_POST['worktoolsLoad']) == 0 || empty($_POST['worktoolsLoad']))
      : redirect_to("../index.php");
  endif;
  $worktool->Load();
  endif;
?>
<?php 
  /* worktoolsDelete */
  if (isset($_POST['worktoolsDelete']))
      : if (intval($_POST['worktoolsDelete']) == 0 || empty($_POST['worktoolsDelete']))
      : redirect_to("../index.php");
  endif;
  $worktool->Delete();
  endif;
?>
<?php 
  /* worktoolsEditData */
  if (isset($_POST['worktoolsEditData']))
      : if (intval($_POST['worktoolsEditData']) == 0 || empty($_POST['worktoolsEditData']))
      : redirect_to("../index.php");
  endif;
  $worktool->EditData();
  endif;
?>
<?php 
  /* worktoolsEdit */
  if (isset($_POST['worktoolsEdit']))
      : if (intval($_POST['worktoolsEdit']) == 0 || empty($_POST['worktoolsEdit']))
      : redirect_to("../index.php");
  endif;
  $worktool->Edit();
  endif;
?>
<?php 
  /* worktoolsUsed */
  if (isset($_POST['worktoolsUsed']))
      : if (intval($_POST['worktoolsUsed']) == 0 || empty($_POST['worktoolsUsed']))
      : redirect_to("../index.php");
  endif;
  $worktool->Used();
  endif;
?>
<?php 
  /* worktoolsUserAddData */
  if (isset($_POST['worktoolsUserAddData']))
      : if (intval($_POST['worktoolsUserAddData']) == 0 || empty($_POST['worktoolsUserAddData']))
      : redirect_to("../index.php");
  endif;
  $worktool->UserAddData();
  endif;
?>
<?php 
  /* worktoolsUserAdd */
  if (isset($_POST['worktoolsUserAdd']))
      : if (intval($_POST['worktoolsUserAdd']) == 0 || empty($_POST['worktoolsUserAdd']))
      : redirect_to("../index.php");
  endif;
  $worktool->UserAdd();
  endif;
?>
<?php 
  /* worktoolsReturned */
  if (isset($_POST['worktoolsReturned']))
      : if (intval($_POST['worktoolsReturned']) == 0 || empty($_POST['worktoolsReturned']))
      : redirect_to("../index.php");
  endif;
  $worktool->Returned();
  endif;
?>
<?php 
  /* worktoolsViewLog */
  if (isset($_POST['worktoolsViewLog']))
      : if (intval($_POST['worktoolsViewLog']) == 0 || empty($_POST['worktoolsViewLog']))
      : redirect_to("../index.php");
  endif;
  $worktool->LoadLog();
  endif;
?>
<?php 
  /* LoadEmployeeTools */
  if (isset($_POST['LoadEmployeeTools']))
      : if (intval($_POST['LoadEmployeeTools']) == 0 || empty($_POST['LoadEmployeeTools']))
      : redirect_to("../index.php");
  endif;
  $worktool->LoadEmployeeTools();
  endif;
?>
