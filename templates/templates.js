(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['admin_vacation_pending_data'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"avatar") : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "http://127.0.0.1/desko/img/default.png";
},"5":function(container,depth0,helpers,partials,data) {
    return "                                                <span class=\"badge badge-primary badge-pill\">Põhipuhkus</span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"type_id") : stack1),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":58},"end":{"line":9,"column":82}}}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":13,"column":48}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "                                                <span class=\"badge badge-info badge-pill\">Lapsepuhkus</span>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"type_id") : stack1),"3",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":58},"end":{"line":11,"column":82}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":48},"end":{"line":13,"column":48}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "                                                <span class=\"badge badge-success badge-pill\">Õppepuhkus</span>\r\n                                                ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <table class=\"table table-striped\">\r\n                                            <thead class=\"bg-primary text-light\">\r\n                                                <th>Nimi</th>\r\n                                                <th>Periood</th>\r\n                                                <th class=\"text-center\">Päevi kokku</th>\r\n                                                <th class=\"text-center\">Puhkuse tüüp</th>\r\n                                            </thead>\r\n                                            <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"others") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":48},"end":{"line":98,"column":57}}})) != null ? stack1 : "")
    + "                                            </tbody>\r\n                                        </table>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                <tr>\r\n                                                    <td><a href=\"\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"fname") : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"lname") : depth0), depth0))
    + "</a></td>\r\n                                                    <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"start") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"end") : depth0), depth0))
    + "</td>\r\n                                                    <td width=\"10%\" class=\"text-center\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"days") : depth0), depth0))
    + "</td>\r\n                                                    <td width=\"15%\" class=\"text-center\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias3,(depth0 != null ? lookupProperty(depth0,"type_id") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":89,"column":62},"end":{"line":89,"column":83}}}),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":89,"column":56},"end":{"line":95,"column":63}}})) != null ? stack1 : "")
    + "                                                    </td>\r\n                                                </tr>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "                                                        <span class=\"badge badge-primary badge-pill\">Põhipuhkus</span>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type_id") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":91,"column":66},"end":{"line":91,"column":87}}}),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data,"loc":{"start":{"line":91,"column":56},"end":{"line":95,"column":56}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return "                                                        <span class=\"badge badge-info badge-pill\">Lapsepuhkus</span>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type_id") : depth0),"3",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":93,"column":66},"end":{"line":93,"column":87}}}),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":56},"end":{"line":95,"column":56}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "                                                        <span class=\"badge badge-success badge-pill\">Õppepuhkus</span>\r\n                                                        ";
},"23":function(container,depth0,helpers,partials,data) {
    return "                                        <p>Kedagi pole sel päeval puhkusel!</p>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"card border shadow-5\">\r\n                                    <div class=\"card-header\">\r\n                                    <div class=\"d-flex\">\r\n                                            <div class=\"p-2\"><img src=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"avatar") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":4,"column":71},"end":{"line":4,"column":164}}})) != null ? stack1 : "")
    + "\" class=\"profile-image rounded-circle\" alt=\"Dr. Codex Lantern\"></div>\r\n                                            <div class=\"p-2\">\r\n                                                <a href=\"\" class=\"fs-xl d-block\">"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"fname") : stack1), depth0))
    + " "
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"lname") : stack1), depth0))
    + "</a>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"type_id") : stack1),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":7,"column":54},"end":{"line":7,"column":78}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":48},"end":{"line":13,"column":55}}})) != null ? stack1 : "")
    + "                                                (Kokku saada "
    + alias3(((helper = (helper = lookupProperty(helpers,"avaible") || (depth0 != null ? lookupProperty(depth0,"avaible") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"avaible","hash":{},"data":data,"loc":{"start":{"line":14,"column":61},"end":{"line":14,"column":72}}}) : helper)))
    + " päeva)\r\n                                            </div>\r\n                                            <div class=\"ml-auto p-2\">\r\n                                                <a href=\"javascript:void(0);\" onClick=\"rejectVacation("
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"vacation_id") : stack1), depth0))
    + ","
    + alias3(((helper = (helper = lookupProperty(helpers,"user_id") || (depth0 != null ? lookupProperty(depth0,"user_id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"user_id","hash":{},"data":data,"loc":{"start":{"line":17,"column":126},"end":{"line":17,"column":137}}}) : helper)))
    + ")\" class=\"btn btn-danger btn-md btn-icon rounded-circle ml-2\">\r\n                                                    <i class=\"fal fa-times\"></i>\r\n                                                </a>\r\n                                                <a href=\"javascript:void(0);\" onClick=\"acceptVacation("
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"vacation_id") : stack1), depth0))
    + ","
    + alias3(((helper = (helper = lookupProperty(helpers,"user_id") || (depth0 != null ? lookupProperty(depth0,"user_id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"user_id","hash":{},"data":data,"loc":{"start":{"line":20,"column":126},"end":{"line":20,"column":137}}}) : helper)))
    + ")\" class=\"btn btn-success btn-md btn-icon rounded-circle ml-2\">\r\n                                                    <i class=\"fal fa-check\"></i>\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card-body\">\r\n                                        <div class=\"d-flex\">\r\n                                            <div class=\"p-2\">\r\n                                                <div class=\"card\" style=\"width:150px;\">\r\n                                                    <div class=\"card-header text-center\">\r\n                                                        <h4 class=\"mb-0\"><strong>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"start") : depth0)) != null ? lookupProperty(stack1,"month") : stack1), depth0))
    + "</strong></h4>\r\n                                                    </div>\r\n                                                    <div class=\"card-body text-center\">\r\n                                                        <h1 class=\"fw-900\"><strong>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"start") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0))
    + "</strong></h1>\r\n                                                        "
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"start") : depth0)) != null ? lookupProperty(stack1,"day") : stack1), depth0))
    + "\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"p-2 align-self-center\">\r\n                                                <i class=\"fal fa-3x  fa-arrow-right\"></i>\r\n                                            </div>\r\n                                            <div class=\"p-2\">\r\n                                                <div class=\"card\" style=\"width:150px;\">\r\n                                                    <div class=\"card-header text-center\">\r\n                                                        <h4 class=\"mb-0\"><strong>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"end") : depth0)) != null ? lookupProperty(stack1,"month") : stack1), depth0))
    + "</strong></h4>\r\n                                                    </div>\r\n                                                    <div class=\"card-body text-center\">\r\n                                                        <h1 class=\"fw-900\"><strong>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"end") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0))
    + "</strong></h1>\r\n                                                        "
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"end") : depth0)) != null ? lookupProperty(stack1,"day") : stack1), depth0))
    + "\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"p-2\">\r\n                                                <h4>Lisainfo</h4>\r\n                                                <p><i>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"info") : stack1), depth0))
    + "</i></p>\r\n                                            </div>\r\n                                            <div class=\"ml-auto p-2\">\r\n                                                <ul class=\"list-unstyled\">\r\n                                                    <li class=\"text-muted\">\r\n                                                        Esitamise kuupäev: <strong>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"created") : stack1), depth0))
    + "</strong>\r\n                                                    </li>\r\n                                                    <li class=\"text-muted\">\r\n                                                        Kokku saada: <strong>"
    + alias3(((helper = (helper = lookupProperty(helpers,"avaible") || (depth0 != null ? lookupProperty(depth0,"avaible") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"avaible","hash":{},"data":data,"loc":{"start":{"line":63,"column":77},"end":{"line":63,"column":88}}}) : helper)))
    + " päeva</strong>\r\n                                                    </li>\r\n                                                    <li class=\"text-muted\">\r\n                                                        Päevade arv: <strong>"
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? lookupProperty(stack1,"days") : stack1), depth0))
    + "</strong>\r\n                                                    </li>\r\n                                                </ul>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"card-footer\">\r\n                                        <h4><strong>Kes veel puhkavad sellel ajal:</strong></h4>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"others") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":74,"column":40},"end":{"line":103,"column":47}}})) != null ? stack1 : "")
    + "                                    </div>\r\n                                </div>\r\n";
},"useData":true});
templates['admin_vacation_pending_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"list-group-item cursor-pointer\" onClick=\"loadVacationPendingData("
    + alias4(((helper = (helper = lookupProperty(helpers,"vacation_id") || (depth0 != null ? lookupProperty(depth0,"vacation_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vacation_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":80},"end":{"line":3,"column":95}}}) : helper)))
    + ")\">\r\n        <div class=\"d-flex\">\r\n            <div class=\"p-2\"><img src=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"avatar") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":39},"end":{"line":5,"column":116}}})) != null ? stack1 : "")
    + "\" class=\"profile-image rounded-circle\" alt=\"Dr. Codex Lantern\"></div>\r\n            <div class=\"p-2\">\r\n                <a href=\"javascript:void(0)\" class=\"fs-xl\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"fname") || (depth0 != null ? lookupProperty(depth0,"fname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fname","hash":{},"data":data,"loc":{"start":{"line":7,"column":59},"end":{"line":7,"column":68}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lname") || (depth0 != null ? lookupProperty(depth0,"lname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lname","hash":{},"data":data,"loc":{"start":{"line":7,"column":69},"end":{"line":7,"column":78}}}) : helper)))
    + "</a>\r\n                <small class=\"d-block text-danger fs-sm\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"start") || (depth0 != null ? lookupProperty(depth0,"start") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data,"loc":{"start":{"line":8,"column":57},"end":{"line":8,"column":66}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"end") || (depth0 != null ? lookupProperty(depth0,"end") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end","hash":{},"data":data,"loc":{"start":{"line":8,"column":69},"end":{"line":8,"column":76}}}) : helper)))
    + "</small>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type_id") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":9,"column":22},"end":{"line":9,"column":38}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n            <div class=\"ml-auto p-2\">\r\n                <a href=\"javascript:void(0);\" onClick=\"rejectVacation("
    + alias4(((helper = (helper = lookupProperty(helpers,"vacation_id") || (depth0 != null ? lookupProperty(depth0,"vacation_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vacation_id","hash":{},"data":data,"loc":{"start":{"line":18,"column":70},"end":{"line":18,"column":85}}}) : helper)))
    + ","
    + alias4(((helper = (helper = lookupProperty(helpers,"user_id") || (depth0 != null ? lookupProperty(depth0,"user_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_id","hash":{},"data":data,"loc":{"start":{"line":18,"column":86},"end":{"line":18,"column":97}}}) : helper)))
    + ")\" class=\"btn btn-danger btn-md btn-icon rounded-circle ml-2\">\r\n                    <i class=\"fal fa-times\"></i>\r\n                </a>\r\n                <a href=\"javascript:void(0);\" onClick=\"acceptVacation("
    + alias4(((helper = (helper = lookupProperty(helpers,"vacation_id") || (depth0 != null ? lookupProperty(depth0,"vacation_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vacation_id","hash":{},"data":data,"loc":{"start":{"line":21,"column":70},"end":{"line":21,"column":85}}}) : helper)))
    + ","
    + alias4(((helper = (helper = lookupProperty(helpers,"user_id") || (depth0 != null ? lookupProperty(depth0,"user_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_id","hash":{},"data":data,"loc":{"start":{"line":21,"column":86},"end":{"line":21,"column":97}}}) : helper)))
    + ")\" class=\"btn btn-success btn-md btn-icon rounded-circle ml-2\">\r\n                    <i class=\"fal fa-check\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"avatar") || (depth0 != null ? lookupProperty(depth0,"avatar") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"avatar","hash":{},"data":data,"loc":{"start":{"line":5,"column":53},"end":{"line":5,"column":63}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    return "http://127.0.0.1/desko/img/default.png";
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-primary badge-pill\">Põhipuhkus</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type_id") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":26},"end":{"line":11,"column":42}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":15,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-info badge-pill\">Lapsepuhkus</span>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type_id") : depth0),"3",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":26},"end":{"line":13,"column":42}}}),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":15,"column":16}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success badge-pill\">Õppepuhkus</span>\r\n                ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<ul class=\"list-group shadow-5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pending") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + " </ul>\r\n";
},"useData":true});
templates['admin_vacation_search_area'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                            <option value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</option>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"col-xl-2\">\r\n                                <div class=\"form-label-group\">\r\n                                    <input type=\"text\" name=\"name\" id=\"inputFname\" class=\"form-control\" placeholder=\"Töötaja nimi\" required=\"\" autofocus=\"\">\r\n                                    <label for=\"inputFname\">Töötaja nimi</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-2\">\r\n                                <div class=\"form-label-group\">\r\n                                    <select class=\"form-control\" id=\"inputType\" name=\"type\">\r\n                                        <option selected value=\"-1\">Kõik</option>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"types") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":41},"end":{"line":13,"column":50}}})) != null ? stack1 : "")
    + "                                    </select>\r\n                                    <label for=\"inputType\">Puhkuse tüüp</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-2\">\r\n                                <div class=\"form-label-group\">\r\n                                    <select class=\"form-control\" id=\"inputStatus\" name=\"status\">\r\n                                        <option selected value=\"-1\">Kõik</option>\r\n                                        <option value=\"0\">Ootel</option>\r\n                                        <option value=\"1\">Kinnitatud</option>\r\n                                        <option value=\"2\">Tagasilükatud</option>\r\n                                        <option value=\"3\">Tühistatud</option>\r\n                                    </select>\r\n                                    <label for=\"inputStatus\">Puhkuse staatus</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-2\">\r\n                                <div class=\"form-label-group\">\r\n                                    <input type=\"date\" name=\"start\" id=\"inputStart\" class=\"form-control\" placeholder=\"Puhkuse algus\" required=\"\" autofocus=\"\">\r\n                                    <label for=\"inputStart\">Puhkuse algus</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-2\">\r\n                                <div class=\"form-label-group\">\r\n                                    <input type=\"date\" name=\"end\" id=\"inputEnd\" class=\"form-control\" placeholder=\"Puhkuse lõpp\" required=\"\" autofocus=\"\">\r\n                                    <label for=\"inputEnd\">Puhkuse lõpp</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-xl-2\">\r\n                                <button class=\"btn btn-lg btn-block btn-outline-primary\" onClick=\"allVacationsTable();\"><i class=\"fal fa-search\"></i> Otsi</button>\r\n                            </div>\r\n";
},"useData":true});
templates['departmentEmployees'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Nimi</th>\r\n            <th>E-post</th>\r\n            <th>Telefon</th>\r\n            <th>Tegevused</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":21,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <tr>\r\n                <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"email") : depth0), depth0))
    + "</td>\r\n                <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"phone") : depth0), depth0))
    + "</td>\r\n                <td>\r\n                    <a href=\"javascript:void(0)\" onClick=\"departmentEmployeeDelete("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-trash-alt\"></i></a>\r\n                </td>\r\n            </tr>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-xl-12 text-center\">\r\n    <h4>Pole ühtegi töötajad osakonnas.</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['departmentList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Osakonna nimi</th>\r\n            <th>Osakonna juht</th>\r\n            <th>Töötajad</th>\r\n            <th>Tegevus</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":28,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr id=\"department_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"lead_name") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":20,"column":23}}})) != null ? stack1 : "")
    + "                </td>\r\n            <td><a href=\"javascript:void(0)\" onClick=\"departmentEmployees("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"employees") || (depth0 != null ? lookupProperty(depth0,"employees") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"employees","hash":{},"data":data,"loc":{"start":{"line":22,"column":88},"end":{"line":22,"column":101}}}) : helper)))
    + "</a></td>\r\n            <td>\r\n                <a href=\"javascript:void(0)\" onClick=\"departmentEditData("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-edit\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"departmentDelete("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-trash-alt\"></i></a>\r\n            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"javascript:void(0)\" onClick=\"departmentLeadView("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"lead_name") : depth0), depth0))
    + "</a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-dark\">Pole määratud</span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-xl-12 text-center\">\r\n    <h4>Pole ühtegi osakonda seatud.</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":35,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['documentsList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Nimi</th>\r\n            <th>Info</th>\r\n            <th>Ligipääs</th>\r\n            <th>Tegevus</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr id=\"documents_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"info") : depth0), depth0))
    + "</td>\r\n            <td><a href=\"javascript:void(0)\" onClick=\"documentsAccess("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"access") : depth0), depth0))
    + "</a>\r\n            </td>\r\n            <td>\r\n                <a href=\"javascript:void(0)\" onClick=\"documentsViewLog("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-history\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"documentsEditData("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-edit\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"documentsDelete("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-trash-alt\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"documentsAddUser("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-user-plus\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"documentsDownload("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-download\"></i></a>\r\n            </td>\r\n        </tr>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-xl-12 text-center\">\r\n    <h4>Pole ühtegi documenti lisatud.</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['employeeList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":38,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col-xl-12\">\r\n    <div id=\"c_"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":21}}}) : helper)))
    + "\" class=\"card border shadow-0 mb-1 shadow-sm-hover\" data-filter-tags=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"fname") || (depth0 != null ? lookupProperty(depth0,"fname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fname","hash":{},"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":100}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lname") || (depth0 != null ? lookupProperty(depth0,"lname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lname","hash":{},"data":data,"loc":{"start":{"line":4,"column":101},"end":{"line":4,"column":110}}}) : helper)))
    + "\">\r\n        <div class=\"card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top\">\r\n            <div class=\"d-flex flex-row align-items-center\">\r\n                <div class=\"info-card-text flex-1\">\r\n                    <a href=\"javascript:void(0);\" class=\"fs-xl text-truncate text-truncate-lg text-info\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"fname") || (depth0 != null ? lookupProperty(depth0,"fname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fname","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":33}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"lname") || (depth0 != null ? lookupProperty(depth0,"lname") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lname","hash":{},"data":data,"loc":{"start":{"line":9,"column":34},"end":{"line":9,"column":43}}}) : helper)))
    + "\r\n                        <i class=\"fal fa-angle-down d-inline-block ml-1 fs-md\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" href=\"employee.php?uid="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":13,"column":72},"end":{"line":13,"column":78}}}) : helper)))
    + "\">Vaata profiili</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Saada teade</a>\r\n                    </div>\r\n                    <span class=\"text-truncate text-truncate-xl\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"department_name") || (depth0 != null ? lookupProperty(depth0,"department_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"department_name","hash":{},"data":data,"loc":{"start":{"line":16,"column":65},"end":{"line":16,"column":84}}}) : helper)))
    + "</span>\r\n                </div>\r\n                <button class=\"js-expand-btn btn btn-sm btn-default\" data-toggle=\"collapse\" data-target=\"#c_"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":18,"column":108},"end":{"line":18,"column":114}}}) : helper)))
    + " > .card-body + .card-body\" aria-expanded=\"false\">\r\n                    <span class=\"collapsed-hidden\"><i class=\"fal fa-chevron-down\"></i></span>\r\n                    <span class=\"collapsed-reveal\"><i class=\"fal fa-chevron-up\"></i></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-body p-0 collapse\">\r\n            <div class=\"p-3\">\r\n                <a href=\"tel:+13174562564\" class=\"mt-1 d-block fs-sm fw-400 text-dark\">\r\n                    <i class=\"fas fa-mobile-alt text-muted mr-2\"></i> "
    + alias4(((helper = (helper = lookupProperty(helpers,"phone") || (depth0 != null ? lookupProperty(depth0,"phone") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data,"loc":{"start":{"line":27,"column":70},"end":{"line":27,"column":79}}}) : helper)))
    + "</a>\r\n                <a href=\"mailto:oliver.kopyov@smartadminwebapp.com\" class=\"mt-1 d-block fs-sm fw-400 text-dark\">\r\n                    <i class=\"fas fa-mouse-pointer text-muted mr-2\"></i> "
    + alias4(((helper = (helper = lookupProperty(helpers,"email") || (depth0 != null ? lookupProperty(depth0,"email") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data,"loc":{"start":{"line":29,"column":73},"end":{"line":29,"column":82}}}) : helper)))
    + "</a>\r\n                <div class=\"d-flex flex-row mt-2\">\r\n                    <a href=\"employee.php?uid="
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":46},"end":{"line":31,"column":52}}}) : helper)))
    + "\" class=\"mr-2 btn btn-primary\">Vaata profiili</a>\r\n                    <a href=\"javascript:void(0);\" class=\"mr-2 btn btn-primary\">Saada teade</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-xl-12 text-center\">\r\n    <h4>Pole ühtegi töötajat.</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":43,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['messageArea'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"user_sent") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":37}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":26,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"chat-segment chat-segment-sent\">\r\n            <div class=\"chat-message\">\r\n                <p>\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":28}}}) : helper)))
    + "\r\n                </p>\r\n            </div>\r\n            <div class=\"text-right fw-300 text-muted mt-1 fs-xs\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"created") || (depth0 != null ? lookupProperty(depth0,"created") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"created","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":27}}}) : helper)))
    + "\r\n            </div>\r\n        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"chat-segment chat-segment-get\">\r\n            <div class=\"chat-message\">\r\n                <p>\r\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":28}}}) : helper)))
    + "\r\n                </p>\r\n            </div>\r\n            <div class=\"fw-300 text-muted mt-1 fs-xs\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"created") || (depth0 != null ? lookupProperty(depth0,"created") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"created","hash":{},"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":23,"column":27}}}) : helper)))
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"csc flex-1 h-100\">\r\n    <div id=\"chat_container\" class=\"w-100 p-4 \">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n<div class=\"d-flex flex-column\">\r\n    <form method=\"POST\" action=\"javascript:void(0)\" id=\"sendMessage\">\r\n        <input type=\"hidden\" name=\"sendMessage\" value=\"1\">\r\n        <input type=\"hidden\" name=\"employee_id\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"employee") : depth0)) != null ? lookupProperty(stack1,"employee_id") : stack1), depth0))
    + "\">\r\n        <input type=\"hidden\" name=\"message_id\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"employee") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "\">\r\n    <div class=\"border-faded border-right-0 border-bottom-0 border-left-0 flex-1 mr-3 ml-3 position-relative shadow-top\">\r\n        <div class=\"pt-3 pb-1 pr-0 pl-0 rounded-0\" tabindex=\"-1\">\r\n            <div id=\"msgr_input\" contenteditable=\"true\" data-placeholder=\"Sinu sõnum...\" class=\"height-10 form-content-editable\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"height-8 px-3 d-flex flex-row align-items-center flex-wrap flex-shrink-0\">\r\n        <!--- <a href=\"javascript:void(0);\" class=\"btn btn-icon fs-xl mr-1\" data-toggle=\"tooltip\" data-original-title=\"Lisa fail\" data-placement=\"top\">\r\n            <i class=\"fal fa-paperclip color-fusion-300\"></i>\r\n        </a>\r\n        <a href=\"javascript:void(0);\" class=\"btn btn-icon fs-xl mr-1\" data-toggle=\"tooltip\" data-original-title=\"Lisa pilt\" data-placement=\"top\">\r\n            <i class=\"fal fa-camera color-fusion-300\"></i>\r\n        </a>--->\r\n        <div class=\"ml-auto\">\r\n            <button href=\"javascript:void(0);\" type=\"submit\" class=\"btn btn-info\">Saada</button>\r\n        </div>\r\n    </div>\r\n    </form>\r\n</div>";
},"useData":true});
templates['messageEmployee'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class=\"d-flex align-items-center p-0 border-faded border-top-0 border-left-0 border-right-0 flex-shrink-0\">\r\n                                        <div class=\"d-flex align-items-center w-100 pl-3 px-lg-4 py-2 position-relative\">\r\n                                            <div class=\"d-flex flex-row align-items-center mt-1 mb-1\">\r\n                                                <div class=\"mr-2 d-inline-block\">\r\n                                                    <span class=\"rounded-circle profile-image d-block\" style=\"background-image:url('assets/img/default.png'); background-size: cover;\"></span>\r\n                                                </div>\r\n                                                <div class=\"info-card-text\">\r\n                                                    <a href=\"employee.php?uid="
    + alias4(((helper = (helper = lookupProperty(helpers,"employee_id") || (depth0 != null ? lookupProperty(depth0,"employee_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"employee_id","hash":{},"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":93}}}) : helper)))
    + "\" class=\"fs-lg text-truncate text-truncate-lg\">\r\n                                                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"employee_name") || (depth0 != null ? lookupProperty(depth0,"employee_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"employee_name","hash":{},"data":data,"loc":{"start":{"line":9,"column":56},"end":{"line":9,"column":73}}}) : helper)))
    + "\r\n                                                    </a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <a href=\"javascript:void(0);\" class=\"px-3 py-2 d-flex d-lg-none align-items-center justify-content-center mr-2 btn\" data-action=\"toggle\" data-class=\"slide-on-mobile-left-show\" data-target=\"#js-chat-contact\">\r\n                                            <i class=\"fal fa-ellipsis-v h1 mb-0 \"></i>\r\n                                        </a>\r\n                                    </div>\r\n";
},"useData":true});
templates['messageEmployeeSearch'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"w-100\">\r\n    <ul id=\"js-msgr-listfilter\" class=\"list-unstyled m-0\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":20,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li>\r\n            <a href=\"javascript:void(0)\" onClick=\"viewMessage(0,"
    + alias1(((helper = (helper = lookupProperty(helpers,"employee_id") || (depth0 != null ? lookupProperty(depth0,"employee_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"employee_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":64},"end":{"line":6,"column":79}}}) : helper)))
    + ")\" class=\"d-table w-100 px-2 py-2 text-dark hover-white\" data-filter-tags=\"tracey chang online\">\r\n                <div class=\"d-table-cell align-middle\">\r\n                    <span class=\"profile-image-md rounded-circle d-block\" style=\"background-image:url('assets/img/default.png'); background-size: cover;\"></span>\r\n                </div>\r\n                <div class=\"d-table-cell w-100 align-middle pl-2 pr-2\">\r\n                    <div class=\"text-truncate text-truncate-md\">\r\n                        "
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"user_name") : depth0), depth0))
    + "\r\n                        <small class=\"d-block font-italic text-success fs-xs\">\r\n                            Viimati online: <br/>"
    + alias1(alias2((depth0 != null ? lookupProperty(depth0,"lastlogin") : depth0), depth0))
    + "\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n        </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['messageHistory'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":23,"column":13}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li>\r\n        <div class=\"d-flex w-100 px-3 py-2 text-dark hover-white cursor-pointer show-child-on-hover\" onClick=\"viewMessage("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":6,"column":122},"end":{"line":6,"column":128}}}) : helper)))
    + ","
    + alias4(((helper = (helper = lookupProperty(helpers,"employee_id") || (depth0 != null ? lookupProperty(depth0,"employee_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"employee_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":129},"end":{"line":6,"column":144}}}) : helper)))
    + ")\">\r\n            <div class=\"profile-image-md rounded-circle\" style=\"background-image:url('assets/img/default.png'); background-size: cover;\"></div>\r\n            <div class=\"px-2 flex-1\">\r\n                <div class=\"text-truncate text-truncate-md\">\r\n                    "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"user_name") : depth0), depth0))
    + "\r\n                    <small class=\"d-block text-truncate text-truncate-md text-muted\">\r\n                        "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"created") : depth0), depth0))
    + "\r\n                    </small>\r\n                </div>\r\n            </div>\r\n            <div class=\"position-absolute pos-right mt-2 mr-3\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"user_seen") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":22},"end":{"line":17,"column":45}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </li>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-info\">Uus</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"useData":true});
templates['notyVacation'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"col-xl-12\">\r\n                                <div class=\"alert border-faded border bg-white text-secondary fade show\" role=\"alert\">\r\n                                    <div class=\"d-flex align-items-center\">\r\n                                        <div class=\"alert-icon\">\r\n                                            <span class=\"icon-stack icon-stack-md\">\r\n                                                <i class=\"base-7 icon-stack-3x color-info-600\"></i>\r\n                                                <i class=\"fal fa-info icon-stack-1x text-white\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div class=\"flex-1\">\r\n                                            <span class=\"h5 color-info-600\">Sul on mõned puhkuse avaldused kinnitada</span>\r\n                                            <br>\r\n                                            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"pending") || (depth0 != null ? lookupProperty(depth0,"pending") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"pending","hash":{},"data":data,"loc":{"start":{"line":13,"column":44},"end":{"line":13,"column":55}}}) : helper)))
    + " kinnitamata avaldust\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n";
},"useData":true});
templates['shiftDetailTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <th class=\"pr-2 pl-1 f-11\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"day") : depth0), depth0))
    + "\r\n          <span class=\"text-dark-grey f-10\">\r\n            "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"dayName") : depth0), depth0))
    + "\r\n          </span>\r\n        </th>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <tr>\r\n        <td class=\"w-30 px-2\"> \r\n          <div class=\"media align-items-center mw-250\">\r\n            <div class=\"media-body \">\r\n              <h6 class=\"mb-0 text-center\">\r\n                <a href=\"https://demo.worksuite.biz/account/employees/1\" class=\"text-darkest-grey \">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"fname") : depth0), depth0))
    + " "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"lname") : depth0), depth0))
    + "</a>\r\n              </h6>\r\n            </div>\r\n          </div>\r\n        </td>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,(depth0 != null ? lookupProperty(depth0,"details") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":36,"column":17}}})) != null ? stack1 : "")
    + "        <td class=\"text-dark f-w-500 text-right attendance-total px-2 w-100\">\r\n          <span class=\"text-lightest\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"workhours") || (depth0 != null ? lookupProperty(depth0,"workhours") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"workhours","hash":{},"data":data,"loc":{"start":{"line":38,"column":38},"end":{"line":38,"column":51}}}) : helper)))
    + " h</span>\r\n        </td>\r\n      </tr>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <td class=\"px-1 text-center\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"shift_detail_id") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":45}}}),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "        </td>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"cursor-pointer add\" data-shift_id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"shift_id") || (depth0 != null ? lookupProperty(depth0,"shift_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shift_id","hash":{},"data":data,"loc":{"start":{"line":31,"column":58},"end":{"line":31,"column":70}}}) : helper)))
    + "\" data-date=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":93}}}) : helper)))
    + "\" data-worker_id=\""
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"worker_id") : depth0), depth0))
    + "\"><i class=\"fal fa-plus\"></i></span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <span class=\"cursor-pointer badge badge-"
    + alias4(((helper = (helper = lookupProperty(helpers,"legend") || (depth0 != null ? lookupProperty(depth0,"legend") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"legend","hash":{},"data":data,"loc":{"start":{"line":33,"column":50},"end":{"line":33,"column":60}}}) : helper)))
    + " view\" data-shift_id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"shift_id") || (depth0 != null ? lookupProperty(depth0,"shift_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shift_id","hash":{},"data":data,"loc":{"start":{"line":33,"column":82},"end":{"line":33,"column":94}}}) : helper)))
    + "\" data-date=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":33,"column":107},"end":{"line":33,"column":117}}}) : helper)))
    + "\" data-worker_id=\""
    + alias4(container.lambda((depth0 != null ? lookupProperty(depth0,"worker_id") : depth0), depth0))
    + "\">&nbsp;&nbsp;&nbsp;</span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"table-responsive\">\r\n  <table class=\"table table-bordered mt-3 table-hover\" id=\"example\">\r\n    <thead class=\"thead-light text-center\">\r\n      <tr>\r\n        <th class=\"px-2\" style=\"vertical-align: middle;\">Töötaja</th>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"days") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":12,"column":17}}})) != null ? stack1 : "")
    + "        <th class=\"text-right px-2\">Kokku tunde</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"workers") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":41,"column":15}}})) != null ? stack1 : "")
    + "    </tbody>\r\n  </table>\r\n</div>\r\n";
},"useData":true});
templates['shiftDetailView'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"d-flex mb-3\">\r\n                  <div class=\"p-2\"><h4><strong>"
    + alias4(((helper = (helper = lookupProperty(helpers,"worker") || (depth0 != null ? lookupProperty(depth0,"worker") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"worker","hash":{},"data":data,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":57}}}) : helper)))
    + "</strong> staatus: <span class=\"badge badge-"
    + alias4(((helper = (helper = lookupProperty(helpers,"badge") || (depth0 != null ? lookupProperty(depth0,"badge") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"badge","hash":{},"data":data,"loc":{"start":{"line":5,"column":101},"end":{"line":5,"column":110}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"legend") || (depth0 != null ? lookupProperty(depth0,"legend") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"legend","hash":{},"data":data,"loc":{"start":{"line":5,"column":112},"end":{"line":5,"column":122}}}) : helper)))
    + "</span></h4></div>\r\n                  <div class=\"ml-auto p-2\"><button type=\"button\" onClick=\"deleteShiftDetailView("
    + alias4(((helper = (helper = lookupProperty(helpers,"shift_detail_id") || (depth0 != null ? lookupProperty(depth0,"shift_detail_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shift_detail_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":96},"end":{"line":6,"column":115}}}) : helper)))
    + ","
    + alias4(((helper = (helper = lookupProperty(helpers,"shift_id") || (depth0 != null ? lookupProperty(depth0,"shift_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shift_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":116},"end":{"line":6,"column":128}}}) : helper)))
    + ")\" class=\"btn btn-xs btn-danger\"><i class=\"fas fa-trash-alt\"></i> Eemalda</button></div>\r\n                </div>\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"text-center\">Kuupäev</th>\r\n                      <th class=\"text-center\">Algus</th>\r\n                      <th class=\"text-center\">Lõpp</th>\r\n                      <th class=\"text-center\">Kestus</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cycle") || (depth0 != null ? lookupProperty(depth0,"cycle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cycle","hash":{},"data":data,"loc":{"start":{"line":19,"column":46},"end":{"line":19,"column":55}}}) : helper)))
    + "</td>\r\n                      <td class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"startTime") || (depth0 != null ? lookupProperty(depth0,"startTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startTime","hash":{},"data":data,"loc":{"start":{"line":20,"column":46},"end":{"line":20,"column":59}}}) : helper)))
    + "</td>\r\n                      <td class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"endTime") || (depth0 != null ? lookupProperty(depth0,"endTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endTime","hash":{},"data":data,"loc":{"start":{"line":21,"column":46},"end":{"line":21,"column":57}}}) : helper)))
    + "</td>\r\n                      <td class=\"text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"workhours") || (depth0 != null ? lookupProperty(depth0,"workhours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"workhours","hash":{},"data":data,"loc":{"start":{"line":22,"column":46},"end":{"line":22,"column":59}}}) : helper)))
    + " h</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Sulge</button>\r\n     \r\n    </div>\r\n\r\n";
},"useData":true});
templates['shiftTable'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                <tr class=\"cursor-pointer\" id=\"shift_"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":85},"end":{"line":12,"column":91}}}) : helper)))
    + "\" onClick=\"changeShift("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":12,"column":114},"end":{"line":12,"column":120}}}) : helper)))
    + ")\">\r\n                                                    <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":13,"column":56},"end":{"line":13,"column":64}}}) : helper)))
    + "</td>\r\n                                                    <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"month") || (depth0 != null ? lookupProperty(depth0,"month") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data,"loc":{"start":{"line":14,"column":56},"end":{"line":14,"column":65}}}) : helper)))
    + "</td>\r\n                                                    <td>"
    + alias4(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":64}}}) : helper)))
    + "</td>\r\n                                                    <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"Ootel",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":62},"end":{"line":17,"column":81}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":17,"column":56},"end":{"line":33,"column":63}}})) != null ? stack1 : "")
    + "                                                    </td>\r\n                                                </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                                                                <span class=\"badge badge-dark\">Ootel</span>\r\n                                                            </a>\r\n                                                            <ul class=\"dropdown-menu\">\r\n                                                                <li class=\"p-2\"><a href=\"javascript:void(0)\" onClick=\"ShiftStatusChange("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":136},"end":{"line":22,"column":142}}}) : helper)))
    + ")\"><span class=\"badge badge-dark\">Ootel</span></a></li>\r\n                                                                <li class=\"p-2\"><a href=\"javascript:void(0)\" onClick=\"ShiftStatusChange("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":23,"column":136},"end":{"line":23,"column":142}}}) : helper)))
    + ")\"><span class=\"badge badge-success\">Valmis</span></a></li>\r\n                                                            </ul>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                                            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                                                                <span class=\"badge badge-success\">Valmis</span>\r\n                                                            </a>\r\n                                                            <ul class=\"dropdown-menu\">\r\n                                                                <li class=\"p-2\"><a href=\"javascript:void(0)\" onClick=\"ShiftStatusChange("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":30,"column":136},"end":{"line":30,"column":142}}}) : helper)))
    + ")\"><span class=\"badge badge-success\">Valmis</span></a></li>\r\n                                                                <li class=\"p-2\"><a href=\"javascript:void(0)\" onClick=\"ShiftStatusChange("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":136},"end":{"line":31,"column":142}}}) : helper)))
    + ")\"><span class=\"badge badge-dark\">Ootel</span></a></li>\r\n                                                            </ul>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                        <table class=\"table table-bordered mb-0\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th>Ametikohad</th>\r\n                                                    <th>Kuu</th>\r\n                                                    <th>Aasta</th>\r\n                                                    <th>Staatus</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"shift") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":48},"end":{"line":36,"column":57}}})) != null ? stack1 : "")
    + "                                            </tbody>\r\n                                        </table>\r\n";
},"useData":true});
templates['statementList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <th>Töötaja</th>\r\n        <th>Osakond</th>\r\n        <th>Avalduse sisu</th>\r\n        <th>Staatus</th>\r\n        <th>Tegevus</th>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":37,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"user_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"department_name") : depth0), depth0))
    + "</td>\r\n            <td><a class=\"btn btn-default btn-sm\" onClick=\"viewStatement("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-eye\"></i> Vaata</a></td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":22},"end":{"line":17,"column":42}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":22},"end":{"line":27,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":34,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-warning\">Ootel</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":26},"end":{"line":19,"column":46}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":24,"column":16}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success\">Kinnitatud</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":24,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"badge badge-danger\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"\" data-original-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "\">Tagasilükatud</span>\r\n                <small class=\"d-block\"><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "</i></small>\r\n                ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectStatement("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":28,"column":83},"end":{"line":28,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptStatement("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":29,"column":84},"end":{"line":29,"column":90}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":26},"end":{"line":30,"column":46}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":34,"column":16}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectStatement("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":26},"end":{"line":32,"column":46}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":34,"column":16}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptStatement("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":84},"end":{"line":33,"column":90}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n                ";
},"19":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center\">\r\n    <h4>Avaldusi ei leitud!</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":44,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['statementProfileList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <th>Sisu</th>\r\n        <th>Staatus</th>\r\n        <th>Tegevus</th>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":33,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td><a class=\"btn btn-default btn-sm\" onClick=\"viewStatement("
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-eye\"></i> Vaata</a></td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":13,"column":22},"end":{"line":13,"column":42}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":20,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":30,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-warning\">Ootel</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":26},"end":{"line":15,"column":46}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":20,"column":16}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success\">Kinnitatud</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":20,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"badge badge-danger\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"\" data-original-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "\">Tagasilükatud</span>\r\n                <small class=\"d-block\"><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "</i></small>\r\n                ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectStatement"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":24,"column":82},"end":{"line":24,"column":88}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptStatement("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":25,"column":84},"end":{"line":25,"column":90}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":26,"column":26},"end":{"line":26,"column":46}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":30,"column":16}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectStatement("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":83},"end":{"line":27,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":26},"end":{"line":28,"column":46}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":30,"column":16}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptStatement("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":29,"column":84},"end":{"line":29,"column":90}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n                ";
},"19":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center\">\r\n    <h4>Avaldusi ei leitud!</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":40,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['tripList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <th>Töötaja</th>\r\n        <th>Osakond</th>\r\n        <th>Lähetuse sisu</th>\r\n        <th>Periood</th>\r\n        <th>Staatus</th>\r\n        <th>Tegevus</th>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"user_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"department_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"info") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"start") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"end") : depth0), depth0))
    + "</td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":22},"end":{"line":19,"column":42}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":26,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":22},"end":{"line":29,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":36,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-warning\">Ootel</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":26,"column":16}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success\">Kinnitatud</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":26,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"badge badge-danger\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"\" data-original-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "\">Tagasilükatud</span>\r\n                <small class=\"d-block\"><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "</i></small>\r\n                ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectTrip("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":30,"column":78},"end":{"line":30,"column":84}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptTrip("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":79},"end":{"line":31,"column":85}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":26},"end":{"line":32,"column":46}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":36,"column":16}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectTrip("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":78},"end":{"line":33,"column":84}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":34,"column":26},"end":{"line":34,"column":46}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":16},"end":{"line":36,"column":16}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptTrip("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":35,"column":79},"end":{"line":35,"column":85}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n                ";
},"19":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center\">\r\n    <h4>Avaldusi ei leitud!</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['tripProfileList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <th>Lähetuse sisu</th>\r\n        <th>Periood</th>\r\n        <th>Staatus</th>\r\n        <th>Tegevus</th>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":35,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"info") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"start") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"end") : depth0), depth0))
    + "</td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":15,"column":22},"end":{"line":15,"column":42}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":15,"column":16},"end":{"line":22,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":22},"end":{"line":25,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":32,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-warning\">Ootel</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":46}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":22,"column":16}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success\">Kinnitatud</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":26},"end":{"line":19,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":22,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"badge badge-danger\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"\" data-original-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "\">Tagasilükatud</span>\r\n                <small class=\"d-block\"><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "</i></small>\r\n                ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectTrip"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":26,"column":77},"end":{"line":26,"column":83}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptTrip("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":79},"end":{"line":27,"column":85}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":28,"column":26},"end":{"line":28,"column":46}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":32,"column":16}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectTrip("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":29,"column":78},"end":{"line":29,"column":84}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":30,"column":26},"end":{"line":30,"column":46}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":32,"column":16}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptTrip("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":79},"end":{"line":31,"column":85}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n                ";
},"19":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center\">\r\n    <h4>Avaldusi ei leitud!</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":42,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['vacationAdd'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col-xl-12\">\r\n        <div class=\"form-group\">\r\n            <label class=\"form-label\">Puhkuse tüüp</label>\r\n            <select class=\"form-control\" name=\"vacation_type\" id=\"vacation_type\">\r\n                <option value=\"0\">Vali tüüp</option>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"main") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":8,"column":22},"end":{"line":8,"column":40}}}),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":16},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"kids") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":40}}}),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":13,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"school") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":14,"column":22},"end":{"line":14,"column":42}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":16,"column":23}}})) != null ? stack1 : "")
    + "            </select>              \r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-2\">\r\n        <div class=\"form-group\">\r\n            <label>Algus</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"vacation_start\" id=\"vacation_start\" placeholder=\"Vali kuupäev\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-6 mt-2\">\r\n        <div class=\"form-group\">\r\n            <label>Lõpp</label>\r\n            <input type=\"date\" class=\"form-control\" name=\"vacation_end\" id=\"vacation_end\" placeholder=\"Vali kuupäev\">\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 mt-2\">\r\n        <div class=\"form-group\">\r\n            <textarea class=\"form-control\" name=\"vacation_info\" id=\"vacation_info\" rows=\"3\" placeholder=\"Kommentaar\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-12 mt-2\">\r\n        <div class=\"form-check\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"payment\" id=\"exampleRadios1\" value=\"option1\" checked>\r\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\r\n                Koos palgaga\r\n            </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n            <input class=\"form-check-input\" type=\"radio\" name=\"payment\" id=\"exampleRadios2\" value=\"option2\">\r\n            <label class=\"form-check-label\" for=\"exampleRadios2\">\r\n                Puhkusele jäädes\r\n            </label>\r\n        </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                    <option value=\"1\">Põhipuhkus</option>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <option value=\"2\">Lapsepuhkus</option>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "                    <option value=\"3\">Õppepuhkus</option>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"col-xl-12\">\r\n        <h4 class=\"text-center\">Kahjuks töötajal pole ühtegi puhkusepäeva saada enam!</h4>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"avaible") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":2,"column":10},"end":{"line":2,"column":31}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":55,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['vacationList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <th>Töötaja</th>\r\n        <th>Osakond</th>\r\n        <th>Tüüp</th>\r\n        <th>Periood</th>\r\n        <th>Puhkusetasu</th>\r\n        <th>Töötaja kommentaar</th>\r\n        <th>Staatus</th>\r\n        <th>Tegevus</th>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":43,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"user_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"department_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"vacation_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"start") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"end") : depth0), depth0))
    + " <strong>("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"days") : depth0), depth0))
    + " päeva)</strong></td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"payment") : depth0), depth0))
    + "</td>\r\n            <td><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"info") : depth0), depth0))
    + "</i></td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":42}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":30,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":33,"column":22},"end":{"line":33,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":33,"column":16},"end":{"line":40,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-warning\">Ootel</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":25,"column":26},"end":{"line":25,"column":46}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":30,"column":16}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success\">Kinnitatud</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":30,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"badge badge-danger\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"\" data-original-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "\">Tagasilükatud</span>\r\n                <small class=\"d-block\"><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "</i></small>\r\n                ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectVacation("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":34,"column":82},"end":{"line":34,"column":88}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptVacation("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":35,"column":83},"end":{"line":35,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":36,"column":26},"end":{"line":36,"column":46}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":40,"column":16}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectVacation("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":37,"column":82},"end":{"line":37,"column":88}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":38,"column":26},"end":{"line":38,"column":46}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":16},"end":{"line":40,"column":16}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptVacation("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":39,"column":83},"end":{"line":39,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n                ";
},"19":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center\">\r\n    <h4>Puhkuseavaldusi ei leitud!</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['vacationProfileList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <th>Tüüp</th>\r\n        <th>Periood</th>\r\n        <th>Tasu</th>\r\n        <th>Kommentaar</th>\r\n        <th>Staatus</th>\r\n        <th>Tegevus</th>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"vacation_name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"start") : depth0), depth0))
    + " - "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"end") : depth0), depth0))
    + " <strong>("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"days") : depth0), depth0))
    + " päeva)</strong></td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"payment") : depth0), depth0))
    + "</td>\r\n            <td><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"info") : depth0), depth0))
    + "</i></td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":19,"column":22},"end":{"line":19,"column":42}}}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":26,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n            <td>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"0",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":29,"column":22},"end":{"line":29,"column":42}}}),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":36,"column":23}}})) != null ? stack1 : "")
    + "            </td>\r\n        </tr>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-warning\">Ootel</span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":21,"column":26},"end":{"line":21,"column":46}}}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":26,"column":16}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"badge badge-success\">Kinnitatud</span>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":46}}}),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":26,"column":16}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"badge badge-danger\" data-toggle=\"tooltip\" data-placement=\"auto\" title=\"\" data-original-title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "\">Tagasilükatud</span>\r\n                <small class=\"d-block\"><i>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reason") : depth0), depth0))
    + "</i></small>\r\n                ";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectVacation("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":30,"column":82},"end":{"line":30,"column":88}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptVacation("
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":32,"column":26},"end":{"line":32,"column":46}}}),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":36,"column":16}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-danger\" onClick=\"rejectVacation("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":33,"column":82},"end":{"line":33,"column":88}}}) : helper)))
    + ")\"><i class=\"fal fa-times\"></i> Keeldu</a>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"eq")||(depth0 && lookupProperty(depth0,"eq"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"eq","hash":{},"data":data,"loc":{"start":{"line":34,"column":26},"end":{"line":34,"column":46}}}),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":16},"end":{"line":36,"column":16}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\"#\" class=\"btn btn-sm btn-success\" onClick=\"acceptVacation("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"id","hash":{},"data":data,"loc":{"start":{"line":35,"column":83},"end":{"line":35,"column":89}}}) : helper)))
    + ")\"><i class=\"fal fa-check\"></i> Aksepteeri</a>\r\n                ";
},"19":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-center\">\r\n    <h4>Puhkuseavaldusi ei leitud!</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"data") : depth0)) != null ? lookupProperty(stack1,"length") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":46,"column":7}}})) != null ? stack1 : "")
    + "\r\n";
},"useData":true});
templates['worktoolsList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>Nimi</th>\r\n            <th>Info</th>\r\n            <th>Kogus</th>\r\n            <th>Kasutusel</th>\r\n            <th>Tegevus</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":26,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr id=\"worktool_"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\">\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"info") : depth0), depth0))
    + "</td>\r\n            <td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"quantity") : depth0), depth0))
    + "</td>\r\n            <td><a href=\"javascript:void(0)\" onClick=\"worktoolsUsed("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"used") : depth0), depth0))
    + "</a></td>\r\n            <td>\r\n                <a href=\"javascript:void(0)\" onClick=\"worktoolsViewLog("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-history\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"worktoolsEditData("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-edit\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"worktoolsDelete("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-trash-alt\"></i></a>\r\n                <a href=\"javascript:void(0)\" onClick=\"worktoolsAddUser("
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + ")\"><i class=\"fal fa-user-plus\"></i></a>\r\n            </td>\r\n        </tr>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col-xl-12 text-center\">\r\n    <h4>Pole ühtegi töövahendit määratletud.</h4>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":33,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();