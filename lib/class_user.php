<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class User
  {
	  public $logged_in = null;
	  public $is_admin = null;
	  public $is_client = null;
	  public $uid = 0;
	  public $userid = 0;
      public $email;
	  public $sesid;
	  public $name;
	  private $lastlogin = "NOW()";
      
      /** 
       * Users::__construct()
       * 
       * @return
       */
      function __construct()
      {
		  $this->getUserId();
		  $this->startSession();
      }
	  /**
	   * Users::getUserId()
	   * 
	   * @return
	   */
	  private function getUserId()
	  {
	  	  global $core, $DEBUG;
		  if (isset($_GET['userid'])) {
			  $userid = (is_numeric($_GET['userid']) && $_GET['userid'] > -1) ? intval($_GET['userid']) : false;
			  $userid = sanitize($userid);
			  if ($userid == false) {
				  $DEBUG == true ? $core->error("You have selected an Invalid Id", "Users::getUserId()") : $core->ooops();
			  } else
				  return $this->userid = $userid;
		  }
	  }  
      /**
       * Users::startSession()
       * 
       * @return
       */
      private function startSession()
      {  


		if (strlen(session_id()) < 1)
			session_start();
		
		$this->logged_in = $this->loginCheck();
			
		if (!$this->logged_in) {
			$this->username = $_SESSION['username'] = "0";
			$this->sesid = hash('sha256', session_id());
			
			$_SESSION["sesid"] = $this->sesid;
		}
      }
	  /**
	   * Users::loginCheck()
	   * 
	   * @return
	   */
	  private function loginCheck()
	  {
		global $db;
          if (isset($_SESSION['username']) && $_SESSION['username'] != "0") {
              $row = $this->getUserInfo($_SESSION['username']);
			  $this->uid = $row['id'];
			  $this->username = $_SESSION["username"];
			  $this->company_id = $row['company_id'];
			  $this->email = $row['email'];
			  $this->fname = $row['fname'];
			  $this->lname = $row['lname'];
			  $this->info = $row['info'];
			  $this->is_admin = $row["is_admin"];
			  if ($row["avatar"]) {
				  $this->avatar = $row["avatar"];
			  } else {
				  $this->avatar = "assets/img/default.png";
			  }
			return true;
          } else {
              return false;
          }  
	  }
	  /**
	   * Users::checkStatus()
	   * 
	   * @param mixed $username
	   * @param mixed $password
	   * @return
	   */
	  public function checkStatus($username, $password)
	  {
		  global $db;
		  
		  $username = sanitize($username);
		  $username = $db->escape($username);
		  $password = sanitize($password);
		  
          $sql = "SELECT id,password,is_admin FROM user"
		  . "\n WHERE email = '".$username."'";
          $result = $db->query($sql);
		  $row = $db->fetch($result);
		  $entered_pass = hash('sha256', $password);
		  if ($db->numrows($result) == 0) {
			  $data["number"] = 0;
			  $data["msg"] = "Pole niisugust kasutajanime";
		  } else 
		  if ($entered_pass != $row["password"]) {
			  $data["number"] = 0;
			  $data["msg"] = "Salasõna on vale";			
		  }  else 
		  if ($row["is_admin"] == 0) {
			  $data["number"] = 0;
			  $data["msg"] = "Pole õigusid sisse logida";			
		  } else
		  if ($entered_pass == $row["password"]) {
			  $data["number"] = 1;
			  $data["msg"] = "Logged in! Coool!";			
		  } 
		  return $data;
	  }


		/**
	   * Users::loginForm()
	   * @return
	   */
	  public function loginForm($username,$password) {
		  global $db, $core;
			$status = $this->checkStatus($username, $password);
			if ($status["number"] == 0) {
				$e = $status["msg"];
			} 
		  if (empty($e) && $status["number"] == 1 ) {
			$row = $this->getUserInfo($username);
			$this->uid = $_SESSION['uid'] = $row['id'];

			$this->username = $_SESSION['username'] = $username;
			$result["email"] = $username = $this->email;
			$result["success"] = "1";
			$result["user_id"] = $this->uid;
			$result["msg"] = "success";
		  } else {
			  $result["success"] = "0";
			  $result["msg"] = $e;
		  }
			echo json_encode($result,true);
	  }
	  /**
	   * Users::getUserInfo()
	   * 
	   * @param mixed $username
	   * @return
	   */
	  private function getUserInfo($username)
	  {
		  global $db;
		  $username = sanitize($username);
		  $username = $db->escape($username);
		  
		  $sql = "SELECT * FROM user WHERE email = '" . $username . "'";
		  $row = $db->first($sql);
		  if (!$username)
			  return false;
		  
		  return ($row) ? $row : 0;
	  }

	  /**
	   * Users::getAllUsers()
	   * 
	   * @return
	   */
	  public function GetAllUsers()
	  {
		  global $db,$user;	

		  $row = $db->fetch_all("SELECT id,CONCAT(fname,' ',lname) AS name FROM user WHERE company_id = '".$user->company_id."' ORDER BY fname DESC");
		  $res["success"] = "1";
		  $res["message"] = "Kasutajad laetud";
		  $res["data"] = $row;
		  echo json_encode($res,true);
	  }
	  }	
?>