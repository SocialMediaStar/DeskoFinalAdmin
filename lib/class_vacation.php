<?php
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Vacation
  {
      /** 
       * Vacation::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Vacation::loadFilterData()
	   * 
	   */
	  public function loadFilterData()
	  {
		  global $db,$user;


		$row["department"] = $db->fetch_all("SELECT * FROM department WHERE company_id = '".$user->company_id."' ORDER BY id DESC");
		$row["type"] = $db->fetch_all("SELECT * FROM vacation_type ORDER BY id DESC");
		$res["data"] = $row;
		echo json_encode($res,true);

  	 }
	  /**
	   * Vacation::loadVacation()
	   * 
	   */
	  public function loadVacation()
	  {
		  global $db,$user;

			if ($_POST['department_id'] != 0) {
				$departmentSQL = " AND c.department_id = '".$_POST['department_id']."'";
			} else {
				$departmentSQL = "";
			}
			if ($_POST['vacation_type'] != 0) {
				$vacationSQL = " AND a.vacation_type = '".$_POST['vacation_type']."'";
			} else {
				$vacationSQL = "";
			}
			if ($_POST['status'] != -1) {
				$statusSQL = " AND a.status = '".$_POST['status']."'";
			} else {
				$statusSQL = "";
			}
			if ($_POST['start'] != "") {
				$startSQL = " AND a.start >= '".$_POST['start']."'";
			} else {
				$startSQL = "";
			}
			if ($_POST['end'] != "") {
				$endSQL = " AND a.end <= '".$_POST['end']."'";
			} else {
				$endSQL = "";
			}


		  $row = $db->fetch_all("
		  	SELECT 
			a.id, a.start, a.end, a.days, 
			IF (a.payment = 1, 'Koos palgaga', 'Puhkusele jäädes') AS payment, 
			a.status, a.info, a.reason, a.reason_by, a.created,
			b.name AS vacation_name, b.duration AS vacation_duration, b.info AS vacation_info, b.lifetime AS vacation_lifetime,
			c.id AS user_id, CONCAT(fname,' ',lname) AS user_name,
			d.name AS department_name
			FROM vacation AS a
			LEFT JOIN vacation_type AS b ON a.vacation_type = b.id
			LEFT JOIN user AS c ON a.user_id = c.id
			LEFT JOIN department AS d ON c.department_id = d.id
			WHERE a.company_id = '".$user->company_id."' 
			".$departmentSQL."
			".$vacationSQL."
			".$statusSQL."
			".$startSQL."
			".$endSQL."
			ORDER BY id DESC");
		  $res["data"] = $row;
		  $res["success"] = "1";
		  $res["message"] = "Data loaded successfully";
		  echo json_encode($res,true);
	  }
	  /**
	   * Vacation::loadProfileVacation()
	   * 
	   */
	  public function loadProfileVacation()
	  {
		  global $db,$user;

		if ($_POST['vacation_type'] != 0) {
			$vacationSQL = " AND a.vacation_type = '".$_POST['vacation_type']."'";
		} else {
			$vacationSQL = "";
		}
		if ($_POST['status'] != -1) {
			$statusSQL = " AND a.status = '".$_POST['status']."'";
		} else {
			$statusSQL = "";
		}
		if ($_POST['start'] != "") {
			$startSQL = " AND a.start >= '".$_POST['start']."'";
		} else {
			$startSQL = "";
		}
		if ($_POST['end'] != "") {
			$endSQL = " AND a.end <= '".$_POST['end']."'";
		} else {
			$endSQL = "";
		}


	  $row = $db->fetch_all("
		  SELECT 
		a.id, a.start, a.end, a.days, 
		IF (a.payment = 1, 'Koos palgaga', 'Puhkusele jäädes') AS payment, 
		a.status, a.info, a.reason, a.reason_by, a.created,
		b.name AS vacation_name, b.duration AS vacation_duration, b.info AS vacation_info, b.lifetime AS vacation_lifetime,
		c.id AS user_id, CONCAT(fname,' ',lname) AS user_name,
		d.name AS department_name
		FROM vacation AS a
		LEFT JOIN vacation_type AS b ON a.vacation_type = b.id
		LEFT JOIN user AS c ON a.user_id = c.id
		LEFT JOIN department AS d ON c.department_id = d.id
		WHERE a.company_id = '".$user->company_id."' 
		AND a.user_id = '".$_POST["employee_id"]."'
		".$vacationSQL."
		".$statusSQL."
		".$startSQL."
		".$endSQL."
		ORDER BY id DESC");
	  $res["data"] = $row;
	  $res["success"] = "1";
	  $res["message"] = "Data loaded successfully";
	  echo json_encode($res,true);
	  }
			

	  /**
	   * Vacation::acceptVacation()
	   * 
	   */
	  public function acceptVacation()
	  {
		  global $db,$user;

		  $data = array("status" => 1);
		  $db->update("vacation",$data,"id = '".$_POST['vacation_id']."'");

		  $res["success"] = "1";
		  $res["message"] = "Puhkus kinnitatud!";
		  echo json_encode($res,true);
	  }	
	  /**
	   * Vacation::rejectVacation()
	   * 
	   */
	  public function rejectVacation()
	  {
		  global $db,$user;

		  	$data = array(
				"status" => 2, 
				"reason" => $_POST['reason'], 
				"reason_by" => $user->uid
			);
		  	$db->update("vacation",$data,"id = '".$_POST['vacation_id']."'");

			$res["success"] = "1";
			$res["message"] = "Puhkus tagasi lükatud!";
			echo json_encode($res,true);
	  }
	  /**
	   * Vacation::loadVacationStat()
	   * 
	   */
	  public function loadVacationStat()
	  {
		  global $db,$user;

		  $res = $this->GetAvailableVacation($_POST["employee_id"]);
		  $res["success"] = "1";
		  $res["message"] = "Data loaded successfully";
		  echo json_encode($res,true);
	  }

	  /* 
	  * GetAvailableVacation
	  * 
	  */
	  public function GetAvailableVacation($employee_id)
 	  {
	      global $db, $user;

		$pv = $db->first("SELECT COUNT(id) AS count FROM vacation WHERE status = 0 AND user_id = '".$employee_id."'");
		$res["pending"] = $pv["count"];

		$mainCount = $db->first("SELECT SUM(days) AS count FROM vacation WHERE vacation_type = 1 AND YEAR(start) = YEAR(CURDATE()) AND user_id = '".$employee_id."' AND status != 2");
		if ($mainCount) {
			if (is_null($mainCount["count"])) {
				$mainCount["count"] = "0";
			}
			$res["mainUsed"] = $mainCount["count"];
			$res["mainTotal"] = "28";
		} else {
			$res["mainUsed"] = "0";
			$res["mainTotal"] = "28";
		}

		$thisYear = date("Y");
		$fourteen = $thisYear - 14;

		$kids = $db->first("SELECT COUNT(id) AS count, SUM(vacation_used) AS vacation_used FROM user_kid WHERE user_id = '".$employee_id."' AND YEAR(birthday) >= '".$fourteen."' ORDER BY birthday DESC");
		if ($kids) {
			if ($kids["count"] == "0") {
				$res["kidsUsed"] = "0";
				$res["kidsTotal"] = "0";
			} else {
				$res["kidsUsed"] = $kids["vacation_used"];
				$res["kidsTotal"] = $kids["count"] * 10;
			}
		} else {
			$res["kidsUsed"] = "0";
			$res["kidsTotal"] = "0";
		}

		$school = $db->first("SELECT COUNT(id) AS count, SUM(vacation_used) AS vacation_used FROM user_school WHERE user_id = '".$employee_id."' AND YEAR(end) >= '".$thisYear."' ORDER BY start DESC");
		if ($school) {
			if ($school["count"] == "0") {
				$res["schoolUsed"] = "0";
				$res["schoolTotal"] = "0";
			} else {
				$res["schoolUsed"] = $school["vacation_used"];
				$res["schoolTotal"] = "20";
			}
		} else {
			$res["schoolUsed"] = "0";
			$res["schoolTotal"] = "0";
		}


		return $res;
	  }
	  
	  /**
	   * Vacation::loadAvaibleVacationType()
	   * 
	   */
	  public function loadAvaibleVacationType()
	  {
		  global $db,$user;

		  $check = $this->GetAvailableVacation($_POST["employee_id"]);
		  $res["avaible"] = "0";

		  if ($check["mainUsed"] >= $check["mainTotal"]) {
			  $res["main"] = "0";
		  } else {
			  $res["main"] = "1";
			  $res["avaible"] = "1";
		  }
		  if ($check["kidsUsed"] >= $check["kidsTotal"]) {
			  $res["kids"] = "0";
		  } else {
			  $res["kids"] = "1";
			  $res["avaible"] = "1";
		  }
		  if ($check["schoolUsed"] >= $check["schoolTotal"]) {
			  $res["school"] = "0";
		  } else {
			  $res["school"] = "1";
			  $res["avaible"] = "1";
		  }

		  $res["success"] = "1";
		  $res["message"] = "Data loaded successfully";
		  echo json_encode($res,true);
	  }
			
	  /**
	   * Vacation:: AddVacationForEmployee()
	   */
	  public function AddVacationForEmployee()
	  {
		  global $db,$user;

		  $thisYear = date("Y");
		  $fourteen = $thisYear - 14;

		  $vacData = $this->GetAvailableVacation($_POST["employee_id"]);

		  $avaibleMain = $vacData["mainTotal"] - $vacData["mainUsed"];
		  $avaibleKids = $vacData["kidsTotal"] - $vacData["kidsUsed"];
		  $avaibleSchool = $vacData["schoolTotal"] - $vacData["schoolUsed"];

  		    $startDate = new DateTime($_POST['vacation_start']);
			$endDate = new DateTime($_POST['vacation_end']);

			$interval = $startDate->diff($endDate);
			$days = $interval->days;

			if ($_POST['vacation_type'] == 1) {
				if ($days > $avaibleMain) {
					$res["success"] = "0";
					$res["message"] = "Puhkusepäevi pole piisavalt!";
					echo json_encode($res,true);
					exit;
				}
			} else if ($_POST['vacation_type'] == 2) {
				if ($days > $avaibleKids) {
					$res["success"] = "0";
					$res["message"] = "Puhkusepäevi pole piisavalt!";
					echo json_encode($res,true);
					exit;
				}
			} else if ($_POST['vacation_type'] == 3) {
				if ($days > $avaibleSchool) {
					$res["success"] = "0";
					$res["message"] = "Puhkusepäevi pole piisavalt!";
					echo json_encode($res,true);
					exit;
				}
			} 	

			if ($_POST['vacation_type'] == 2) {
				$kids = $db->fetch_all("SELECT * FROM user_kid WHERE user_id = '".$_POST["employee_id"]."' AND YEAR(birthday) >= '".$fourteen."' AND vacation_used > 0 ORDER BY birthday DESC");
				$kidsDay = $days;
				foreach($kids AS $key => $value):

					if ($kidsDay > 0) {
						if ($value["vacation_used"] >= $kidsDay) {
							$data = array(
								"vacation_used" => $value["vacation_used"] + $kidsDay
							);
							$db->update("user_kid",$data,"id = '".$value["id"]."'");
							$kidsDay = 0;
						} else {
							$data = array(
								"vacation_used" => $value["vacation_used"] + $kidsDay
							);
							$db->update("user_kid",$data,"id = '".$value["id"]."'");
							$kidsDay = $kidsDay - $value["vacation_used"];
						}	
					}
				endforeach;
			} else if ($_POST['vacation_type'] == 3) {
				$school = $db->fetch_all("SELECT * FROM user_school WHERE user_id = '".$_POST["employee_id"]."' AND YEAR(end) >= '".$thisYear."' AND vacation_used > 0 ORDER BY start DESC");
				$schoolDay = $days;
				foreach($school AS $key => $value):

					if ($schoolDay > 0) {
						if ($value["vacation_used"] >= $schoolDay) {
							$data = array(
								"vacation_used" => $value["vacation_used"] + $schoolDay
							);
							$db->update("user_school",$data,"id = '".$value["id"]."'");
							$schoolDay = 0;
						} else {
							$data = array(
								"vacation_used" => $value["vacation_used"] + $schoolDay
							);
							$db->update("user_school",$data,"id = '".$value["id"]."'");
							$schoolDay = $schoolDay - $value["vacation_used"];
						}	
					}
				endforeach;
			}

		  $data = array(
			  "user_id" => $_POST['employee_id'],
			  "company_id" => $user->company_id,
			  "vacation_type" => $_POST['vacation_type'],
			  "start" => $_POST['vacation_start'],
			  "end" => $_POST['vacation_end'],
			  "days" => $days,
			  "payment" => $_POST['payment'],
			  "info" => $_POST['vacation_info'],
			  "status" => 0,
			  "company_id" => $user->company_id,
			  "created" => "NOW()"
		  );
		  $db->insert("vacation",$data);


		  $res["success"] = "1";
		  $res["message"] = "Puhkus lisatud!";
		  echo json_encode($res,true);
	  }
	}

?>