<script src="/js/vendors.bundle.js"></script>
<script src="/js/app.bundle.js"></script>
<script type="text/javascript">
    /* Activate smart panels */
    $('#js-page-content').smartPanel();

</script>
<script src="/js/dependency/moment/moment.js"></script>
<script src="/js/notifications/sweetalert2/sweetalert2.bundle.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/sankey.js"></script>
<script src="https://code.highcharts.com/modules/organization.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="/js/formplugins/bootstrap-colorpicker/bootstrap-colorpicker.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"
        integrity="sha512-RNLkV3d+aLtfcpEyFG8jRbnWHxUqVZozacROI4J2F1sTaDqo1dPQYs01OMi1t1w9Y2FdbSCDSQ2ZVdAC8bzgAg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://unpkg.com/just-handlebars-helpers@1.0.19/dist/h.min.js"></script>
<script src="/js/main.js"></script>

<script src="/js/datagrid/datatables/datatables.bundle.js"></script>
        <script src="/js/formplugins/bootstrap-colorpicker/bootstrap-colorpicker.js"></script>
        <script src="/js/formplugins/select2/select2.bundle.js"></script>
<script src="/templates/templates.js"></script>
<script type="text/javascript">
    // Register just-handlebars-helpers with handlebars
    H.registerHelpers(Handlebars);


</script>

<script src="/js/user.js"></script>
<script src="/js/vacation.js"></script>

<?php if ($user->is_admin) { echo '<script src="/js/admin.js"></script>'; } ?>