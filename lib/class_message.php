<?php
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Message
  {
      /** 
       * Message::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Message::History()
	   * 
	   */
	  public function History()
	  {
		  global $db,$user;

		  if ($_POST["search"] && !empty($_POST["search"])) {
			$searchSQL = " AND (b.fname LIKE '%" . $_POST["search"] . "%' OR b.lname LIKE '%" . $_POST["search"] . "%')";
		  } else {
			$searchSQL = "";
		  }
		  $row = $db->fetch_all("
		  	SELECT 
			a.id,a.employee_id,a.user_seen,
			DATE_FORMAT(a.created,'%d.%m.%Y %H:%i') AS created,
			CONCAT(b.fname,' ',b.lname) AS user_name
			FROM message AS a
			LEFT JOIN user AS b ON a.employee_id = b.id
			WHERE a.user_id = '".$user->uid."' 
			".$searchSQL."
			ORDER BY a.created DESC
			");

		  $res["data"] = $row;
		  $res["success"] = "1";
		  $res["message"] = "Laadimine õnnestus";
		  echo json_encode($res,true);
  	 }
	  /** 
	   * Message::View()
	   * 
	   * @return
	   */
	  public function View()
	  {
		  global $db,$user;

			if ($_POST["message_id"] == 0) {
				$c = $db->first("SELECT * FROM message WHERE user_id = '".$user->uid."' AND employee_id = '".$_POST["employee_id"]."'");
				if (!$c) {
					$data = array(
						"user_id" => $user->uid,
						"employee_id" => $_POST["employee_id"],
						"user_seen" => 1,
						"employee_seen" => 1,
						"created" => date("Y-m-d H:i:s")
					);
					$_POST["message_id"] = $db->insert("message", $data);	
				} else {
					$_POST["message_id"] = $c["id"];
				}
			}

		  	$res["employee"] = $db->first("
				SELECT 
				a.id, a.employee_id, a.employee_seen, a.user_seen, a.created,
				DATE_FORMAT(a.created,'%d.%m.%Y %H:%i') AS created,
				CONCAT(b.fname,' ',b.lname) AS employee_name
				FROM message AS a
				LEFT JOIN user AS b ON b.id = a.employee_id
				WHERE a.id = '".$_POST["message_id"]."' AND a.user_id = '".$user->uid."' 
		    ");
			
			$res["data"] = $db->fetch_all("
				SELECT 
				a.id AS message_content_id,a.sent_who, a.sent_to, a.body, a.file, a.image,
				DATE_FORMAT(a.created,'%d.%m.%Y %H:%i') AS created,
				IF (a.sent_to = '".$user->uid."', '1', '0') AS user_sent
				FROM message_content AS a
				WHERE a.message_id = '".$_POST["message_id"]."'
			");

			$data = array(
				"user_seen" => "1"
			);
			$db->update("message", $data, "id='" . $_POST["message_id"] . "'");

			$res["success"] = "1";
			$res["message"] = "Laadimine õnnestus";
			echo json_encode($res,true);

	  }
	  /** 
	   * Message::searchEmployee()
	   * 
	   * @return
	   */
	  public function searchEmployee()
	  {
		  global $db,$user;

		  if ($_POST["search"] && !empty($_POST["search"])) {
			$searchSQL = " AND (a.fname LIKE '%" . $_POST["search"] . "%' OR a.lname LIKE '%" . $_POST["search"] . "%')";
		  } else {
			$searchSQL = "";
		  }

		  $row = $db->fetch_all("
		  	SELECT
			a.id AS employee_id,
			CONCAT(a.fname,' ',a.lname) AS user_name,
			DATE_FORMAT(a.lastlogin,'%d.%m.%Y %H:%i') AS lastlogin
			FROM user AS a
			WHERE a.company_id = '".$user->company_id."' 
			AND a.id != '".$user->uid."'
			".$searchSQL." 
			ORDER BY a.fname ASC
			");

		  $res["data"] = $row;
		  $res["success"] = "1";
		  $res["message"] = "Laadimine õnnestus";
		  echo json_encode($res,true);
  	 }

	  /**
	   * Message::sendMessage()
	   * 	
	   * 	
	   * @return
	   */
	  public function sendMessage()
	  {
		  global $db,$user;

		  $data = array(
			  "message_id" => $_POST["message_id"],
			  "sent_who" => $user->uid,
			  "sent_to" => $_POST["employee_id"],
			  "body" => $_POST["content"],
			  "created" => date("Y-m-d H:i:s")
		  );
		  $db->insert("message_content", $data);

		  $data = array(
			  "employee_seen" => "0"
		  );
		  $db->update("message", $data, "id='" . $_POST["message_id"] . "'");
		  $res["message_id"] = $_POST["message_id"];
		  $res["employee_id"] = $_POST["employee_id"];
		  $res["success"] = "1";
		  $res["message"] = "Sõnum saadetud";
		  echo json_encode($res,true);
	  }
	}

?>