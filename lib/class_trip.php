<?php
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Trip
  {
      /** 
       * Trip::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Trip::loadFilterData()
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
	   * Trip::loadTrip()
	   * 
	   */
	  public function loadTrip()
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
			a.status, a.info, a.reason, a.reason_by, a.created, a.start, a.end,
			b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS user_name,
			c.name AS department_name
			FROM trip AS a
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
	   * Trip::viewTrip()
	   * 
	   */
	  public function viewTrip()
	  {
		  global $db,$user;

		  $row = $db->first("
		  	SELECT
			a.id,
			a.status, a.info, a.reason, a.reason_by, a.created, a.start, a.end,
			b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS user_name,
			c.name AS department_name
			FROM trip AS a
			LEFT JOIN user AS b ON a.user_id = b.id
			LEFT JOIN department AS c ON b.department_id = c.id
			WHERE a.company_id = '".$user->company_id."' AND a.id = '".$_POST['trip_id']."'
			ORDER BY a.id DESC");
		  $res["data"] = $row;
		  $res["success"] = "1";
		  $res["message"] = "Data loaded successfully";
		  echo json_encode($res,true);
	  }
	  /**
	   * Trip::acceptTrip()
	   * 
	   */
	  public function acceptTrip()
	  {
		  global $db,$user;

		  $data = array("status" => 1);
		  $db->update("trip",$data,"id = '".$_POST['trip_id']."'");

		  $res["success"] = "1";
		  $res["message"] = "Lähetus kinnitatud!";
		  echo json_encode($res,true);
	  }	
	  /**
	   * Trip::rejectTrip()
	   * 
	   */
	  public function rejectTrip()
	  {
		  global $db,$user;

		  	$data = array(
				"status" => 2, 
				"reason" => $_POST['reason'], 
				"reason_by" => $user->uid
			);
		  	$db->update("trip",$data,"id = '".$_POST['trip_id']."'");

			$res["success"] = "1";
			$res["message"] = "Lähetus tagasi lükatud!";
			echo json_encode($res,true);
	  }

	  	  /**
	   * Trip::loadProfileTrip()
	   * 
	   */
	  public function loadProfileTrip()
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
	  a.status, a.info, a.reason, a.reason_by, a.created,a.start,a.end,
	  b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS user_name,
	  c.name AS department_name
	  FROM trip AS a
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

	  /**
	   * Trip::AddTripForEmployee()
	   * 
	   */
	  public function AddTripForEmployee()
	  {
		  global $db,$user;

		  $data = array(
			  "user_id" => $_POST['employee_id'],
			  "company_id" => $user->company_id,
			  "status" => 0,
			  "info" => $_POST['info'],
			  "start" => $_POST['start'],
			  "end" => $_POST['end'],
			  "created" => "NOW()",
		  );
		  $db->insert("trip",$data);

		  $res["success"] = "1";
		  $res["message"] = "Lähetus lisatud!";
		  echo json_encode($res,true);
	  }

	}

?>