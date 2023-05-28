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
                                <i class="subheader-icon fal fa-home"></i>  <span class='fw-300'>Tere,</span> <?=$user->fname;?> <?=$user->lname;?>
                            </h1>
                            <div class="subheader-block">
                                <a href=""><i class="fal fa-question-circle"></i> Abi & tagasiside</a>
                            </div>
                        </div>
                        <div class="alert alert-primary">
                            <div class="d-flex flex-start w-100">
                                <div class="mr-2 hidden-md-down">
                                    <span class="icon-stack icon-stack-lg">
                                        <i class="base base-6 icon-stack-3x opacity-100 color-primary-500"></i>
                                        <i class="base base-10 icon-stack-2x opacity-100 color-primary-300 fa-flip-vertical"></i>
                                        <i class="ni ni-blog-read icon-stack-1x opacity-100 color-white"></i>
                                    </span>
                                </div>
                                <div class="d-flex flex-fill">
                                    <div class="flex-fill">
                                        <span class="h5">Pro Tip!</span>
                                        <p>
                                            If you don't know where to start, this is a good page to start your application. It comes with the basics to get you started. Contains a good inline documentation and waypoints to guide you with your project. Use this area of the page as an attention grabber. Users are likely to respond or pay attention when you involve a color icon along with your information (as displayed here on the left).
                                        </p>
                                        <p class="m-0">
                                            Follow a slogal with a useful link or call to action <a href="#" target="_blank">Call to action >></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Your main content goes below here: -->
                        <div class="row">
                            <div class="col-xl-6">
                                <div id="panel-1" class="panel">
                                    <div class="panel-hdr">
                                        <h2>
                                            Panel <span class="fw-300"><i>Title</i></span>
                                        </h2>
                                        <div class="panel-toolbar">
                                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                        </div>
                                    </div>
                                    <div class="panel-container show">
                                        <div class="panel-content">
                                            <div class="panel-tag">
                                                It stash and was even had of collection the latest story still every or times derive come way. Travelling business ill. Helplessly starting didn't should he her bad will so through audiences to the supported congress, if card with was way allows century quarter the control village for of payload.
                                            </div>
                                            <p>Offers it children. Been far good the or so eye. And first the her to white unionized that the absolutely supplies hall to named accuse times had or the to in the monitor a by carefully and than train excessive turned been a rationale to be the little. Agency still a the supported or people out doing place what does one studies of that value designer the you line their transformed extent, you to for not must reflection chequered with got rush than because he with thoughts until sisters term much and bed they of duty organization. And ago. As.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6">
                                <div id="panel-1" class="panel">
                                    <div class="panel-hdr">
                                        <h2>
                                            Panel <span class="fw-300"><i>Title</i></span>
                                        </h2>
                                        <div class="panel-toolbar">
                                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                        </div>
                                    </div>
                                    <div class="panel-container show">
                                        <div class="panel-content">
                                            <div class="panel-tag">
                                                It stash and was even had of collection the latest story still every or times derive come way. Travelling business ill. Helplessly starting didn't should he her bad will so through audiences to the supported congress, if card with was way allows century quarter the control village for of payload.
                                            </div>
                                            <p>Offers it children. Been far good the or so eye. And first the her to white unionized that the absolutely supplies hall to named accuse times had or the to in the monitor a by carefully and than train excessive turned been a rationale to be the little. Agency still a the supported or people out doing place what does one studies of that value designer the you line their transformed extent, you to for not must reflection chequered with got rush than because he with thoughts until sisters term much and bed they of duty organization. And ago. As.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <div id="panel-1" class="panel">
                                    <div class="panel-hdr">
                                        <h2>
                                            Panel <span class="fw-300"><i>Title</i></span>
                                        </h2>
                                        <div class="panel-toolbar">
                                            <button class="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse"></button>
                                            <button class="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen"></button>
                                            <button class="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close"></button>
                                        </div>
                                    </div>
                                    <div class="panel-container show">
                                        <div class="panel-content">
                                            <div class="panel-tag">
                                                It stash and was even had of collection the latest story still every or times derive come way. Travelling business ill. Helplessly starting didn't should he her bad will so through audiences to the supported congress, if card with was way allows century quarter the control village for of payload.
                                            </div>
                                            <p>Offers it children. Been far good the or so eye. And first the her to white unionized that the absolutely supplies hall to named accuse times had or the to in the monitor a by carefully and than train excessive turned been a rationale to be the little. Agency still a the supported or people out doing place what does one studies of that value designer the you line their transformed extent, you to for not must reflection chequered with got rush than because he with thoughts until sisters term much and bed they of duty organization. And ago. As.</p>
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
        <script src="assets/js/vendors.bundle.js"></script>
        <script src="assets/js/app.bundle.js"></script>
    </body>
</html>
