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
                                <i class="subheader-icon fal fa-calendar-star"></i>  <span class='fw-300'>Töögraafikud</span>
                            </h1>
                            <div class="subheader-block">
                                <a href=""><i class="fal fa-question-circle"></i> Abi & tagasiside</a>
                            </div>
                        </div>
                        <form method="POST" action="javascript:void(0)" id="shiftAdd">
                        <input type="hidden" name="shiftAdd" value="1">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="d-flex mb-3">
                                    <div class="p-2">
                                        <select class="form-control" name="year">
                                    </select>
                                    </div>
                                    <div class="p-2">
                                        <select class="form-control" name="month">
                                        </select>       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="input-group mb-2">
                                    <select class="custom-select" name="departmentList" id="inputGroupSelect04" aria-label="Example select with button addon">
                                        <option selected>Kõik osakonnad</option>
                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit">Lisa graafik</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-header">
                                        <div class="d-flex mt-0">
                                            <div class="mr-auto">Töögraafikud</div>
                                        </div>
                                    </div>
                                    <div class="card-body p-0 mb-0" id="shiftTable">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <h1><strong>Töögraafik</strong></h1>
                                <h4> <span id="shiftDetailDepartment"></span> - <span id="shiftDetailMonth"></span> <span id="shiftDetailYear"></span></h4>
                                <div class="d-flex mb-1">
                                    <div class="f-w-500 mr-1">Legend:</div>
                                    <div class="legends"></div>
                                    <div class="ml-auto">
                                        <button class="btn btn-xs btn-link" type="button" data-toggle="modal" data-target="#modal-shift-legend-add"><i class="fal fa-plus"></i> Lisa legend</button>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-lg-12" id="attendance-data">
                                            </div>
                                        </div>
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
        <script src="assets/js/shift.js"></script>
        <script>
            var days_full = {'1': 'Esmaspäev','2': 'Teisipäev','3': 'Kolmapäev','4': 'Neljapäev','5': 'Reede','6': 'Laupäev','7': 'Pühapäev'};
            var days_short = {'1': 'E','2': 'T','3': 'K','4': 'N','5': 'R','6': 'L','7': 'P'};
            var months_short = {'01': 'Jaan','02': 'Veeb','03': 'Märts','04': 'Apr','05': 'Mai','06': 'Juuni','07': 'Juuli','08': 'Aug','09': 'Sept','10': 'Okt','11': 'Nov','12': 'Dets'};
            var months_full = {'01': 'Jaanuar','02': 'Veebruar','03': 'Märts','04': 'Aprill','05': 'Mai','06': 'Juuni','07': 'Juuli','08': 'August','09': 'September','10': 'Oktoober','11': 'November','12': 'Detsember'};
            var year = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
            addYearMonth(year,months_full);
            shiftGetDepartmentList();
            shiftTable();
            loadLegends();
        </script>
    </body>
</html>
