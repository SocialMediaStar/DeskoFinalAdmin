<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php 
   /* shiftGetDepartmentList */
   if (isset($_POST['shiftGetDepartmentList']))
   : if (intval($_POST['shiftGetDepartmentList']) == 0 || empty($_POST['shiftGetDepartmentList']))
   : redirect_to("../index.php");
endif;
  $shift->GetDepartmentList();
endif;
?>
<?php 
  /* shiftAdd */
  if (isset($_POST['shiftAdd']))
  : if (intval($_POST['shiftAdd']) == 0 || empty($_POST['shiftAdd']))
  : redirect_to("../index.php");
endif;
  $shift->Add();
endif;
?>
<?php 
/* shiftTable */
if (isset($_POST['shiftTable']))
    : if (intval($_POST['shiftTable']) == 0 || empty($_POST['shiftTable']))
    : redirect_to("../index.php");
endif;
$shift->Load();
endif;
?>
<?php 
/* shiftDetailTable */
if (isset($_POST['shiftDetailTable']))
    : if (intval($_POST['shiftDetailTable']) == 0 || empty($_POST['shiftDetailTable']))
    : redirect_to("../index.php");
endif;
$shift->DetailTable();
endif;
?>
<?php
  /* AddLegend */
  if (isset($_POST['AddLegend']))
      : if (intval($_POST['AddLegend']) == 0 || empty($_POST['AddLegend']))
      : redirect_to("../index.php");
  endif;
  $shift->AddLegend();
  endif;
?>
<?php
  /* loadLegends */
  if (isset($_POST['loadLegends']))
      : if (intval($_POST['loadLegends']) == 0 || empty($_POST['loadLegends']))
      : redirect_to("../index.php");
  endif;
  $shift->loadLegends();
  endif;
?>
<?php
  /* loadLegendData */
  if (isset($_POST['loadLegendData']))
      : if (intval($_POST['loadLegendData']) == 0 || empty($_POST['loadLegendData']))
      : redirect_to("../index.php");
  endif;
  $shift->loadLegendData();
  endif;
?>
<?php
  /* EditLegend */
  if (isset($_POST['EditLegend']))
      : if (intval($_POST['EditLegend']) == 0 || empty($_POST['EditLegend']))
      : redirect_to("../index.php");
  endif;
  $shift->EditLegend();
  endif;
?>
<?php 
/* legendList */
if (isset($_POST['legendList']))
    : if (intval($_POST['legendList']) == 0 || empty($_POST['legendList']))
    : redirect_to("../index.php");
endif;
$shift->legendList();
endif;
?>
<?php
/* shiftDetailAdd */
if (isset($_POST['shiftDetailAdd']))
    : if (intval($_POST['shiftDetailAdd']) == 0 || empty($_POST['shiftDetailAdd']))
    : redirect_to("../index.php");
endif;
$shift->DetailAdd();
endif;
?>
<?php
 /* shiftDetailView */
  if (isset($_POST['shiftDetailView']))
      : if (intval($_POST['shiftDetailView']) == 0 || empty($_POST['shiftDetailView']))
      : redirect_to("../index.php");
  endif;
  $shift->DetailView();
  endif;
?>
<?php 
  /* deleteShiftDetailView */
  if (isset($_POST['deleteShiftDetailView']))
      : if (intval($_POST['deleteShiftDetailView']) == 0 || empty($_POST['deleteShiftDetailView']))
      : redirect_to("../index.php");
  endif;
  $shift->deleteShiftDetailView();
  endif;
?>
<?php 
/* ShiftStatusChange */
if (isset($_POST['ShiftStatusChange']))
    : if (intval($_POST['ShiftStatusChange']) == 0 || empty($_POST['ShiftStatusChange']))
    : redirect_to("../index.php");
endif;
$shift->StatusChange();
endif;
?>



