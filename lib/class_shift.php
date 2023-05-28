<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
  if (!defined("_VALID_PHP"))
      die('Direct access to this location is not allowed.');

  class Shift
  {
      /** 
       * Shift::__construct()
       * 
       * @return
       */
      function __construct() {
      }
	  /**
	   * Shift::GetDepartmentList()
	   * 
	   */
	  public function GetDepartmentList()
	  {
		  global $db,$user;

		  $sql = "SELECT id,name FROM department WHERE company_id = '".$user->company_id."' ORDER BY name ASC";
		  $row = $db->fetch_all($sql);

		echo json_encode($row,true);

  	 }

	 /***
	  * Shift::Add()
	  *
	  */
	 public function Add()
	 {
		 global $db,$user;

		 $checkShift = $db->first("SELECT * FROM shift WHERE company_id = '" . $user->company_id . "' AND YEAR(cycle) = '".$_POST["year"]."' AND MONTH(cycle) = '".$_POST["month"]."' AND department_id = '".$_POST["departmentList"]."'");
		 if ($checkShift) {
			 $res["success"] = "0";
			 $res["message"] = "Selle kuu graafik on juba lisatud sellele osakonnale!";
		 } else {
			 $data = array(
				 "company_id" => $user->company_id,
				 "cycle" => $_POST["year"].'-'.$_POST["month"].'-01',
				 "status" => 0,
				 "department_id" => $_POST["departmentList"],
				 "created_by" => $user->uid,
				 "created" => date("Y-m-d H:i:s")
			  );
			 $shift_id = $db->insert("shift",$data);
 
			 $workers = $db->fetch_all("SELECT * FROM user WHERE company_id = '" . $user->company_id . "' AND department_id = '".$_POST["departmentList"]."' ORDER BY fname ASC");
 
			 $res["success"] = "1";
		 }		
		 echo json_encode($res,true);
		}

		/**
	   * Shift::Load()
	   * 
	   * @param mixed $username
	   * @return
	   */
	  public function Load() {
		global $db,$user;

		$row = $db->fetch_all("
			SELECT 
			a.id,
			YEAR(a.cycle) AS year,
			DATE_FORMAT(a.cycle, '%M') AS month,
			IF(a.status = 0, 'Ootel', 'Valmis') AS status,
			IF(b.name IS NULL, 'Kõik ametikohad', b.name) AS name
			FROM shift AS a
			LEFT JOIN department AS b ON a.department_id = b.id
			WHERE a.company_id = '" . $user->company_id . "' 
			AND YEAR(a.cycle) = '".$_POST["year"]."' 
			AND MONTH(a.cycle) = '".$_POST["month"]."' 
			ORDER BY a.cycle DESC
		");
		$res["shift"] = $row;
		$res["success"] = "1";
		echo json_encode($res,true);
	  }

/**
 * Admin::DetailTable()
 * 
 * @param mixed $username
 * @return
 */
public function DetailTable() {
    global $db, $user;

    $row = $db->first("
        SELECT * 
        FROM shift 
        WHERE company_id = '{$user->company_id}' 
        AND id = '{$_POST['shift_id']}'
    ");
	if ($row["department_id"] == 0) {
		$res["department"] = "Kõik ametikohad";
	} else {
		$department = $db->first("SELECT name FROM department WHERE id = '".$row["department_id"]."'");
		$res["department"] = $department["name"];
	}

	$res["year"] = date("Y",strtotime($row["cycle"]));
	$res["month"] = date("M",strtotime($row["cycle"]));
	

    $month = date('n', strtotime($row['cycle']));
    $year = date('Y', strtotime($row['cycle']));
    $days_in_month = cal_days_in_month(CAL_GREGORIAN, $month, $year);

    $res['days'] = array_map(function ($day) use ($month, $year) {
        $date = new DateTime(date('Y-m-d', strtotime("{$year}-{$month}-{$day}")));
		setlocale(LC_TIME, 'et_EE');
        return [
            'day' => $day,
            'dayName' => strftime("%a", $date->getTimestamp())
        ];
    }, range(1, $days_in_month));

    $department_condition = ($row['department_id'] == '0') ? '' : "AND department_id = '{$row['department_id']}'";
    $workers = $db->fetch_all("
        SELECT id, fname, lname 
        FROM user 
        WHERE company_id = '{$user->company_id}' 
        {$department_condition}
        ORDER BY fname ASC
    ");

    foreach ($workers as $worker) {
        $res['workers'][$worker['id']] = [
            'id' => $worker['id'],
            'fname' => $worker['fname'],
            'lname' => $worker['lname'],
            'details' => array_fill_keys(array_column($res['days'], 'day'), [
                'shift_detail_id' => '0',
                'legend' => '',
                'cycle' => '',
                'worker_id' => $worker['id'],
                'shift_id' => $row['id']
            ])
        ];

        $details = $db->fetch_all("
            SELECT 
                rd.id AS shift_detail_id,
                rd.legend_id,
                rl.badge AS legend,
                rl.startTime,
                rl.endTime,
                rl.workhours,
                DATE_FORMAT(rd.cycle,'%d %w') AS cycle,
                DATE_FORMAT(rd.cycle,'%d') AS dayOfMonth
            FROM shift_details AS rd
            LEFT JOIN shift_legend AS rl ON rd.legend_id = rl.id
            WHERE rd.shift_id = '{$row['id']}' 
            AND rd.user_id = '{$worker['id']}'
        ");
        $workhours = 0;
        foreach ($details as $detail) {
            $res['workers'][$worker['id']]['details'][intval($detail['dayOfMonth'])] = [
                'shift_detail_id' => $detail['shift_detail_id'],
                'legend' => $detail['legend'],
                'cycle' => $detail['cycle'],
                'worker_id' => $worker['id'],
                'shift_id' => $row['id']
            ];
            $workhours += $detail['workhours'];
        }
        $res['workers'][$worker['id']]['workhours'] = $workhours;
    }
    $res['success'] = '1';
    echo json_encode($res, true);
}

		/**
	   * Shift::AddLegend()
	   * 
	   * @param mixed $username
	   * @return
	   */
	  public function AddLegend() {
		global $db,$user;


			$data = array(
				"user_id" => $user->uid,
				"company_id" => $user->company_id,
				"name" => $_POST["name"],
				"description" => $_POST["desc"],
				"startTime" => date($_POST["startTime"].":00"),
				"endTime" => date($_POST["endTime"].":00"),
				"workhours" => $_POST["workhours"],
				"badge" => $_POST["badge"]
			);
			$db->insert("shift_legend",$data);
			$res["success"] = "1";
			$res["message"] = "Uus legend lisatud!";
		
		echo json_encode($res,true);
	  }

	/**
	   * Shift::loadLegends()
	   * 
	   * @param mixed $username
	   * @return
	   */
	  public function loadLegends() {
		global $db,$user;

		$res = $db->fetch_all("SELECT CONCAT(' <span id=\'', id, '\' class=\'cursor-pointer badge badge-', badge, '\'>' , name, '</span> ') AS legend FROM shift_legend WHERE company_id = '" . $user->company_id . "'");
		echo json_encode($res,true);
	  }	  


	  	/**
	   * Admin::loadLegendData()
	   * 
	   * @param mixed $username
	   * @return
	   */
	  public function loadLegendData() {
		global $db,$user;
		
		$legend = $db->first("SELECT * FROM shift_legend WHERE id = '".$_POST["legend_id"]."'");
		
		$res["legend"] = $legend;
		$res["success"] = "1";

		echo json_encode($res,true);
	  }
	/**
	   * Admin::EditLegend()
	   * 
	   * @param mixed $username
	   * @return
	   */
	  public function EditLegend() {
		global $db,$user;


			$data = array(
				"name" => $_POST["name"],
				"description" => $_POST["desc"],
				"badge" => $_POST["badge"]
			);
			$db->update("shift_legend",$data,"id = '".$_POST["legend_id"]."'");
			$res["success"] = "1";
			$res["message"] = "Legend muudetud!";
		
		echo json_encode($res,true);
	  }

	  /**
	   * Admin:: legendList()
	   */
	  public function legendList() {
		global $db,$user;

		$legends = $db->fetch_all("
			SELECT id, name, description, badge
			FROM shift_legend
			WHERE company_id = '" . $user->company_id . "'
		");
		$worker = $db->first("SELECT CONCAT(fname,' ',lname) AS worker_name FROM user WHERE id = '".$_POST["worker_id"]."'");
		$res["worker"] = $worker["worker_name"];
		$res["legends"] = $legends;
		echo json_encode($res,true);
	  }
	  /**
	   * Admin:: DetailAdd()
	   */
	  public function DetailAdd() {
		global $db,$user;


			$check = $db->first("SELECT * FROM shift_details WHERE shift_id = '".$_POST["shift_id"]."' AND user_id = '".$_POST["worker_id"]."' AND cycle = '".$_POST["dateFull"]."'");
			if (!$check) {
				$data = array(
					"shift_id" => $_POST["shift_id"],
					"company_id" => $user->company_id,
					"user_id" => $_POST["worker_id"],
					"legend_id" => $_POST["legend_id"],
					"cycle" => $_POST["dateFull"],
					"created" => date("Y-m-d H:i:s"),
					"created_by" => $user->uid
				);
				$db->insert("shift_details",$data);
				$res["success"] = "1";
				$res["message"] = "Töögraafikusse lisatud!";
			} else {
				$res["success"] = "0";
				$res["message"] = "Selleks päevaks on juba lisatud antud töötaja graafikusse!";
			}
			echo json_encode($res,true);
	  }

	  /**
	   * Admin:: DetailView()
	   */
	  public function DetailView() {
		global $db,$user;
		
		$row = $db->first("
				SELECT 
				a.id AS shift_detail_id, a.cycle, a.user_id, a.shift_id, a.legend_id, a.created, a.created_by,
				b.name AS legend, b.description, b.startTime, b.endTime, b.workhours, b.badge,
				CONCAT(c.fname,' ',c.lname) AS worker
				FROM shift_details AS a
				LEFT JOIN shift_legend AS b ON a.legend_id = b.id
				LEFT JOIN user AS c ON a.user_id = c.id
				WHERE a.shift_id = '".$_POST["shift_id"]."' 
				AND a.user_id = '".$_POST["worker_id"]."' 
				AND a.cycle = '".$_POST["date"]."'
		");
		$res["success"] = "1";
		$res["detail"] = $row;
		echo json_encode($res,true);
	  }
	  /**
	   * Admin:: deleteShiftDetailView()
	   */
	  public function deleteShiftDetailView() {
		global $db,$user;

		$db->delete("shift_details","id = '".$_POST["shift_detail_id"]."'");
		$res["success"] = "1";
		$res["message"] = "Töögraafikust kustutatud!";
		echo json_encode($res,true);
	  }
		/**
		 * Admin:: StatusChange()
		 */
		public function StatusChange() {
			global $db,$user;
			
			$row = $db->first("SELECT * FROM shift WHERE id = '".$_POST["shift_id"]."'");

			if ($row["status"] == 0) {
				$check = $db->first("SELECT * FROM shift_details WHERE shift_id = '".$_POST["shift_id"]."'");
				if (!$check) {
					$res["success"] = "0";
					$res["message"] = "Töögraafikusse pole lisatud ühtegi töötajat!";
					echo json_encode($res,true);
					exit;
				} else {
					$data = array(
						"status" => "1"
					);
					$db->update("shift",$data,"id = '".$_POST["shift_id"]."'");
					$res["success"] = "1";
					$res["message"] = "Töögraafiku staatus muudetud!";		
				}
			} else {
				$data = array(
					"status" => "0"
				);
				$db->update("shift",$data,"id = '".$_POST["shift_id"]."'");
				$res["success"] = "1";
				$res["message"] = "Töögraafiku staatus muudetud!";
			}


			echo json_encode($res,true);
		}

	}	
?>