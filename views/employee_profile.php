<!DOCTYPE html>
<html lang="en">
    <head>
        <?php 
			$component = new Component('head',location."components/");
			$component->print(); 
		?>
        <title>
            Page Title - Category - SmartAdmin v4.5.1
        </title>
        <meta name="description" content="Page Title">
    </head>
    <body class="mod-bg-1 mod-hide-info-card">
        <?php 
			$component = new Component('mainScript',location."components/");
			$component->print(); 
		?>
        <div class="page-wrapper">
            <div class="page-inner">
                <?php 
                    $component = new Component('sidebar',location."components/");
                    $component->print(); 
                ?>
                <div class="page-content-wrapper">
                    <?php 
                        $component = new Component('header',location."components/");
                        $component->print(); 
                    ?>

                    <main id="js-page-content" role="main" class="page-content">
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class="subheader-icon fal fa-user"></i>  <span class='fw-300'><span class="fname"></span> <span class="lname"></span></span>
                            </h1>
                            <div class="subheader-block">
                                <a href=""><i class="fal fa-question-circle"></i> Abi & tagasiside</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-xl-3">
                                <div class="card mb-g rounded-top">
                                    <div class="row no-gutters row-grid">
                                        
                                        <div class="col-12">
                                            <div class="list-group" id="myList" role="tablist">
                                                <a class="list-group-item list-group-item-action" id="personal-data-list" data-toggle="list" href="#personal-data" role="tab" aria-controls="personal-data">Kontaktandmed</a>
                                                <a class="list-group-item list-group-item-action" id="vacation-list" data-toggle="list" href="#vacation-data" role="tab" aria-controls="vacation-data">Puhkused</a>
                                                <a class="list-group-item list-group-item-action" id="work-tools-list" data-toggle="list" href="#work-tools-data" role="tab" aria-controls="work-tools-data">Töövahendid</a>
                                                <a class="list-group-item list-group-item-action" id="applications-list" data-toggle="list" href="#applications-data" role="tab" aria-controls="applications-data">Avaldused</a>
                                                <a class="list-group-item list-group-item-action" id="business-trips-list" data-toggle="list" href="#business-trips-data" role="tab" aria-controls="business-trips-data">Lähetusaruanded</a>
                                                <!--- <a class="list-group-item list-group-item-action" id="expense-reports-list" data-toggle="list" href="#expense-reports-data" role="tab" aria-controls="expense-reports-data">Kuluaruanded</a> --->
                                                <!--- <a class="list-group-item list-group-item-action" id="trainings-list" data-toggle="list" href="#trainings-data" role="tab" aria-controls="trainings-data">Koolitused</a>--->
                                                <a class="list-group-item list-group-item-action" id="message-list" data-toggle="list" href="#message-data" role="tab" aria-controls="message-data">Kirjavahetus</a> 
                                                <a class="list-group-item list-group-item-action" id="documents-list" data-toggle="list" href="#documents-data" role="tab" aria-controls="documents-data">Dokumendid</a>
                                                <!--- <a class="list-group-item list-group-item-action" id="notes-list" data-toggle="list" href="#notes-data" role="tab" aria-controls="notes-data">Märkmed</a>--->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-9 col-xl-9">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade" id="personal-data" role="tabpanel" aria-labelledby="personal-data">
                                        <div class="row">
                                            <div class="col-lg-7 col-xl-7">
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-id-card fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Töötaja andmed
                                                                </strong>
                                                                <br>
                                                                <small class="text-muted">Töötaja isiklikud andmed</small>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" data-toggle="modal" data-target="#modal-profile-personal-edit"><i class="fas fa-user-edit"></i> Muuda</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0">
                                                        <table class="table" id="profileDataTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Eesnimi</th>
                                                                    <th class="fname"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Perenimi</th>
                                                                    <th class="lname"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Sugu</th>
                                                                    <th class="gender"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Sünnikuupäev</th>
                                                                    <th class="birthday"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Isikukood</th>
                                                                    <th class="code"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Telefon</th>
                                                                    <th class="phone"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>E-mail</th>
                                                                    <th class="email"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Elukoht</th>
                                                                    <th class="address"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Haridus</th>
                                                                    <th class="education"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Keel</th>
                                                                    <th class="language"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Osakond</th>
                                                                    <th class="department"></th>
                                                                </tr>
                                                                <tr>
                                                                    <th>Konto number</th>
                                                                    <th class="iban"></th>
                                                                </tr>
                                                            </thead>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-5 col-xl-5">
                                                <div class="card mb-2">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-graduation-cap fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Õppimine
                                                                </strong>
                                                                <br>
                                                                <small class="text-muted">Töötaja õppimised</small>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" type="button" data-toggle="modal" data-target="#modal-profile-school-add"><i class="fas fa-plus"></i> Lisa kool</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <table class="table schoolTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Õppeasutus</th>
                                                                    <th>Eriala</th>
                                                                    <th>Algus</th>
                                                                    <th>Lõpp</th>
                                                                    <th>Tegevus</th>
                                                                </tr>                    
                                                            </thead>
                                                            <tbody>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-child fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Lapsed
                                                                </strong>
                                                                <br>
                                                                <small class="text-muted">Töötaja lapsed</small>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" type="button" data-toggle="modal" data-target="#modal-profile-kid-add"><i class="fas fa-plus"></i> Lisa laps</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <table class="table kidTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Eesnimi</th>
                                                                    <th>Perenimi</th>
                                                                    <th>Sünnikuupäev</th>
                                                                </tr>                    
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Eesnimi</td>
                                                                    <td>Perenimi</td>
                                                                    <td>Sünnikuupäev</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Eesnimi</td>
                                                                    <td>Perenimi</td>
                                                                    <td>Sünnikuupäev</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Eesnimi</td>
                                                                    <td>Perenimi</td>
                                                                    <td>Sünnikuupäev</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="vacation-data" role="tabpanel" aria-labelledby="vacation-data">
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row no-gutters row-grid">
                                                            <div class="col-4">
                                                                <div class="text-center py-3">
                                                                    <h5 class="mb-0 fw-700">
                                                                        <span class="mainUsed"></span>/<span class="mainTotal"></span> päeva
                                                                        <small class="text-muted mb-0">Põhipuhkus</small>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="text-center py-3">
                                                                    <h5 class="mb-0 fw-700">
                                                                        <span class="kidsUsed"></span>/<span class="kidsTotal"></span> päeva
                                                                        <small class="text-muted mb-0">Lapsepuhkus</small>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <div class="text-center py-3">
                                                                    <h5 class="mb-0 fw-700">
                                                                        <span class="schoolUsed"></span>/<span class="schoolTotal"></span> päeva
                                                                        <small class="text-muted mb-0">Õppepuhkus</small>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row pendingVacation">
                                            <div class="col-xl-12 mt-2">
                                                <div class="alert border-faded border bg-white text-secondary fade show" role="alert">
                                                    <div class="d-flex align-items-center">
                                                        <div class="alert-icon">
                                                            <span class="icon-stack icon-stack-md">
                                                                <i class="base-7 icon-stack-3x color-info-600"></i>
                                                                <i class="fal fa-info icon-stack-1x text-white"></i>
                                                            </span>
                                                        </div>
                                                        <div class="flex-1">
                                                            <span class="h5 color-info-600">Sul on mõned puhkuse avaldused kinnitada</span>
                                                            <br>
                                                            <span class="pendingVacation"></span> kinnitamata avaldust
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12 mt-2">
                                                <div class="d-flex mb-3 w-100 filterVacation">
                                                    <div class="p-2">
                                                        <div class="form-group">
                                                            <label class="form-label" for="type">Tüüp</label>
                                                            <select class="form-control" id="type" name="type_id">
                                                                <option selected value="0">Kõik tüübid</option>
                                                            </select>
                                                        </div>                                            
                                                    </div>
                                                    <div class="p-2">
                                                        <div class="form-group">
                                                            <label class="form-label" for="status">Staatus</label>
                                                            <select class="form-control" id="status" name="status_id">
                                                                <option selected value="-1">Kõik staatused</option>
                                                                <option value="0">Ootel</option>
                                                                <option value="1">Aksepteeritud</option>
                                                                <option value="2">Tagasilükatud</option>
                                                            </select>
                                                        </div>                                            
                                                    </div>
                                                    <div class="p-2">
                                                        <div class="form-group">
                                                            <label class="form-label" for="example-select">Algus</label>
                                                            <input type="date" class="form-control" id="example-select" name="start">
                                                        </div>
                                                    </div>
                                                    <div class="p-2">
                                                        <div class="form-group">
                                                            <label class="form-label" for="example-select">Lõpp</label>
                                                            <input type="date" class="form-control" id="example-select" name="end">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-xl-12">
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-island-tropical fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Puhkused
                                                                </strong>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" data-toggle="modal" data-target="#modal-profile-vacation-add"><i class="fas fa-plus"></i> Lisa puhkus</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0" id="vacationTable">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="work-tools-data" role="tabpanel" aria-labelledby="work-tools-list">
                                        <div class="row">
                                            <div class="col-lg-12 col-xl-12">
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-tools fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Töövahendid
                                                                </strong>
                                                                <br>
                                                                <small class="text-muted">Töötajale antud töövahendid</small>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" data-toggle="modal" data-target="#modal-profile-tools-add"><i class="fas fa-plus"></i> Lisa</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0">
                                                        <table class="table" id="workToolsTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Töövahend</th>
                                                                    <th>Kirjeldus</th>
                                                                    <th>Kogus</th>
                                                                    <th>Tegevus</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="applications-data" role="tabpanel" aria-labelledby="applications-list">
                                        <div class="row">
                                            <div class="col-xl-12 mt-2">
                                                <div class="d-flex mb-3 w-100 filterStatement">
                                                    <div class="p-2">
                                                        <div class="form-group">
                                                            <label class="form-label" for="status">Staatus</label>
                                                            <select class="form-control" id="status" name="status_id">
                                                                <option selected value="-1">Kõik staatused</option>
                                                                <option value="0">Ootel</option>
                                                                <option value="1">Aksepteeritud</option>
                                                                <option value="2">Tagasilükatud</option>
                                                            </select>
                                                        </div>                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-xl-12">
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-paper-plane fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Avaldused
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0" id="statementTable">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="business-trips-data" role="tabpanel" aria-labelledby="business-trips-list">
                                        <div class="row">
                                            <div class="col-xl-12 mt-2">
                                                <div class="d-flex mb-3 w-100 filterTrip">
                                                    <div class="p-2">
                                                        <div class="form-group">
                                                            <label class="form-label" for="status">Staatus</label>
                                                            <select class="form-control" id="status" name="status_id">
                                                                <option selected value="-1">Kõik staatused</option>
                                                                <option value="0">Ootel</option>
                                                                <option value="1">Aksepteeritud</option>
                                                                <option value="2">Tagasilükatud</option>
                                                            </select>
                                                        </div>                                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-xl-12">
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-shipping-fast fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Lähetused
                                                                </strong>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" data-toggle="modal" data-target="#modal-profile-trip-add"><i class="fas fa-plus"></i> Lisa</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0" id="tripTable">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="expense-reports-data" role="tabpanel" aria-labelledby="expense-reports-list"></div>
                                    <div class="tab-pane fade" id="message-data" role="tabpanel" aria-labelledby="message-list">
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="card">
                                                    <div class="card-body p-0 m-0">
                                                        <div class="panel-content p-0">
                                                            <div class="d-flex flex-column">
                                                                <div class="bg-subtlelight-fade custom-scroll" style="height: 244px">
                                                                    <div class="h-100">
                                                                        <div class="d-flex flex-row px-3 pt-3 pb-2">
                                                                            <span class="status status-danger">
                                                                                <span class="profile-image rounded-circle d-inline-block" style="background-image:url('assets/img/default.png')"></span>
                                                                            </span>
                                                                            <!-- profile photo end -->
                                                                            <div class="ml-3">
                                                                                <a href="javascript:void(0);" title="Lisa Hatchensen" class="d-block fw-700 text-dark">Lisa Hatchensen</a>
                                                                                Hey did you meet the new board of director? He's a bit of a geek if you ask me...anyway here is the report you requested. I am off to launch with Lisa and Andrew, you wanna join?
                                                                                <!-- file download -->
                                                                                <div class="d-flex mt-3 flex-wrap">
                                                                                    <div class="btn-group mr-1 mt-1" role="group" aria-label="Button group with nested dropdown ">
                                                                                        <button type="button" class="btn btn-default btn-xs btn-block px-1 py-1 fw-500" data-action="toggle">
                                                                                            <span class="d-block text-truncate text-truncate-sm">
                                                                                                <i class="fal fa-file-pdf mr-1 color-danger-700"></i> Report-2013-demographic-repo
                                                                                            </span>
                                                                                        </button>
                                                                                        <div class="btn-group" role="group">
                                                                                            <button id="btnGroupDrop1" type="button" class="btn btn-default btn-xs dropdown-toggle px-2 js-waves-off" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                                                                            <div class="dropdown-menu p-0 fs-xs" aria-labelledby="btnGroupDrop1">
                                                                                                <a class="dropdown-item px-3 py-2" href="#">Forward</a>
                                                                                                <a class="dropdown-item px-3 py-2" href="#">Open</a>
                                                                                                <a class="dropdown-item px-3 py-2" href="#">Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="btn-group mr-1 mt-1" role="group" aria-label="Button group with nested dropdown ">
                                                                                        <button type="button" class="btn btn-default btn-xs btn-block px-1 py-1 fw-500" data-action="toggle">
                                                                                            <span class="d-block text-truncate text-truncate-sm">
                                                                                                <i class="fal fa-file-pdf mr-1 color-danger-700"></i> Bloodworks Patient 34124BA
                                                                                            </span>
                                                                                        </button>
                                                                                        <div class="btn-group" role="group">
                                                                                            <button id="btnGroupDrop2" type="button" class="btn btn-default btn-xs dropdown-toggle px-2 js-waves-off" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                                                                            <div class="dropdown-menu p-0 fs-xs" aria-labelledby="btnGroupDrop2">
                                                                                                <a class="dropdown-item px-3 py-2" href="#">Forward</a>
                                                                                                <a class="dropdown-item px-3 py-2" href="#">Open</a>
                                                                                                <a class="dropdown-item px-3 py-2" href="#">Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <!-- file download end -->
                                                                            </div>
                                                                        </div>
                                                                        <!-- message end -->
                                                                        <!-- message reply -->
                                                                        <div class="d-flex flex-row pt-3 pb-2 float-right mr-4 ">
                                                                            <!-- profile photo end -->
                                                                            <div class="text-end text-right  bg-success-300 p-2 rounded color-white">
                                                                                Thanks for the file! You guys go ahead, I have to call some of my patients.
                                                                            </div>
                                                                        </div>
                                                                        <!-- message reply end -->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="panel-content border-faded border-left-0 border-right-0 border-bottom-0 bg-faded">
                                                            <textarea rows="3" class="form-control rounded-top border-bottom-left-radius-0 border-bottom-right-radius-0 border" placeholder="write a reply..."></textarea>
                                                            <div class="d-flex align-items-center py-2 px-2 bg-white border border-top-0 rounded-bottom text-right float-right">
                                                                <button class="btn btn-primary btn-sm ml-auto ml-sm-0">
                                                                    Saada
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="documents-data" role="tabpanel" aria-labelledby="documents-list">
                                        <div class="row">
                                            <div class="col-lg-12 col-xl-12">
                                                <div class="card mb-g">
                                                    <div class="card-body">
                                                        <div href="javascript:void(0);" class="d-flex flex-row align-items-center">
                                                            <div class="mr-2">
                                                                <i class="fal fa-tools fa-2x"></i>
                                                            </div>
                                                            <div>
                                                                <strong>
                                                                    Dokumendid
                                                                </strong>
                                                                <br>
                                                                <small class="text-muted">Töötajale jagatud dokumendid</small>
                                                            </div>
                                                            <div class="ml-auto">
                                                                <button class="btn btn-sm btn-text" data-toggle="modal" data-target="#modal-profile-document-add"><i class="fas fa-plus"></i> Lisa</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body p-0">
                                                        <table class="table" id="documentsTable">
                                                            <thead>
                                                                <tr>
                                                                    <th>Nimi</th>
                                                                    <th>Kirjeldus</th>
                                                                    <th>Kuupäev</th>
                                                                    <th>Juurdepääsu andja</th>
                                                                    <th>Tegevus</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="trainings-data" role="tabpanel" aria-labelledby="trainings-list"></div>
                                    <div class="tab-pane fade" id="notes-data" role="tabpanel" aria-labelledby="notes-list"></div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div class="page-content-overlay" data-action="toggle" data-class="mobile-nav-on"></div>
                        <?php 
                            $component = new Component('footer',location."components/");
                            $component->print(); 
                        ?>
                        <?php 
                            $component = new Component('colors',location."components/");
                            $component->print(); 
                        ?>
                   </div>
            </div>
        </div>
        <?php 
            $component = new Component('modal',location."components/");
            $component->print(); 
        ?>

        <script src="assets/js/vendors.bundle.js"></script>
        <script src="assets/js/app.bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js" integrity="sha512-RNLkV3d+aLtfcpEyFG8jRbnWHxUqVZozacROI4J2F1sTaDqo1dPQYs01OMi1t1w9Y2FdbSCDSQ2ZVdAC8bzgAg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://unpkg.com/just-handlebars-helpers@1.0.19/dist/h.min.js"></script>
        <script src="templates/templates.js"></script>
        <script type="text/javascript">H.registerHelpers(Handlebars);</script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <script src="assets/js/employee.js"></script>
        <script>
            const urlParams = new URLSearchParams(window.location.search);
            const employee_id = urlParams.get('uid');
            employeeDataLoad(employee_id);
            $('#myList #personal-data-list').tab('show');
        </script>
    </body>
</html>
