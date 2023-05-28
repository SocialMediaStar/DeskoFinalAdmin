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
  $vacation->loadFilterData();
  endif;
?>
<?php
  /* loadVacation */
  if (isset($_POST['loadVacation']))
      : if (intval($_POST['loadVacation']) == 0 || empty($_POST['loadVacation']))
      : redirect_to("../index.php");
  endif;
  $vacation->loadVacation();
  endif;
?>
<?php 
  /* acceptVacation */
  if (isset($_POST['acceptVacation']))
      : if (intval($_POST['acceptVacation']) == 0 || empty($_POST['acceptVacation']))
      : redirect_to("../index.php");
  endif;
  $vacation->acceptVacation();
  endif;
?>
<?php 
  /* rejectVacation */
  if (isset($_POST['rejectVacation']))
      : if (intval($_POST['rejectVacation']) == 0 || empty($_POST['rejectVacation']))
      : redirect_to("../index.php");
  endif;
  $vacation->rejectVacation();
  endif;
?>
<?php 
  /* loadProfileVacation */
  if (isset($_POST['loadProfileVacation']))
      : if (intval($_POST['loadProfileVacation']) == 0 || empty($_POST['loadProfileVacation']))
      : redirect_to("../index.php");
  endif;
  $vacation->loadProfileVacation();
  endif;
?>
<?php
  /* loadVacationStat */
  if (isset($_POST['loadVacationStat']))
      : if (intval($_POST['loadVacationStat']) == 0 || empty($_POST['loadVacationStat']))
      : redirect_to("../index.php");
  endif;
  $vacation->loadVacationStat();
  endif;
?>
<?php 
  /* loadAvaibleVacationType */
  if (isset($_POST['loadAvaibleVacationType']))
      : if (intval($_POST['loadAvaibleVacationType']) == 0 || empty($_POST['loadAvaibleVacationType']))
      : redirect_to("../index.php");
  endif;
  $vacation->loadAvaibleVacationType();
  endif;
?>
<?php
  /* AddVacationForEmployee */
  if (isset($_POST['AddVacationForEmployee']))
      : if (intval($_POST['AddVacationForEmployee']) == 0 || empty($_POST['AddVacationForEmployee']))
      : redirect_to("../index.php");
  endif;
  $vacation->AddVacationForEmployee();
  endif;
?>
