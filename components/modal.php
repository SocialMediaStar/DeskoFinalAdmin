<div class="modal fade" id="modal-employee-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-user-plus"></i> Lisa uus töötaja
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="employeeAdd">
            <input type="hidden" name="employeeAdd" value="1">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-6">
                     <div class="form-label-group">
                        <input type="text" id="inputFname" class="form-control" name="fname" placeholder="Eesnimi" required="" autofocus="">
                        <label for="inputFname">Eesnimi</label>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="form-label-group">
                        <input type="text" id="inputLname" class="form-control" name="lname" placeholder="Perenimi" required="" autofocus="">
                        <label for="inputLname">Perenimi</label>
                     </div>
                  </div>
                  <div class="col-lg-12">
                     <div class="form-label-group">
                        <input type="text" id="inputCode" class="form-control" name="code" placeholder="Isikukood" required="" autofocus="">
                        <label for="inputCode">Isikukood</label>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="form-label-group">
                        <input type="text" id="inputEmail" class="form-control" name="email" placeholder="E-post" autofocus="">
                        <label for="inputEmail">E-post</label>
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="form-label-group">
                        <input type="text" id="inputPhone" class="form-control" name="phone" placeholder="Telefon" autofocus="">
                        <label for="inputPhone">Telefon</label>
                     </div>
                  </div>
                  <div class="col-lg-12">
                     <textarea class="form-control" name="info" placeholder="Lisainfo" rows="5"></textarea>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-department-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-plus"></i> Lisa uus osakond
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="departmentAdd">
            <input type="hidden" name="departmentAdd" value="1">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="form-group">
                        <input type="text" id="inputFname" class="form-control" name="name" placeholder="Osakonna nimi" required="" autofocus="">
                     </div>
                  </div>
                  <div class="col-lg-12 mt-2">
                     <div class="form-group">
                        <select class="form-control" name="lead" id="leadList">
                           <option value="0">Vali osakonna juht</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" id="modal-department-edit" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-plus"></i> Lisa uus osakond
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="departmentEdit">
            <input type="hidden" name="departmentEdit" value="1">
            <input type="hidden" name="id" value="">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="form-group">
                        <input type="text" id="inputFname" class="form-control" name="name" placeholder="Osakonna nimi" required="" autofocus="">
                     </div>
                  </div>
                  <div class="col-lg-12 mt-2">
                     <div class="form-group">
                        <select class="form-control" name="lead">
                           <option value="0">Vali osakonnajuht</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" id="modal-department-employees" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-users-class"></i> Osakonna töötajad
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12">
                     <form method="POST" action="javascript:void(0)" id="departmentEmployeeAdd">
                     <label>Lisa töötaja osakonda</label>
                     <input type="hidden" name="id" value="">
                     <input type="hidden" name="departmentEmployeeAdd" value="1">
                     <div class="input-group mb-3">
                        <select class="custom-select" name="employee" id="inputGroupSelect02">
                           <option selected value="0">Vali töötaja</option>
                        </select>
                        <div class="input-group-append">
                           <button class="btn btn-primary" type="submit">Lisa töötaja</button>
                        </div>
                     </div>
                     </form>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-12 tableArea">
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Sulge</button>
            </div>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-shift-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-plus"></i> Lisa uus töögraafik
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="shiftAdd">
            <input type="hidden" name="shiftAdd" value="1">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="form-group">
                        <label>Vali osakond</label>
                        <select class="form-control" name="departmentList" id="departmentList">
                           <option value="0">Kõik osakonnad</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-shift-legend-add" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Lisa uus legend
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddLegend">
            <input type="hidden" name="AddLegend" value="1">
            <div class="modal-body">  
                <div class="row">  
                    <div class="col-lg-12">
                        <div class="form-group mb-3">
                            <label class="form-label" for="labelName">Nimi</label>
                            <input type="text" id="labelName" name="name" class="form-control">
                        </div>
                    </div>
                     <div class="col-lg-4">
                        <div class="form-group mb-3">
                           <label>Töötamise algus</label>
                           <input type="time" class="form-control" name="startTime">
                        </div>
                     </div>
                     <div class="col-lg-4">
                        <div class="form-group mb-3">
                           <label>Töötamise lõpp</label>
                           <input type="time" class="form-control" name="endTime">
                        </div>
                     </div>
                     <div class="col-lg-4">
                        <div class="form-group mb-3">
                           <label>Töötunnid</label>
                           <input type="number" class="form-control" name="workhours">
                        </div>
                     </div>
                    <div class="col-lg-12">
                        <div class="form-group mb-3">
                            <label class="form-label" for="labelName">Kirjeldus</label>
                            <textarea class="form-control" name="desc" placeholder="Siia saab lisainfot legendi kohta kirjutada"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <label>Vali värvus</label>
                        <div class="form-group mb-3">
                            <label class="badge badge-primary">
                                <input type="radio" name="badge" id="option1" value="primary" autocomplete="off">
                            </label>    
                            <label class="badge badge-success">
                                <input type="radio" name="badge" id="option2" value="success" autocomplete="off">
                            </label>    
                            <label class="badge badge-danger">
                                <input type="radio" name="badge" id="option3" value="danger" autocomplete="off">
                            </label>    
                            <label class="badge badge-warning">
                                <input type="radio" name="badge" id="option4" value="warning" autocomplete="off">
                            </label>    
                            <label class="badge badge-info">
                                <input type="radio" name="badge" id="option5" value="info" autocomplete="off">
                            </label>    
                            <label class="badge badge-dark">
                                <input type="radio" name="badge" id="option6" value="dark" autocomplete="off">
                            </label>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
    </div>
</div>        
<div class="modal fade" id="modal-shift-legend-edit" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Muuda legendi
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="EditLegend">
            <input type="hidden" name="EditLegend" value="1">
            <input type="hidden" name="legend_id" value="">
            <div class="modal-body">  
                <div class="row">  
                    <div class="col-lg-12">
                        <div class="form-group mb-3">
                            <label class="form-label" for="labelName">Nimi</label>
                            <input type="text" id="labelName" name="name" class="form-control">
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group mb-3">
                            <label class="form-label" for="labelName">Kirjeldus</label>
                            <textarea class="form-control" name="desc" placeholder="Siia saab lisainfot legendi kohta kirjutada"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <label>Vali värvus</label>
                        <div class="form-group mb-3">
                            <label class="badge badge-primary">
                                <input type="radio" name="badge" id="option1" value="primary" autocomplete="off">
                            </label>    
                            <label class="badge badge-success">
                                <input type="radio" name="badge" id="option2" value="success" autocomplete="off">
                            </label>    
                            <label class="badge badge-danger">
                                <input type="radio" name="badge" id="option3" value="danger" autocomplete="off">
                            </label>    
                            <label class="badge badge-warning">
                                <input type="radio" name="badge" id="option4" value="warning" autocomplete="off">
                            </label>    
                            <label class="badge badge-info">
                                <input type="radio" name="badge" id="option5" value="info" autocomplete="off">
                            </label>    
                            <label class="badge badge-dark">
                                <input type="radio" name="badge" id="option6" value="dark" autocomplete="off">
                            </label>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
    </div>
</div>        
<div class="modal fade" id="modal-shift-detail-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <strong class="workerName"></strong> lisamine graafikusse päevale <strong class="dateName"></strong>
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="shiftDetailAdd">
            <input type="hidden" name="shiftDetailAdd" value="1">
            <input type="hidden" name="worker_id" value="">
            <input type="hidden" name="date" value="">
            <input type="hidden" name="dateFull" value="">
            <input type="hidden" name="shift_id" value="">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="form-group">
                        <select class="form-control" name="legend_id" id="legendList">
                           <option value="0">Töötamise tüüp</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" id="modal-shift-detail-view" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" id="shiftDetailView"></div>
   </div>
</div>

<div class="modal fade" id="modal-profile-personal-edit" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Muuda isikuandmeid
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="EditProfileData">
            <input type="hidden" name="EditProfileData" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
                <div class="row">  
                  <div class="col-lg-12">
                     <div class="form-group mb-3">
                           <label class="form-label" for="labelName">Eesnimi</label>
                           <input type="text" id="labelName" name="fname" class="form-control">
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Perenimi</label>
                        <input type="text" id="labelName" name="lname" class="form-control">
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Isikukood</label>
                        <input type="text" id="labelName" name="code" class="form-control">
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Telefon</label>
                        <input type="text" id="labelName" name="phone" class="form-control">
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">E-mail</label>
                        <input type="text" id="labelName" name="email" class="form-control">
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Elukoht</label>
                        <input type="text" id="labelName" name="address" class="form-control">
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Haridus</label>
                        <select class="form-control" name="education">
                           <option value="0">Vali haridus</option>
                           <option value="1">Põhiharidus</option>
                           <option value="2">Keskharidus</option>
                           <option value="3">Kutseharidus</option>
                           <option value="4">Kõrgharidus</option>
                        </select>
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Keel</label>
                        <select class="form-control" name="language">
                           <option value="0">Vali keel</option>
                           <option value="1">Eesti keel</option>
                           <option value="2">Vene keel</option>
                           <option value="3">Inglise keel</option>
                           <option value="4">Soome keel</option>
                        </select>
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Osakond</label>
                        <select class="form-control" name="department">
                           <option value="0">Vali osakond</option>
                           <option value="1">Köök</option>
                           <option value="2">Baar</option>
                           <option value="3">Puhastus</option>
                           <option value="4">Majandus</option>
                        </select>
                     </div>
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Pangakonto</label>
                        <input type="text" id="labelName" name="iban" class="form-control">
                     </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>

<div class="modal fade" id="modal-profile-school-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Lisa kool
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddProfileSchool">
            <input type="hidden" name="AddProfileSchool" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
                <div class="row">  
                  <div class="col-lg-12">
                     <div class="form-group mb-3">
                           <label class="form-label" for="labelName">Koolinimi</label>
                           <input type="text" id="labelName" name="name" class="form-control">
                     </div>
                  </div>
                  <div class="col-lg-12">
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Eriala</label>
                        <input type="text" id="labelName" name="speciality" class="form-control">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <label>Algus</label>
                     <input type="date" class="form-control" name="start">
                  </div>
                  <div class="col-lg-6">
                     <label>Lõpp</label>
                     <input type="date" class="form-control" name="end">
                  </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>
   
<div class="modal fade" id="modal-profile-kid-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Lisa laps
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddProfileKid">
            <input type="hidden" name="AddProfileKid" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
                <div class="row">  
                  <div class="col-lg-6">
                     <div class="form-group mb-3">
                           <label class="form-label" for="labelName">Eesnimi</label>
                           <input type="text" id="labelName" name="fname" class="form-control">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="form-group mb-3">
                           <label class="form-label" for="labelName">Perenimi</label>
                           <input type="text" id="labelName" name="lname" class="form-control">
                     </div>
                  </div>
                  <div class="col-lg-12">
                     <div class="form-group mb-3">
                        <label class="form-label" for="labelName">Isikukood</label>
                        <input type="text" id="labelName" name="code" class="form-control">
                     </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>

<div class="modal fade" id="modal-profile-tools-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Töövahend - Lisa uus
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddProfileTools">
            <input type="hidden" name="worktoolsUserAdd" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
                <div class="row">  
                  <div class="col-lg-12">
                     <div class="form-group mb-3">
                           <label class="form-label" for="labelName">Töövahend</label>
                           <select class="form-control" name="worktool_id"></select>
                     </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>

<div class="modal fade" id="modal-worktools-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-plus"></i> Lisa uus töövahend
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="worktoolsAdd">
            <input type="hidden" name="worktoolsAdd" value="1">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Töövahendi nimi</label>
                        <input type="text" id="inputFname" class="form-control" name="name" placeholder="Töövahendi nimi" required="" autofocus="">
                     </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Töövahendi kirjeldus</label>
                        <textarea class="form-control" name="info" placeholder="Lisainfo" rows="5"></textarea>
                     </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                     <div class="form-group">
                        <label>Kogus</label>
                        <input type="number" class="form-control" name="quantity" min="1" value="1">
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-worktools-edit" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-plus"></i> Muuda töövahendi andmeid
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="worktoolsEdit">
            <input type="hidden" name="worktoolsEdit" value="1">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Töövahendi nimi</label>
                        <input type="text" id="inputFname" class="form-control" name="name" placeholder="Töövahendi nimi" required="" autofocus="">
                     </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Töövahendi kirjeldus</label>
                        <textarea class="form-control" name="info" placeholder="Lisainfo" rows="5"></textarea>
                     </div>
                  </div>
                  <div class="col-lg-4 mb-3">
                     <div class="form-group">
                        <label>Kogus</label>
                        <input type="number" class="form-control" name="quantity" min="1" value="1">
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-worktools-used" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-eye"></i> Töövahendi kasutamine
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <div class="modal-body">
            <div class="row">
               <div class="col-lg-12 mb-3">
                  <table class="table table-bordered table-hover">
                     <thead>
                        <tr>
                           <th>Kasutaja</th>
                           <th>Kogus</th>
                           <th>Tegevus</th>
                        </tr>
                     </thead>
                     <tbody class="worktoolsUsedTable">
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
         </div>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-worktools-used-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-user-plus"></i> Lisa töövahend töötajale
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <div class="modal-body">
            <form method="POST" action="javascript:void(0)" id="worktoolsUserAdd">
            <input type="hidden" name="worktoolsUserAdd" value="1">
            <input type="hidden" name="worktool_id" value="">
            <div class="row">
               <div class="col-lg-12 mb-3">
                  <div class="input-group mb-3">
                     <select class="custom-select" id="inputGroupSelect02" name="employee_id"></select>
                     <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Lisa töötajale</button>
                     </div>
                  </div>
               </div>
            </div>
            </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
         </div>
      </div>
   </div>
</div>
<div class="modal fade" id="modal-worktools-log" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-history"></i> Töövahendi ajalugu
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <div class="modal-body">
            <div class="row">
               <div class="col-lg-12 mb-3">
                  <table class="table table-bordered table-hover">
                     <thead>
                        <tr>
                           <th>Töötaja</th>
                           <th>Tegevus</th>
                           <th>Kuupäev</th>
                           <th>Kes</th>
                        </tr>
                     </thead>
                     <tbody class="worktoolsLogTable">
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Sulge</button>
         </div>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-documents-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-plus"></i> Lisa uus dokument
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="documentsAdd">
            <input type="hidden" name="documentsAdd" value="1">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Dokumendi nimi</label>
                        <input type="text" id="inputFname" class="form-control" name="name" placeholder="Dokumendi nimi" required="" autofocus="">
                     </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Dokumendi kirjeldus</label>
                        <textarea class="form-control" name="info" placeholder="Lisainfo" rows="5"></textarea>
                     </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                           <label class="form-label" for="documents-fileinput">Dokument</label>
                           <input type="file" id="documents-fileinput" name="document" class="form-control-file">
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" id="modal-documents-edit" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-edit"></i> Muuda dokumenti
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <form method="POST" action="javascript:void(0)" id="documentsEdit">
            <input type="hidden" name="documentsEdit" value="1">
            <input type="hidden" name="document_id" value="">
            <div class="modal-body">
               <div class="row">
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Dokumendi nimi</label>
                        <input type="text" id="inputFname" class="form-control" name="name" placeholder="Dokumendi nimi" required="" autofocus="">
                     </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                        <label>Dokumendi kirjeldus</label>
                        <textarea class="form-control" name="info" placeholder="Lisainfo" rows="5"></textarea>
                     </div>
                  </div>
                  <div class="col-lg-12 mb-3">
                     <div class="form-group">
                           <label class="form-label" for="documents-fileinput">Dokument</label>
                           <input type="file" id="documents-fileinput" name="document" class="form-control-file">
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
               <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
         </form>
      </div>
   </div>
</div>
<div class="modal fade" id="modal-documents-used-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-user-plus"></i> Lisa dokument töötajale
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <div class="modal-body">
            <form method="POST" action="javascript:void(0)" id="documentsUserAdd">
            <input type="hidden" name="documentsUserAdd" value="1">
            <input type="hidden" name="document_id" value="">
            <div class="row">
               <div class="col-lg-12 mb-3">
                  <div class="input-group mb-3">
                     <select class="custom-select" id="inputGroupSelect02" name="employee_id"></select>
                     <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">Lisa töötajale</button>
                     </div>
                  </div>
               </div>
            </div>
            </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
         </div>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-documents-access" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">
               <i class="fal fa-eye"></i> Dokument on antud kasutada järgmistele töötajatele
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true"><i class="fal fa-times"></i></span>
            </button>
         </div>
         <div class="modal-body">
            <div class="row">
               <div class="col-lg-12 mb-3">
                  <input type="hidden" name="document_id" value="">
                  <table class="table table-bordered table-hover">
                     <thead>
                        <tr>
                           <th>Töötaja</th>
                           <th>Kuupäev</th>
                           <th>Juurdepääsu andja</th>
                           <th>Tegevus</th>
                        </tr>
                     </thead>
                     <tbody class="documentsAccessTable">
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
         </div>
      </div>
   </div>
</div>

<div class="modal fade" id="modal-profile-document-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Töövahend - Lisa uus
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddProfileDocuments">
            <input type="hidden" name="documentsUserAdd" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
                <div class="row">  
                  <div class="col-lg-12">
                     <div class="form-group mb-3">
                           <label class="form-label" for="labelName">Dokument</label>
                           <select class="form-control" name="document_id"></select>
                     </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>

<div class="modal fade" id="modal-profile-vacation-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Lisa puhkus
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddVacationForEmployee">
            <input type="hidden" name="AddVacationForEmployee" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>
<div class="modal fade" id="modal-statement-view" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Avalduse vaatamine
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <div class="modal-body">  
               
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Sulge</button>
            </div>
        </div>
   </div>
</div>
<div class="modal fade" id="modal-profile-trip-add" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered" role="document">
   <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">
                    Lisa lähetus
                </h4> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                </button>
            </div>
            <form method="POST" action="javascript:void(0)" id="AddTripForEmployee">
            <input type="hidden" name="AddTripForEmployee" value="1">
            <input type="hidden" name="employee_id" value="<?=$_GET["uid"];?>">
            <div class="modal-body">  
               <div class="row">
                  <div class="col-xl-12">
                     <div class="form-group">
                        <label>Lähetuse nimetus</label>
                        <input type="text" class="form-control" name="name" placeholder="Lähetuse nimetus">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="form-group">
                        <label>Algus</label>
                        <input type="date" class="form-control" name="start">
                     </div>
                  </div>
                  <div class="col-lg-6">
                     <div class="form-group">
                        <label>Lõpp</label>
                        <input type="date" class="form-control" name="end">
                     </div>
                  </div>
                  <div class="col-lg-12 mt-2">
                     <div class="form-group">
                        <textarea class="form-control" name="info" placeholder="Lisainfo" rows="5"></textarea>
                     </div>
                  </div>
               </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Loobu</button>
                <button type="submit" class="btn btn-primary">Salvesta</button>
            </div>
            </form>
        </div>
   </div>
</div>
<div class="modal fade js-modal-messenger modal-backdrop-transparent" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-right">
                <div class="modal-content h-100">
                    <div class="dropdown-header bg-trans-gradient d-flex align-items-center w-100">
                        <div class="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                            <span class="mr-2">
                                <span class="rounded-circle profile-image d-block" style="background-image:url('img/demo/avatars/avatar-d.png'); background-size: cover;"></span>
                            </span>
                            <div class="info-card-text">
                                <a href="javascript:void(0);" class="fs-lg text-truncate text-truncate-lg text-white" data-toggle="dropdown" aria-expanded="false">
                                    Tracey Chang
                                    <i class="fal fa-angle-down d-inline-block ml-1 text-white fs-md"></i>
                                </a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Send Email</a>
                                    <a class="dropdown-item" href="#">Create Appointment</a>
                                    <a class="dropdown-item" href="#">Block User</a>
                                </div>
                                <span class="text-truncate text-truncate-md opacity-80">IT Director</span>
                            </div>
                        </div>
                        <button type="button" class="close text-white position-absolute pos-top pos-right p-2 m-1 mr-2" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fal fa-times"></i></span>
                        </button>
                    </div>
                    <div class="modal-body p-0 h-100 d-flex">
                        <!-- BEGIN msgr-list -->
                        <div class="msgr-list d-flex flex-column bg-faded border-faded border-top-0 border-right-0 border-bottom-0 position-absolute pos-top pos-bottom">
                            <div>
                                <div class="height-4 width-3 h3 m-0 d-flex justify-content-center flex-column color-primary-500 pl-3 mt-2">
                                    <i class="fal fa-search"></i>
                                </div>
                                <input type="text" class="form-control bg-white" id="msgr_listfilter_input" placeholder="Filter contacts" aria-label="FriendSearch" data-listfilter="#js-msgr-listfilter">
                            </div>
                            <div class="flex-1 h-100 custom-scroll">
                                <div class="w-100">
                                    <ul id="js-msgr-listfilter" class="list-unstyled m-0">
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="tracey chang online">
                                                <div class="d-table-cell align-middle status status-success status-sm ">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-d.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        Tracey Chang
                                                        <small class="d-block font-italic text-success fs-xs">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="oliver kopyuv online">
                                                <div class="d-table-cell align-middle status status-success status-sm ">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-b.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        Oliver Kopyuv
                                                        <small class="d-block font-italic text-success fs-xs">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="dr john cook phd away">
                                                <div class="d-table-cell align-middle status status-warning status-sm ">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-e.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        Dr. John Cook PhD
                                                        <small class="d-block font-italic fs-xs">
                                                            Away
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney online">
                                                <div class="d-table-cell align-middle status status-success status-sm ">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-g.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        Ali Amdaney
                                                        <small class="d-block font-italic fs-xs text-success">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="sarah mcbrook online">
                                                <div class="d-table-cell align-middle status status-success status-sm">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-h.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        Sarah McBrook
                                                        <small class="d-block font-italic fs-xs text-success">
                                                            Online
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney offline">
                                                <div class="d-table-cell align-middle status status-sm">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-a.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        oliver.kopyuv@gotbootstrap.com
                                                        <small class="d-block font-italic fs-xs">
                                                            Offline
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney busy">
                                                <div class="d-table-cell align-middle status status-danger status-sm">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-j.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        oliver.kopyuv@gotbootstrap.com
                                                        <small class="d-block font-italic fs-xs text-danger">
                                                            Busy
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney offline">
                                                <div class="d-table-cell align-middle status status-sm">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-c.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        oliver.kopyuv@gotbootstrap.com
                                                        <small class="d-block font-italic fs-xs">
                                                            Offline
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-table w-100 px-2 py-2 text-dark hover-white" data-filter-tags="ali amdaney inactive">
                                                <div class="d-table-cell align-middle">
                                                    <span class="profile-image-md rounded-circle d-block" style="background-image:url('img/demo/avatars/avatar-m.png'); background-size: cover;"></span>
                                                </div>
                                                <div class="d-table-cell w-100 align-middle pl-2 pr-2">
                                                    <div class="text-truncate text-truncate-md">
                                                        +714651347790
                                                        <small class="d-block font-italic fs-xs opacity-50">
                                                            Missed Call
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="filter-message js-filter-message"></div>
                                </div>
                            </div>
                            <div>
                                <a class="fs-xl d-flex align-items-center p-3">
                                    <i class="fal fa-cogs"></i>
                                </a>
                            </div>
                        </div>
                        <!-- END msgr-list -->
                        <!-- BEGIN msgr -->
                        <div class="msgr d-flex h-100 flex-column bg-white">
                            <!-- BEGIN custom-scroll -->
                            <div class="custom-scroll flex-1 h-100">
                                <div id="chat_container" class="w-100 p-4">
                                    <!-- start .chat-segment -->
                                    <div class="chat-segment">
                                        <div class="time-stamp text-center mb-2 fw-400">
                                            Jun 19
                                        </div>
                                    </div>
                                    <!--  end .chat-segment -->
                                    <!-- start .chat-segment -->
                                    <div class="chat-segment chat-segment-sent">
                                        <div class="chat-message">
                                            <p>
                                                Hey Tracey, did you get my files?
                                            </p>
                                        </div>
                                        <div class="text-right fw-300 text-muted mt-1 fs-xs">
                                            3:00 pm
                                        </div>
                                    </div>
                                    <!--  end .chat-segment -->
                                    <!-- start .chat-segment -->
                                    <div class="chat-segment chat-segment-get">
                                        <div class="chat-message">
                                            <p>
                                                Hi
                                            </p>
                                            <p>
                                                Sorry going through a busy time in office. Yes I analyzed the solution.
                                            </p>
                                            <p>
                                                It will require some resource, which I could not manage.
                                            </p>
                                        </div>
                                        <div class="fw-300 text-muted mt-1 fs-xs">
                                            3:24 pm
                                        </div>
                                    </div>
                                    <!--  end .chat-segment -->
                                    <!-- start .chat-segment -->
                                    <div class="chat-segment chat-segment-sent chat-start">
                                        <div class="chat-message">
                                            <p>
                                                Okay
                                            </p>
                                        </div>
                                    </div>
                                    <!--  end .chat-segment -->
                                    <!-- start .chat-segment -->
                                    <div class="chat-segment chat-segment-sent chat-end">
                                        <div class="chat-message">
                                            <p>
                                                Sending you some dough today, you can allocate the resources to this project.
                                            </p>
                                        </div>
                                        <div class="text-right fw-300 text-muted mt-1 fs-xs">
                                            3:26 pm
                                        </div>
                                    </div>
                                    <div class="chat-segment chat-segment-get chat-start">
                                        <div class="chat-message">
                                            <p>
                                                Perfect. Thanks a lot!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="chat-segment chat-segment-get">
                                        <div class="chat-message">
                                            <p>
                                                I will have them ready by tonight.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="chat-segment chat-segment-get chat-end">
                                        <div class="chat-message">
                                            <p>
                                                Cheers
                                            </p>
                                        </div>
                                    </div>
                                    <div class="chat-segment">
                                        <div class="time-stamp text-center mb-2 fw-400">
                                            Jun 20
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <div class="border-faded border-right-0 border-bottom-0 border-left-0 flex-1 mr-3 ml-3 position-relative shadow-top">
                                    <div class="pt-3 pb-1 pr-0 pl-0 rounded-0" tabindex="-1">
                                        <div id="msgr_input" contenteditable="true" data-placeholder="Type your message here..." class="height-10 form-content-editable"></div>
                                    </div>
                                </div>
                                <div class="height-8 px-3 d-flex flex-row align-items-center flex-wrap flex-shrink-0">
                                    <a href="javascript:void(0);" class="btn btn-icon fs-xl width-1 mr-1" data-toggle="tooltip" data-original-title="More options" data-placement="top">
                                        <i class="fal fa-ellipsis-v-alt color-fusion-300"></i>
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-icon fs-xl mr-1" data-toggle="tooltip" data-original-title="Attach files" data-placement="top">
                                        <i class="fal fa-paperclip color-fusion-300"></i>
                                    </a>
                                    <a href="javascript:void(0);" class="btn btn-icon fs-xl mr-1" data-toggle="tooltip" data-original-title="Insert photo" data-placement="top">
                                        <i class="fal fa-camera color-fusion-300"></i>
                                    </a>
                                    <div class="ml-auto">
                                        <a href="javascript:void(0);" class="btn btn-info">Send</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
