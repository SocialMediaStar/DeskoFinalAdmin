<?php
  define("_VALID_PHP", true);
  require_once("../init.php");
?>
<?php
  /* Add */
  if (isset($_POST['documentsAdd']))
      : if (intval($_POST['documentsAdd']) == 0 || empty($_POST['documentsAdd']))
      : redirect_to("../index.php");
  endif;
  $document->Add();
  endif;
?>
<?php 
  /* documentsLoad */
  if (isset($_POST['documentsLoad']))
      : if (intval($_POST['documentsLoad']) == 0 || empty($_POST['documentsLoad']))
      : redirect_to("../index.php");
  endif;
  $document->Load();
  endif;
?>
<?php 
  /* documentsDelete */
  if (isset($_POST['documentsDelete']))
      : if (intval($_POST['documentsDelete']) == 0 || empty($_POST['documentsDelete']))
      : redirect_to("../index.php");
  endif;
  $document->Delete();
  endif;
?>
<?php
  /* documentsEditData */
  if (isset($_POST['documentsEditData']))
      : if (intval($_POST['documentsEditData']) == 0 || empty($_POST['documentsEditData']))
      : redirect_to("../index.php");
  endif;
  $document->documentsEditData();
  endif;
?>
<?php
  /* documentsEdit */
  if (isset($_POST['documentsEdit']))
      : if (intval($_POST['documentsEdit']) == 0 || empty($_POST['documentsEdit']))
      : redirect_to("../index.php");
  endif;
  $document->Edit();
  endif;
?>
<?php
  /* documentsUserAdd */
  if (isset($_POST['documentsUserAdd']))
      : if (intval($_POST['documentsUserAdd']) == 0 || empty($_POST['documentsUserAdd']))
      : redirect_to("../index.php");
  endif;
  $document->UserAdd();
  endif;
?>
<?php
  /* documentsAccessView */
  if (isset($_POST['documentsAccessView']))
      : if (intval($_POST['documentsAccessView']) == 0 || empty($_POST['documentsAccessView']))
      : redirect_to("../index.php");
  endif;
  $document->AccessView();
  endif;
?>
<?php
  /* documentsAccessDelete */
  if (isset($_POST['documentsAccessDelete']))
      : if (intval($_POST['documentsAccessDelete']) == 0 || empty($_POST['documentsAccessDelete']))
      : redirect_to("../index.php");
  endif;
  $document->AccessDelete();
  endif;
?>
<?php 
  /* documentsDownload */
  if (isset($_POST['documentsDownload']))
      : if (intval($_POST['documentsDownload']) == 0 || empty($_POST['documentsDownload']))
      : redirect_to("../index.php");
  endif;
  $document->Download();
  endif;
?>
<?php 
  /* LoadEmployeeDocuments */
  if (isset($_POST['LoadEmployeeDocuments']))
      : if (intval($_POST['LoadEmployeeDocuments']) == 0 || empty($_POST['LoadEmployeeDocuments']))
      : redirect_to("../index.php");
  endif;
  $document->LoadEmployeeDocuments();
  endif;
?>

