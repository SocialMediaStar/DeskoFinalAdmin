<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* departmentAdd */
  if (isset($_POST['departmentAdd']))
      : if (intval($_POST['departmentAdd']) == 0 || empty($_POST['departmentAdd']))
      : redirect_to("../index.php");
  endif;
  $department->Add();
  endif;
?>
<?php
  /* departmentEdit */
  if (isset($_POST['departmentEdit']))
      : if (intval($_POST['departmentEdit']) == 0 || empty($_POST['departmentEdit']))
      : redirect_to("../index.php");
  endif;
  $department->Edit();
  endif;
?>
<?php
  /* departmentLoad */
  if (isset($_POST['departmentLoad']))
      : if (intval($_POST['departmentLoad']) == 0 || empty($_POST['departmentLoad']))
      : redirect_to("../index.php");
  endif;
  $department->Load();
  endif;
?>
<?php
  /* departmentGet */
  if (isset($_POST['departmentGet']))
      : if (intval($_POST['departmentGet']) == 0 || empty($_POST['departmentGet']))
      : redirect_to("../index.php");
  endif;
  $department->Get();
  endif;
?>
<?php
  /* departmetGetLeadList */
  if (isset($_POST['departmetGetLeadList']))
      : if (intval($_POST['departmetGetLeadList']) == 0 || empty($_POST['departmetGetLeadList']))
      : redirect_to("../index.php");
  endif;
  $department->GetLeadList();
  endif;
?>
<?php
  /* departmentDelete */
  if (isset($_POST['departmentDelete']))
      : if (intval($_POST['departmentDelete']) == 0 || empty($_POST['departmentDelete']))
      : redirect_to("../index.php");
  endif;
  $department->Delete();
  endif;
?>
<?php 
  /* departmentEmployees */
  if (isset($_POST['departmentEmployees']))
      : if (intval($_POST['departmentEmployees']) == 0 || empty($_POST['departmentEmployees']))
      : redirect_to("../index.php");
  endif;
  $department->Employees();
  endif;
?>
<?php 
  /* departmentEmployeeDelete */
  if (isset($_POST['departmentEmployeeDelete']))
      : if (intval($_POST['departmentEmployeeDelete']) == 0 || empty($_POST['departmentEmployeeDelete']))
      : redirect_to("../index.php");
  endif;
  $department->EmployeeDelete();
  endif;
?>
<?php
  /* departmentGetEmployeeList */
  if (isset($_POST['departmentGetEmployeeList']))
      : if (intval($_POST['departmentGetEmployeeList']) == 0 || empty($_POST['departmentGetEmployeeList']))
      : redirect_to("../index.php");
  endif;
  $department->GetEmployeeList();
  endif;
?>
<?php 
  /* departmentEmployeeAdd */
  if (isset($_POST['departmentEmployeeAdd']))
      : if (intval($_POST['departmentEmployeeAdd']) == 0 || empty($_POST['departmentEmployeeAdd']))
      : redirect_to("../index.php");
  endif;
  $department->EmployeeAdd();
  endif;
?>
