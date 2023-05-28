<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Document
  {
      /** 
       * Document::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Document::Add()
	   * 
	   */
	  public function Add()
	  {
		  global $db,$user;	

		  if (isset($_FILES['document']) && !empty($_FILES['document']['name'])) {
			$fileName = $_FILES['document']['name'];
			$fileNameCmps = explode(".", $fileName);
			$fileExtension = strtolower(end($fileNameCmps));
			$allowedfileExtensions = array('pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'xls', 'xlsx');
			$fileName = $fileNameCmps[0].'_'.time().'.'.$fileExtension;
			$fileName = str_replace("'", '', $fileName);
			$fileName = str_replace(" ", '', $fileName);
			if (in_array($fileExtension, $allowedfileExtensions)) {
				$uploadFileDir = location.'uploads/documents/';
				$dest_path = $uploadFileDir . $fileName;
				if (move_uploaded_file($_FILES['document']['tmp_name'], $dest_path)) {
					$data = array(
						"company_id" => $user->company_id,
						"name" => $_POST['name'],
						"info" => $_POST['info'],
						"file" => $fileName,
						"created" => "NOW()",
						"active" => "1"
					);
					$db->insert("documents", $data);
					$res["success"] = "1";
					$res["message"] = "Dokument lisatud";
					echo json_encode($res,true);
				} else {
					echo "4";
					$res["success"] = "0";
					$res["message"] = "Dokumendi üleslaadimine ebaõnnestus";
					echo json_encode($res,true);
				}
		  	 }
		  } else {
			$res["success"] = "0";
			$res["message"] = "Dokument puudub";
			echo json_encode($res,true);
		  }
   	 }
	  /**
	   * Document::Load()
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
		$row = $db->fetch_all("SELECT * FROM documents WHERE company_id = '".$user->company_id."' ".$searchQuery." AND active = 1 ORDER BY created DESC");
		$res["success"] = "1";
		$res["message"] = "Dokumendid laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	/**
	   * Document::Delete()
	   * 
	   */
	  public function Delete()
	  {
		  global $db,$user;	


		$data = array(
			"active" => 0,
		);
		$db->update("documents", $data, "id='" . (int)$_POST['id'] . "'");

		$db->delete("user_documents", "document_id='" . (int)$_POST['id'] . "'");

		$res["success"] = "1";
		$res["message"] = "Dokument kustutatud";
		echo json_encode($res,true);
	}
	/**
	   * Document::documentsEditData()
	   * 
	   */
	  public function documentsEditData()
	  {
		  global $db,$user;

		$row = $db->first("SELECT * FROM documents WHERE id = '" . (int)$_POST['document_id'] . "' AND company_id = '".$user->company_id."'");
		$res["success"] = "1";
		$res["message"] = "Dokument laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	  }
	  /**
	   * Document::Edit()
	   * 
	   */
	  public function Edit()
	  {
		  global $db,$user;	

		  if (isset($_FILES['document']) && !empty($_FILES['document']['name'])) {
			$row = $db->first("SELECT file FROM documents WHERE id = '" . (int)$_POST['document_id'] . "' AND company_id = '".$user->company_id."'");
			unlink(location.'uploads/documents/'.$row["file"]);
			
			$fileName = $_FILES['document']['name'].'_'.time();
			$fileNameCmps = explode(".", $fileName);
			$fileExtension = strtolower(end($fileNameCmps));
			$allowedfileExtensions = array('pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'xls', 'xlsx');
			if (in_array($fileExtension, $allowedfileExtensions)) {
				$uploadFileDir = location.'uploads/documents/';
				$dest_path = $uploadFileDir . $fileName;
				if (move_uploaded_file($_FILES['document']['tmp_name'], $dest_path)) {
					$data = array(
						"company_id" => $user->company_id,
						"name" => $_POST['name'],
						"info" => $_POST['info'],
						"file" => $fileName,
						"created" => "NOW()",
						"active" => "1"
					);
					$db->update("documents", $data, "id='" . (int)$_POST['document_id'] . "'");
					$res["success"] = "1";
					$res["message"] = "Dokument muudetud";
					echo json_encode($res,true);
				} else {
					$res["success"] = "0";
					$res["message"] = "Dokumendi üleslaadimine ebaõnnestus";
					echo json_encode($res,true);
				}
		  	 }
		  } else {
			$data = array(
				"company_id" => $user->company_id,
				"name" => $_POST['name'],
				"info" => $_POST['info'],
				"created" => "NOW()",
				"active" => "1"
			);
			$db->update("documents", $data, "id='" . (int)$_POST['document_id'] . "'");
			$res["success"] = "1";
			$res["message"] = "Dokument muudetud";
			echo json_encode($res,true);
		  }
   	 }
	 /**
	  * Document::UserAdd()
	  * 
	  */
	 public function UserAdd()
	 {
		 global $db,$user;	

		 $d = $db->first("SELECT * FROM user_documents WHERE document_id = '" . (int)$_POST['document_id'] . "' AND user_id = '" . (int)$_POST['employee_id'] . "'");
		 if ($d) {
			$res["success"] = "0";
			$res["message"] = "Kasutaja on juba lisatud";
			echo json_encode($res,true);
		 } else {
			$data = array("access" => "INC(1)");
			$db->update("documents", $data, "id='" . (int)$_POST['document_id'] . "'");

			$data = array(
				"document_id" => $_POST['document_id'],
				"user_id" => $_POST['employee_id'],
				"created" => "NOW()",
				"created_by" => $user->uid
			);
			$db->insert("user_documents", $data);

			$this->CreateLog($_POST['employee_id'], $_POST['document_id'], 1);
			$res["success"] = "1";
			$res["message"] = "Kasutaja lisatud dokumendile";
			echo json_encode($res,true);
		 }
	}
	/**
	 * Document::AccessView()
	 */
	public function AccessView()
	{
		global $db,$user;	

		$row = $db->fetch_all("
			SELECT 
			a.id, a.created,
			b.id AS employee_id, CONCAT(b.fname, ' ', b.lname) AS employee_name,
			c.id AS created_by_id, CONCAT(c.fname, ' ', c.lname) AS created_by_name
			FROM user_documents AS a
			LEFT JOIN user AS b ON a.user_id = b.id
			LEFT JOIN user AS c ON a.created_by = c.id
			WHERE a.document_id = '" . (int)$_POST['document_id'] . "' ORDER BY created DESC");

		$res["success"] = "1";
		$res["message"] = "Kasutajad laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}
	/**
	 * Document::AccessDelete()
	 */
	public function AccessDelete()
	{
		global $db,$user;	

		$row = $db->first("SELECT * FROM user_documents WHERE id = '" . (int)$_POST['id'] . "'");
		$db->delete("user_documents", "id='" . (int)$_POST['id'] . "'");

		$data = array("access" => "DEC(1)");
		$db->update("documents", $data, "id='" . (int)$row['document_id'] . "'");

		$this->CreateLog($row['user_id'], $row['document_id'], 2);


		$res["success"] = "1";
		$res["message"] = "Kasutaja eemaldatud";
		echo json_encode($res,true);
	}
	/**
	 * Document:: Download()
	 */
	public function Download()
	{
		global $db,$user;	

		$row = $db->first("SELECT * FROM documents WHERE id = '" . (int)$_POST['document_id'] . "' AND company_id = '".$user->company_id."'");
		$file = location.'uploads/documents/'.$row["file"];
		if (file_exists($file)) {
			$res["success"] = "1";
			$res["message"] = "Dokument laetud";
			$res["file"] = 'uploads/documents/'.$row["file"];
			echo json_encode($res,true);
			exit;
		 } else {
			$res["success"] = "0";
			$res["message"] = "Dokumenti ei leitud";
			echo json_encode($res,true);
		 }
	}
	/**
	 * Document:: CreateLog($employee_id, $document_id, $type)
	 */
	public function CreateLog($employee_id, $document_id, $type)
	{
		global $db,$user;	

		$data = array(
			"company_id" => $user->company_id,
			"document_id" => $document_id,
			"user_id" => $employee_id,
			"type" => $type,
			"created" => "NOW()",
			"created_by" => $user->uid
		);
		$db->insert("documents_log", $data);
	}

	  /**
	   * Documents::LoadEmployeeDocuments()
	   * 
	   */
	  public function LoadEmployeeDocuments()
	  {
		  global $db,$user;	

		$row = $db->fetch_all("
			SELECT
			a.id, a.user_id, a.created,
			b.id AS document_id, b.name AS document_name, b.info AS document_info,
			c.id AS created_by_id, CONCAT(c.fname, ' ', c.lname) AS created_by_name
			FROM user_documents AS a
			LEFT JOIN documents AS b ON a.document_id = b.id
			LEFT JOIN user AS c ON a.created_by = c.id
			WHERE a.user_id = '".(int)$_POST["employee_id"]."'
			ORDER BY a.created DESC
		");


		$res["success"] = "1";
		$res["message"] = "Dokumendid laetud";
		$res["data"] = $row;
		echo json_encode($res,true);
	}


}	
?>