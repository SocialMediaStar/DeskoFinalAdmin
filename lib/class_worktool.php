<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Worktool
  {
      /** 
       * Worktool::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Worktool::Add()
	   * 
	   */
	  public function Add()
	  {
		  global $db,$user;	

		  $data = array(
			"company_id" => $user->company_id,
			"name" => $_POST['name'],
			"info" => $_POST['info'],
			"quantity" => $_POST['quantity'],
			"active" => 1
		  );
		  $db->insert("worktools", $data);

		$res["success"] = "1";
		$res["message"] = "Töövahend lisatud";
		echo json_encode($res,true);

  	 }

	  /**
	   * Worktool::Load()
	   * 
	   */
	  public function Load()
	  {
		  global $db,$user;	


		if ($_POST['search'] != "") {
			$search = $_POST['search'];
			$searchQuery = " AND (name LIKE '%" . $search . "%')";
		} else {
			$searchQuery = "";
		}
		$row = $db->fetch_all("SELECT * FROM worktools WHERE company_id = '".$user->company_id."' ".$searchQuery." AND active = 1 ORDER BY name DESC");
		$res["success"] = "1";
		$res["message"] = "Töövahendid laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	  /**
	   * Worktool::LoadEmployeeTools()
	   * 
	   */
	  public function LoadEmployeeTools()
	  {
		  global $db,$user;	


		$row = $db->fetch_all("
			SELECT 
			a.id, a.user_id, a.quantity, a.created,
			b.id AS worktool_id, b.name AS worktool_name, b.info AS worktool_info
			FROM user_worktool AS a
			LEFT JOIN worktools AS b ON a.worktool_id = b.id
			WHERE a.user_id = '".(int)$_POST["employee_id"]."' 
			ORDER BY a.created DESC
			");
		$res["success"] = "1";
		$res["message"] = "Töövahendid laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	/**
	   * Worktool::Delete()
	   * 
	   */
	  public function Delete()
	  {
		  global $db,$user;	


		$data = array(
			"active" => 0,
		);
		$db->update("worktools", "id='" . (int)$_POST['id'] . "'");

		$db->delete("user_worktool", "worktool_id='" . (int)$_POST['id'] . "'");

		$res["success"] = "1";
		$res["message"] = "Töövahend kustutatud";
		echo json_encode($res,true);
	}

	/**
	 * Worktool::EditData()
	 */
	public function EditData()
	{
		global $db,$user;	

		$row = $db->first("SELECT * FROM worktools WHERE id = '" . (int)$_POST['id'] . "'");

		$res["success"] = "1";
		$res["message"] = "Töövahend laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	/**
	 * Worktool::Edit()
	 */
	public function Edit()
	{
		global $db,$user;	

		$data = array(
			"name" => $_POST['name'],
			"info" => $_POST['info'],
			"quantity" => $_POST['quantity'],
		);
		$db->update("worktools", $data, "id='" . (int)$_POST['id'] . "'");

		$res["success"] = "1";
		$res["message"] = "Töövahend muudetud";
		echo json_encode($res,true);
	}
	/**
	 * Worktool::Used()
	 */
	public function Used()
	{
		global $db,$user;	

		$row = $db->fetch_all("
			SELECT 
			a.id, a.quantity, a.created,
			b.id AS user_id, CONCAT(b.fname,' ',b.lname) AS name
			FROM user_worktool AS a
			LEFT JOIN user AS b ON a.user_id = b.id
			WHERE a.worktool_id = '" . (int)$_POST['id'] . "'");

		$res["success"] = "1";
		$res["message"] = "Töövahendi kasutajad laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	/**
	 * Worktool::UsedAddData()
	 */
	public function UsedAddData()
	{
		global $db,$user;	

		$row = $db->first("SELECT * FROM user_worktool WHERE id = '" . (int)$_POST['id'] . "'");

		$res["success"] = "1";
		$res["message"] = "Töövahendi kasutaja laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	/**
	 * Worktool::UserAdd()
	 */
	public function UserAdd()
	{
		global $db,$user;	

		$t = $db->first("SELECT quantity,used FROM worktools WHERE id = '" . (int)$_POST['worktool_id'] . "'");
		$free = $t["quantity"] - $t["used"];

		if ($free < 1) {
			$res["success"] = "0";
			$res["message"] = "Töövahenditest pole piisavalt vabu";
			echo json_encode($res,true);
			exit;
		} else {
			$data = array(
				"used" => $t["used"] + 1,
			);
			$db->update("worktools", $data, "id='" . (int)$_POST['worktool_id'] . "'");

			$uw = $db->first("SELECT * FROM user_worktool WHERE worktool_id = '" . (int)$_POST['worktool_id'] . "' AND user_id = '" . (int)$_POST['employee_id'] . "'");
			if ($uw) {
				$data = array(
					"quantity" => $uw["quantity"] + 1,
				);
				$db->update("user_worktool", $data, "id='" . (int)$uw["id"] . "'");
				$this->CreateLog($_POST["employee_id"], $_POST["worktool_id"], 1);
				$res["success"] = "1";
				$res["message"] = "Töövahend kasutajale lisatud";
				$res["data"] = $_POST['worktool_id'];
				echo json_encode($res,true);
				exit;
			} else {

			$data = array(
				"worktool_id" => $_POST['worktool_id'],
				"user_id" => $_POST['employee_id'],
				"quantity" => 1,
				"created" => "NOW()",
			);
			$db->insert("user_worktool", $data);
			$this->CreateLog($_POST["employee_id"], $_POST["worktool_id"], 1);
			$res["success"] = "1";
			$res["message"] = "Töövahend kasutajale lisatud";
			$res["data"] = $_POST['worktool_id'];
			echo json_encode($res,true);
			exit;
			}
		}

	}
	/**
	 * Worktool:: worktoolsReturned()
	 */
	public function Returned()
	{
		global $db,$user;	

		$t = $db->first("SELECT quantity,used FROM worktools WHERE id = '" . (int)$_POST['worktool_id'] . "'");


			$data = array(
				"used" => $t["used"] - 1,
			);
			$db->update("worktools", $data, "id='" . (int)$_POST['worktool_id'] . "'");

			$uw = $db->first("SELECT * FROM user_worktool WHERE worktool_id = '" . (int)$_POST['worktool_id'] . "' AND user_id = '" . (int)$_POST['employee_id'] . "'");
			if ($uw) {
				if ($uw["quantity"] == 1) {
					$db->delete("user_worktool", "id='" . (int)$uw["id"] . "'");
					$this->CreateLog($_POST["employee_id"], $_POST["worktool_id"], 2);
					$res["success"] = "1";
					$res["message"] = "Töövahend kasutajalt eemaldatud";
					echo json_encode($res,true);
					exit;
				} else {
				$data = array(
					"quantity" => $uw["quantity"] - 1,
				);
				$db->update("user_worktool", $data, "id='" . (int)$uw["id"] . "'");
				$this->CreateLog($_POST["employee_id"], $_POST["worktool_id"], 2);
				$res["success"] = "1";
				$res["message"] = "Töövahend kasutajalt eemaldatud";
				echo json_encode($res,true);
				exit;
				}
			} else {
				$res["success"] = "0";
				$res["message"] = "Töövahendit pole kasutajal";
				echo json_encode($res,true);
				exit;
			}

	}
	/* 
	 * Worktool::CreateLog()
	 */
	public function CreateLog($employee_id, $worktool_id, $type)
	{
		global $db,$user;	

		$data = array(
			"company_id" => $user->company_id,
			"worktool_id" => $worktool_id,
			"user_id" => $employee_id,
			"type" => $type,
			"created" => "NOW()",
			"created_by" => $user->uid,
		);
		$db->insert("worktools_log", $data);
	}
	/* 
	 * Worktool::LoadLog()
	 */
	public function LoadLog()
	{
		global $db,$user;	

		$row = $db->fetch_all("
			SELECT 
			a.id, 
			IF(a.type = 1, 'Kasutusse lisatud', 'Kasutusest eemaldatud') AS type, 
			a.created,
			b.id AS worktool_id, b.name AS worktool_name,
			c.id AS user_id, CONCAT(c.fname,' ',c.lname) AS user_name,
			d.id AS created_by_id, CONCAT(d.fname,' ',d.lname) AS created_by_name
			FROM worktools_log AS a
			LEFT JOIN worktools AS b ON a.worktool_id = b.id
			LEFT JOIN user AS c ON a.user_id = c.id
			LEFT JOIN user AS d ON a.created_by = d.id
			WHERE a.company_id = '".$user->company_id."' AND a.worktool_id = '" . (int)$_POST['worktool_id'] . "' ORDER BY a.created DESC");

		$res["success"] = "1";
		$res["message"] = "Töövahendi logi laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
}	
?>