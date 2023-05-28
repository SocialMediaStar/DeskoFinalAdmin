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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.min.css" />
        <link rel="stylesheet" href="https://haubek.github.io/dist/css/component-chosen.min.css" />
        <link rel="stylesheet" media="screen, print" href="assets/css/miscellaneous/fullcalendar/fullcalendar.bundle.css">
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
                                <i class="subheader-icon fal fa-tree-palm"></i>  <span class='fw-300'>Puhkused</span>
                            </h1>
                            <div class="subheader-block">
                                <a href=""><i class="fal fa-question-circle"></i> Abi & tagasiside</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12 mt-4">
                                <div class="d-flex mb-3 w-100 filterVacation">
                                    <div class="p-2">
                                        <div class="form-group">
                                            <label class="form-label" for="department">Osakond</label>
                                            <select class="form-control" id="department" name="department_id">
                                                <option selected value="0">Kõik osakonnad</option>
                                            </select>
                                        </div>
                                    </div>
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
                                <div class="card">
                                    <div class="card-body" id="vacationList">
                                    </div>
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js"></script>
        <script src="assets/js/dependency/moment/moment.js"></script>
        <script src="assets/js/miscellaneous/fullcalendar/fullcalendar.bundle.js"></script>
        <script src="assets/js/vacation.js"></script>
        <script>
            $(document).ready(function(){
                loadFilterData();
                vacationLoad();
            });            
        </script>
    </body>
</html>