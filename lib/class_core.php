<?php
/** Core Class **/
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');
  
  class Core {
	  private $sTable = "settings";
	  
      /**
       * Core::__construct()
       * 
       * @return
       */
      public function __construct() {
          $this->getSettings();
      }
      
      /**
       * Core::getSettings()
       *
       * @return
       */
      private function getSettings()
      {
          global $db;

		  $this->site_url = SITE_URL;	
		  $this->site_dir = SITE_DIR;	
		  $this->transport = 1.4;
		  }
  }
?>