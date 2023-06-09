<?php
/**
   * Init
   *
   */
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');
  // Magic Quotes Fix
  if (ini_get('magic_quotes_gpc')) {
      function clean($data)
      {
          if (is_array($data)) {
              foreach ($data as $key => $value) {
                  $data[clean($key)] = clean($value);
              }
          } else {
              $data = stripslashes($data);
          }
          
          return $data;
      }
      
      $_GET = clean($_GET);
      $_POST = clean($_POST);
      $_COOKIE = clean($_COOKIE);
  }
  
  $location = str_replace("init.php", "", realpath(__FILE__));
  define("location", $location);
  
  $configFile = $location . "lib/config.ini.php";
  if (file_exists($configFile)) {
      require_once($configFile);
  } else {
      echo "Error database";
  }

  require_once(location . "lib/class_db.php");
  $db = new Database(DB_SERVER, DB_USER, DB_PASS, DB_DATABASE);
  $db->connect();
  require_once(location . "lib/functions.php"); 
  require_once(location . "lib/class_core.php");
  require_once(location . "lib/class_user.php");
  require_once(location . "lib/class_component.php");
  require_once(location . "lib/class_employee.php");
  require_once(location . "lib/class_department.php");
  require_once(location . "lib/class_shift.php");
  require_once(location . "lib/class_worktool.php");
  require_once(location . "lib/class_document.php");
  require_once(location . "lib/class_vacation.php");
  require_once(location . "lib/class_statement.php");
  require_once(location . "lib/class_trip.php");
  require_once(location . "lib/class_message.php");
  $core = new Core(); 
  $user = new User(); 
  $employee = new Employee(); 
  $department = new Department(); 
  $shift = new Shift(); 
  $worktool = new Worktool(); 
  $document = new Document(); 
  $vacation = new Vacation(); 
  $statement = new Statement(); 
  $trip = new Trip(); 
  $message = new Message(); 

?> 