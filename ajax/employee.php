<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* employeeAdd */
  if (isset($_POST['employeeAdd']))
      : if (intval($_POST['employeeAdd']) == 0 || empty($_POST['employeeAdd']))
      : redirect_to("../index.php");
  endif;
  $employee->Add();
  endif;
?>
<?php
  /* employeeLoad */
  if (isset($_POST['employeeLoad']))
      : if (intval($_POST['employeeLoad']) == 0 || empty($_POST['employeeLoad']))
      : redirect_to("../index.php");
  endif;
  $employee->Load();
  endif;
?>
<?php
  /* employeeDataLoad */
  if (isset($_POST['employeeDataLoad']))
      : if (intval($_POST['employeeDataLoad']) == 0 || empty($_POST['employeeDataLoad']))
      : redirect_to("../index.php");
  endif;
  $employee->DataLoad();
  endif;
?>
<?php 
  /* EditProfileData */
  if (isset($_POST['EditProfileData']))
      : if (intval($_POST['EditProfileData']) == 0 || empty($_POST['EditProfileData']))
      : redirect_to("../index.php");
  endif;
  $employee->EditProfileData();
  endif;
?>
<?php
  /* AddProfileSchool */
  if (isset($_POST['AddProfileSchool']))
      : if (intval($_POST['AddProfileSchool']) == 0 || empty($_POST['AddProfileSchool']))
      : redirect_to("../index.php");
  endif;
  $employee->AddProfileSchool();
  endif;
?>
<?php
  /* DeleteProfileSchool */
  if (isset($_POST['DeleteProfileSchool']))
      : if (intval($_POST['DeleteProfileSchool']) == 0 || empty($_POST['DeleteProfileSchool']))
      : redirect_to("../index.php");
  endif;
  $employee->DeleteProfileSchool();
  endif;
?>
<?php
  /* AddProfileKids */
  if (isset($_POST['AddProfileKids']))
      : if (intval($_POST['AddProfileKids']) == 0 || empty($_POST['AddProfileKids']))
      : redirect_to("../index.php");
  endif;
  $employee->AddProfileKids();
  endif;
?>
<?php 
  /* AddProfileTools */
  if (isset($_POST['AddProfileTools']))
      : if (intval($_POST['AddProfileTools']) == 0 || empty($_POST['AddProfileTools']))
      : redirect_to("../index.php");
  endif;
  $employee->AddProfileTools();
  endif;
?>
<?php 
  /* LoadProfileWorkTools */
  if (isset($_POST['LoadProfileWorkTools']))
      : if (intval($_POST['LoadProfileWorkTools']) == 0 || empty($_POST['LoadProfileWorkTools']))
      : redirect_to("../index.php");
  endif;
  $employee->LoadProfileWorkTools();
  endif;
?>
<?php 
  /* ChangeWorkToolStatus */
  if (isset($_POST['ChangeWorkToolStatus']))
      : if (intval($_POST['ChangeWorkToolStatus']) == 0 || empty($_POST['ChangeWorkToolStatus']))
      : redirect_to("../index.php");
  endif;
  $employee->ChangeWorkToolStatus();
  endif;
?>
