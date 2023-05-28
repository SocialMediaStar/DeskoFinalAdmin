<?php
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Statement
  {
      /** 
       * Statement::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Statement::loadFilterData()
	   * 
	   */
	  public function loadFilterData()
	  {
		  global $db,$user;


		$row["department"] = $db->fetch_all("SELECT * FROM department WHERE company_id = '".$user->company_id."' ORDER BY id DESC");
		$res["data"] = $row;
		echo json_encode($res,true);

  	 }
	  /**
	   * Statement::loadStatement()
	   * 
	   */
	  public function loadStatement()
	  {
		  global $db,$user;

			if ($_POST['department_id'] != 0) {
				$departmentSQL = " AND c.department_id = '".$_POST['department_id']."'";
			} else {
				$departmentSQL = "";
			}
			if ($_POST['status'] != -1) {
				$statusSQL = " AND a.status = '".$_POST['status']."'";
			} else {
				$statusSQL = "";
			}


		  $row = $db->fetch_all("
		  	SELECT 
			a.id,
			a.status, a.info, a.reason, a.reason_by, a.created,
			b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS user_name,
			c.name AS department_name
			FROM statement AS a
			LEFT JOIN user AS b ON a.user_id = b.id
			LEFT JOIN department AS c ON b.department_id = c.id
			WHERE a.company_id = '".$user->company_id."' 
			".$departmentSQL."
			".$statusSQL."
			ORDER BY a.id DESC");
		  $res["data"] = $row;
		  $res["success"] = "1";
		  $res["message"] = "Data loaded successfully";
		  echo json_encode($res,true);
	  }

	  /**
	   * Statement::viewStatement()
	   * 
	   */
	  public function viewStatement()
	  {
		  global $db,$user;

		  $row = $db->first("
		  	SELECT
			a.id,
			a.status, a.info, a.reason, a.reason_by, a.created,
			b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS user_name,
			c.name AS department_name
			FROM statement AS a
			LEFT JOIN user AS b ON a.user_id = b.id
			LEFT JOIN department AS c ON b.department_id = c.id
			WHERE a.company_id = '".$user->company_id."' AND a.id = '".$_POST['statement_id']."'
			ORDER BY a.id DESC");
		  $res["data"] = $row;
		  $res["success"] = "1";
		  $res["message"] = "Data loaded successfully";
		  echo json_encode($res,true);
	  }
	  /**
	   * Statement::acceptStatement()
	   * 
	   */
	  public function acceptStatement()
	  {
		  global $db,$user;

		  $data = array("status" => 1);
		  $db->update("statement",$data,"id = '".$_POST['statement_id']."'");

		  $res["success"] = "1";
		  $res["message"] = "Avaldus kinnitatud!";
		  echo json_encode($res,true);
	  }	
	  /**
	   * Statement::rejectStatement()
	   * 
	   */
	  public function rejectStatement()
	  {
		  global $db,$user;

		  	$data = array(
				"status" => 2, 
				"reason" => $_POST['reason'], 
				"reason_by" => $user->uid
			);
		  	$db->update("statement",$data,"id = '".$_POST['statement_id']."'");

			$res["success"] = "1";
			$res["message"] = "Avaldus tagasi lükatud!";
			echo json_encode($res,true);
	  }

	  	  /**
	   * Statement::loadProfileStatement()
	   * 
	   */
	  public function loadProfileStatement()
	  {
		  global $db,$user;

		if ($_POST['status'] != -1) {
			$statusSQL = " AND a.status = '".$_POST['status']."'";
		} else {
			$statusSQL = "";
		}

		$row = $db->fetch_all("
		SELECT 
	  a.id,
	  a.status, a.info, a.reason, a.reason_by, a.created,
	  b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS user_name,
	  c.name AS department_name
	  FROM statement AS a
	  LEFT JOIN user AS b ON a.user_id = b.id
	  LEFT JOIN department AS c ON b.department_id = c.id
	  WHERE a.company_id = '".$user->company_id."' 
	  AND a.user_id = '".$_POST["employee_id"]."'
	  ".$statusSQL."
	  ORDER BY a.id DESC");


	  $res["data"] = $row;
	  $res["success"] = "1";
	  $res["message"] = "Data loaded successfully";
	  echo json_encode($res,true);
	  }


	}

?>