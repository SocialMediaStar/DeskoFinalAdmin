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
                                <i class="subheader-icon fal fa-comment-dots"></i>  <span class='fw-300'>Kirjavahetus</span>
                            </h1>
                            <div class="subheader-block">
                                <a href=""><i class="fal fa-question-circle"></i> Abi & tagasiside</a>
                            </div>
                        </div>
                        <div class="d-flex flex-grow-1 p-0 border-faded shadow-4" style="max-height:800px;">
                            <div id="js-chat-contact" class="flex-wrap position-relative slide-on-mobile slide-on-mobile-left border-faded border-left-0 border-top-0 border-bottom-0">
                                <div class="d-flex flex-column bg-faded position-absolute pos-top pos-bottom w-100">
                                    <div class="px-3 py-4">
                                        <input type="text" class="form-control bg-white" name="searchMessages" placeholder="Otsi nime järgi">
                                    </div>
                                    <div class="flex-1 h-100 custom-scrollbar">
                                        <div class="w-100">
                                            <div class="nav-title m-0 px-3 text-muted">Sinu kirjavahetus</div>
                                            <ul class="list-unstyled m-0 messageHistory">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-backdrop" data-action="toggle" data-class="slide-on-mobile-left-show" data-target="#js-chat-contact"></div>
                            <div class="d-flex flex-column flex-grow-1 bg-white">
                                <div class="flex-grow-0 employeeData">
                                </div>
                                <div class="flex-wrap align-items-center flex-grow-1 position-relative bg-gray-50">
                                    <div class="position-absolute pos-top pos-bottom w-100 overflow-hidden">
                                        <div class="d-flex h-100 flex-column">
                                            <div class="msgr-list d-flex flex-column bg-faded border-faded border-top-0 border-right-0 border-bottom-0 position-absolute pos-top pos-bottom">
                                                <div>
                                                    <div class="height-4 width-3 h3 m-0 d-flex justify-content-center flex-column color-primary-500 pl-3 mt-2">
                                                        <i class="fal fa-search"></i>
                                                    </div>
                                                    <input type="text" class="form-control bg-white" name="searchEmployee" id="msgr_listfilter_input" placeholder="Otsi töötajaid" aria-label="FriendSearch" data-listfilter="#js-msgr-listfilter">
                                                </div>
                                                <div class="flex-1 h-100 custom-scroll employeeSearch">
                                                </div>
                                            </div>
                                            <div class="msgr d-flex h-100 flex-column bg-white messageArea">
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
        <script src="assets/js/dependency/moment/moment.js"></script>
        <script src="assets/js/miscellaneous/fullcalendar/fullcalendar.bundle.js"></script>
        <script src="assets/js/message.js"></script>
        
        <script>
            $(document).ready(function(){
                initApp.pushSettings("layout-composed-mobile", false);
                messageHistory();
                searchEmployee();
            });            
        </script>
    </body>
</html>
