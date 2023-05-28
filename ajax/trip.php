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
  $trip->loadFilterData();
  endif;
?>
<?php
  /* loadTrip */
  if (isset($_POST['loadTrip']))
      : if (intval($_POST['loadTrip']) == 0 || empty($_POST['loadTrip']))
      : redirect_to("../index.php");
  endif;
  $trip->loadTrip();
  endif;
?>
<?php 
  /* viewTrip */
  if (isset($_POST['viewTrip']))
      : if (intval($_POST['viewTrip']) == 0 || empty($_POST['viewTrip']))
      : redirect_to("../index.php");
  endif;
  $trip->viewTrip();
  endif;
?>
<?php 
  /* acceptTrip */
  if (isset($_POST['acceptTrip']))
      : if (intval($_POST['acceptTrip']) == 0 || empty($_POST['acceptTrip']))
      : redirect_to("../index.php");
  endif;
  $trip->acceptTrip();
  endif;
?>
<?php 
  /* rejectTrip */
  if (isset($_POST['rejectTrip']))
      : if (intval($_POST['rejectTrip']) == 0 || empty($_POST['rejectTrip']))
      : redirect_to("../index.php");
  endif;
  $trip->rejectTrip();
  endif;
?>
<?php 
  /* loadProfileTrip */
  if (isset($_POST['loadProfileTrip']))
      : if (intval($_POST['loadProfileTrip']) == 0 || empty($_POST['loadProfileTrip']))
      : redirect_to("../index.php");
  endif;
  $trip->loadProfileTrip();
  endif;
?>
<?php 
  /* AddTripForEmployee */
  if (isset($_POST['AddTripForEmployee']))
      : if (intval($_POST['AddTripForEmployee']) == 0 || empty($_POST['AddTripForEmployee']))
      : redirect_to("../index.php");
  endif;
  $trip->AddTripForEmployee();
  endif;
?>

