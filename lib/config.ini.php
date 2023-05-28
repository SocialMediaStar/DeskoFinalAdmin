<?php 
/** Configuration ***/
	if (!defined("_VALID_PHP"))
		die('Direct access to this location is not allowed.');
		  
	/**  
	Database Constants - these constants refer to
	the database configuration settings.
	**/

		if ( $_SERVER['HTTP_HOST'] == '127.0.0.1') {
			define('DB_SERVER', 'localhost'); 
			define('DB_USER', 'root');  
			define('DB_PASS', '');  
			define('DB_DATABASE', 'desko'); 	
		} else {
			define('DB_SERVER', 'localhost'); 
			define('DB_USER', '');  
			define('DB_PASS', '');  
			define('DB_DATABASE', ''); 	
		}

		define('SITE_URL', 'http://www.admin.desko.ee/'); 
		define('SITE_DIR', ''); 

	/** 
	Show MySql Errors.
	Not recomended for live site. true/false
	**/
		$DEBUG = true;
?>
