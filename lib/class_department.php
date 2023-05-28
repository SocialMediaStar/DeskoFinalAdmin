<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Department
  {
      /** 
       * Employee::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Department::Add()
	   * 
	   */
	  public function Add()
	  {
		  global $db,$user;

		  $data = array(
			"company_id" => $user->company_id,
			"name" => $_POST['name'],
			"lead_id" => sanitize($_POST['lead']),
			"created" => "NOW()"
		  );
		  $db->insert("department", $data);

		$res["success"] = "1";
		$res["message"] = "Department added successfully";
		echo json_encode($res,true);

  	 }

	 /**
	  * Department::Edit()
	  * 
	  */
	 public function Edit()
	 {
		 global $db,$user;

		 $data = array(
			"name" => $_POST['name'],
			"lead_id" => sanitize($_POST['lead'])
		 );
		 $db->update("department", $data, "id='" . (int)$_POST['id'] . "'");
		 $res["success"] = "1";
		 $res["message"] = "Department updated successfully";
		 echo json_encode($res,true);

		}

		/**
		 * Department::Delete()
		 * 
		 */
		public function Delete()
		{
			global $db,$user;

			$db->delete("department", "id='" . (int)$_POST['id'] . "'");

			$db->update("user", array("department_id" => 0), "department_id='" . (int)$_POST['id'] . "'");
			$res["success"] = "1";
			$res["message"] = "Department deleted successfully";
			echo json_encode($res,true);
		}

		/**
		 * Department::Employees()
		 * 
		 * @return
		 */
		public function Employees()
		{
			global $db,$user;

			$row = $db->fetch_all("SELECT id, CONCAT(fname,' ',lname) AS name FROM user WHERE company_id = '".$user->company_id."' AND department_id = '".$_POST['id']."' ORDER BY fname ASC");
			echo json_encode($row,true);
		}

/**
	   * Department::Load()
	   * 
	   */
	  public function Load()
	  {
		  global $db,$user;

		if ($_POST['search'] != "") {
			$search = $_POST['search'];
			$searchQuery = " AND (a.name LIKE '%" . $search . "%' OR CONCAT(b.fname,' ',b.lname) LIKE '%" . $search . "%')";
		} else {
			$searchQuery = "";
		}

		$row = $db->fetch_all("
			SELECT
			a.id,a.name, a.lead_id, CONCAT(b.fname,' ',b.lname) AS lead_name,
			(SELECT COUNT(*) FROM user WHERE department_id = a.id) AS employees
			FROM department AS a
			LEFT JOIN user AS b ON b.id = a.lead_id
			WHERE a.company_id = '".$user->company_id."'
			$searchQuery
		");

		  echo json_encode($row,true);
  	 }

		/**
		 * Department::Get()
		 * 	
		 * @return
		 * @param integer $id
		 */
		public function Get()
		{
			global $db,$user;

			$row = $db->first("SELECT * FROM department WHERE id = '".$_POST['id']."' AND company_id = '".$user->company_id."'");
			echo json_encode($row,true);
		}

		/**
		 * Department::GetLeadList()
		 * 	
		 * @return
		 */
		public function GetLeadList()
		{
			global $db,$user;

			$row = $db->fetch_all("SELECT id, CONCAT(fname,' ',lname) AS name,email,phone FROM user WHERE company_id = '".$user->company_id."' ORDER BY fname ASC");
			echo json_encode($row,true);
		}
		/**
		 * Department::EmployeeDelete()
		 * 
		 */
		public function EmployeeDelete()
		{
			global $db,$user;

			$db->update("user", array("department_id" => 0), "id='" . (int)$_POST['id'] . "'");
			$res["success"] = "1";
			$res["message"] = "Employee removed from department successfully";
			echo json_encode($res,true);

		}

		/**
		 * Department::GetEmployeeList()
		 * 
		 * @return
		 */
		public function GetEmployeeList()
		{
			global $db,$user;

			$row = $db->fetch_all("SELECT id, CONCAT(fname,' ',lname) AS name,email,phone FROM user WHERE company_id = '".$user->company_id."' AND department_id = '0' ORDER BY fname ASC");
			echo json_encode($row,true);

		}

		/**
		 * Department::EmployeeAdd()
		 * 
		 */
		public function EmployeeAdd()
		{
			global $db,$user;

			$db->update("user", array("department_id" => $_POST['id']), "id='" . (int)$_POST['employee'] . "'");
			$res["success"] = "1";
			$res["message"] = "Employee added to department successfully";
			echo json_encode($res,true);
		}
	  }	
?>