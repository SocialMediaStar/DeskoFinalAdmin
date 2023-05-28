<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Employee
  {
	private $salt = "DeskoHRmanagment";
      /** 
       * Employee::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Employee::Get()
	   * 
	   */
	  public function Get($uid)
	  {
		  global $db,$user;

		  $sql = "SELECT * FROM user WHERE id = '" . (int)$uid . "' AND company_id = '" . (int)$user->company_id . "'";
		  $row = $db->first($sql);
		  return ($row) ? $row : 0;
	  }
	  /**
	   * Employee::Add()
	   * 
	   */
	  public function Add()
	  {
		  global $db,$user;

		if (empty($_POST['email']) && empty($_POST["phone"]) && empty($_POST["code"])) {
			$res['message'] = "Kohustuslik on täita vähemalt üks väli: E-post, Telefon või Isikukood!";
			$res["success"] = "0";
		} else {
		
		if (!empty($_POST["phone"])) {
			$phoneSQL = " OR phone = '" . $_POST["phone"] . "'";
		} else {
			$phoneSQL = "";
		}
		$check = $db->first("SELECT email, phone, code FROM user WHERE email = '" . $_POST['email'] . "' ".$phoneSQL." OR code = '" . $_POST['code'] . "'");
		if ($check) {
		  $res['message'] = "Selline töötaja on juba olemas!";
		  $res["success"] = "0";
		} else {
		   $password = rand_string(8);
		   $encrypted_password = crypt($password, $this->salt);
		   $data = array(
			"company_id" => $user->company_id,
			"fname" => $_POST['fname'],
			"lname" => $_POST['lname'],
			"email" => $_POST['email'],
			"phone" => $_POST['phone'],
			"code" => $_POST['code'],
			"info" => $_POST['info'],
			"password" => hash('sha256', $password),
			"password_default" => $encrypted_password,
			"is_admin" => 0,
			"created" => "NOW()",
			"lastlogin" => "NOW()"
		  );
		  
		  $id = $db->insert("user", $data);
		  $res['message'] = "Töötaja on lisatud!";
		  $res["success"] = "1";
		  $res["url"] = "employee.php?uid=".$id;
    	}
		}
		echo json_encode($res,true);

  	 }
	  /**
	   * Employee::Load()
	   * 
	   */
	  public function Load()
	  {
		  global $db,$user;

		  $row = $db->fetch_all("
		  	SELECT 
			a.id,a.fname,a.lname,a.phone,a.email,a.is_admin,a.lastlogin,
			b.id AS department_id, b.name AS department_name
			FROM user AS a
			LEFT JOIN department AS b ON a.department_id = b.id 
			WHERE a.company_id = '" . (int)$user->company_id . "' ORDER BY a.fname DESC");

		  echo json_encode($row,true);
  	 }

	  /**
	   * Employee::DataLoad()
	   * 
	   */
	  public function DataLoad()
	  {
		  global $db,$user;

		  $row = $db->first("
		  	SELECT 
			a.id, a.fname, a.lname, a.avatar, a.code, a.info, a.phone, a.email, a.address, a.education, a.language, a.iban, a.is_admin, a.lastlogin, a.created, 
			b.id AS department_id, b.name AS department_name
			FROM user AS a
			LEFT JOIN department AS b ON a.department_id = b.id 
			WHERE a.id = '" . (int)$_POST['employee_id'] . "' AND a.company_id = '" . (int)$user->company_id . "'");

		  $row["department"] = $db->fetch_all("SELECT * FROM department WHERE company_id = '" . (int)$user->company_id . "' ORDER BY name DESC");
		  $row["school"] = $db->fetch_all("SELECT * FROM user_school WHERE user_id = '" . (int)$_POST['employee_id'] . "' ORDER BY end DESC");
		  $row["kid"] = $db->fetch_all("SELECT * FROM user_kid WHERE user_id = '" . (int)$_POST['employee_id'] . "' ORDER BY fname DESC");
		  echo json_encode($row,true);
  	 }
	 /**
	   * Employee::EditProfileData()
	   * 
	   */
	  public function EditProfileData()
	  {
		  global $db,$user;

		  $data = array(
			"fname" => $_POST['fname'],
			"lname" => $_POST['lname'],
			"email" => $_POST['email'],
			"phone" => $_POST['phone'],
			"code" => $_POST['code'],
			"address" => $_POST['address'],
			"education" => $_POST['education'],
			"language" => $_POST['language'],
			"iban" => $_POST['iban'],
			"department_id" => $_POST['department']
		  );
		  
		  $db->update("user", $data, "id='" . (int)$_POST['employee_id'] . "' AND company_id = '" . (int)$user->company_id . "'");
		  $res["employee_id"] = $_POST['employee_id'];
 		  $res['message'] = "Töötaja andmed on muudetud!";
		  $res["success"] = "1";
		  echo json_encode($res,true);
  	 }
	 /**
	  * Employee::AddProfileSchool()
	  */
	 public function AddProfileSchool()
	 {
		 global $db,$user;

		 $data = array(
		   "user_id" => $_POST['employee_id'],
		   "name" => $_POST['name'],
		   "speciality" => $_POST['speciality'],
		   "start" => $_POST['start'],
		   "end" => $_POST['end']
		 );
		$db->insert("user_school", $data);
		$res["employee_id"] = $_POST['employee_id'];
		$res['message'] = "Töötaja haridus on lisatud!";
		$res["success"] = "1";
		echo json_encode($res,true);
	 }

	 /**
	  * Employee::DeleteProfileSchool()
	  */
	 public function DeleteProfileSchool()
	 {
		 global $db,$user;

		 $db->delete("user_school", "id='" . (int)$_POST['school_id'] . "'");
		 $res["employee_id"] = $_POST['employee_id'];
		 $res['message'] = "Töötaja haridus on kustutatud!";
		 $res["success"] = "1";
		 echo json_encode($res,true);
	 }

	 /**
	  * Employee:: AddProfileKid()	
	  */
	 public function AddProfileKid()
	 {
		 global $db,$user;

		 $data = array(
		   "user_id" => $_POST['employee_id'],
		   "lname" => $_POST['fname'],
		   "fname" => $_POST['lname'],
		   "code" => $_POST['code'],
		 );
		$db->insert("user_kid", $data);
		$res["employee_id"] = $_POST['employee_id'];
		$res['message'] = "Töötaja lapse andmed on lisatud!";
		$res["success"] = "1";
		echo json_encode($res,true);
	 }


	 /**
	  * Employee::AddProfileTools()
	  */
	 public function AddProfileTools()
	 {
		 global $db,$user;

		 $data = array(
		   "user_id" => $_POST['employee_id'],
		   "name" => $_POST['name'],
		   "info" => $_POST['info'],
		   "created" => "NOW()",
		   "status" => 0
		 );
		$db->insert("user_worktool", $data);
		$res["employee_id"] = $_POST['employee_id'];
		$res['message'] = "Töötajale töövahend on lisatud!";
		$res["success"] = "1";
		echo json_encode($res,true);
	 }

	 /**
	  * Employee:: LoadProfileWorkTools()
	  */
	 public function LoadProfileWorkTools()
	 {
		 global $db,$user;

		 $row = $db->fetch_all("SELECT * FROM user_worktool WHERE user_id = '" . (int)$_POST['employee_id'] . "' ORDER BY created DESC");
		 echo json_encode($row,true);
	 }

	 /**
	  * Employee:: ChangeWorkToolStatus()
	  */
	 public function ChangeWorkToolStatus()
	 {
		 global $db,$user;

		 $data = array(
		   "status" => $_POST['status']
		 );
		$db->update("user_worktool", $data, "id='" . (int)$_POST['tool_id'] . "'");
		$res["employee_id"] = $_POST['employee_id'];
		$res['message'] = "Töövahendi staatus on muudetud!";
		$res["success"] = "1";
		echo json_encode($res,true);
	 }


	
	  }	
?>