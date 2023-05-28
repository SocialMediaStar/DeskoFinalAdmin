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
                                <i class="subheader-icon fal fa-users"></i>  <span class='fw-300'>Töötajad</span>
                            </h1>
                            <div class="subheader-block">
                                <a href=""><i class="fal fa-question-circle"></i> Abi & tagasiside</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12 mb-2">
                                <button class="btn btn-primary" data-toggle="modal" data-target="#modal-employee-add"><i class="fal fa-user-plus"></i> Lisa töötaja</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="border-faded bg-faded p-3 mb-g d-flex">
                                    <input type="text" id="js-filter-contacts" name="filter-contacts" class="form-control shadow-inset-2 form-control-lg" placeholder="Filter contacts">
                                    <div class="btn-group btn-group-lg btn-group-toggle hidden-lg-down ml-3" data-toggle="buttons">
                                        <label class="btn btn-default">
                                            <input type="radio" name="contactview" id="grid"  value="grid"><i class="fas fa-table"></i>
                                        </label>
                                        <label class="btn btn-default active">
                                            <input type="radio" name="contactview" id="table" checked="" value="table"><i class="fas fa-th-list"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="js-contacts">
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
        <script src="assets/js/employee.js"></script>
        <script>
            employeeLoad();
            $(document).ready(function()
            {
                
                $('input[type=radio][name=contactview]').change(function()
                {
                    if (this.value == 'grid')
                    {
                        $('#js-contacts .card').removeClassPrefix('mb-').addClass('mb-g');
                        $('#js-contacts .col-xl-12').removeClassPrefix('col-xl-').addClass('col-xl-4');
                        $('#js-contacts .js-expand-btn').addClass('d-none');
                        $('#js-contacts .card-body + .card-body').addClass('show');

                    }
                    else if (this.value == 'table')
                    {
                        $('#js-contacts .card').removeClassPrefix('mb-').addClass('mb-1');
                        $('#js-contacts .col-xl-4').removeClassPrefix('col-xl-').addClass('col-xl-12');
                        $('#js-contacts .js-expand-btn').removeClass('d-none');
                        $('#js-contacts .card-body + .card-body').removeClass('show');
                    }

                });

                //initialize filter
                initApp.listFilter($('#js-contacts'), $('#js-filter-contacts'));
            });

        </script>

    </body>
</html>
