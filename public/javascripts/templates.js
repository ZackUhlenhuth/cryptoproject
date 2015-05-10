(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['decrypt-modal'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\"decrypt-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"decryptModalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button class=\"close\" type=\"button\", data-dismiss=\"modal\", aria-hidden=\"true\">&times;</button>\n                <h4 id=\"decryptModalLabel\" class=\"modal-title\">Decrypt post</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"decrypt-modal-error\"></div>\n                <form id='decrypt-form' class=\"form-horizontal\" role=\"form\" data-post-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"password\">Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='password' required/>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"hint\">Hint</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='text' name='hint'/>"
    + escapeExpression(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hint","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n                <button id=\"decrypt-post-submit\" type=\"button\" class=\"btn\">Decrypt</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['encrypt-modal'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"encrypt-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"encryptModalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button class=\"close\" type=\"button\", data-dismiss=\"modal\", aria-hidden=\"true\">&times;</button>\n                <h4 id=\"encryptModalLabel\" class=\"modal-title\">Encrypt post</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"modal-error\"></div>\n                <form id='encrypt-form' class=\"form-horizontal\" role=\"form\">\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"password\">Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='password' required/>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"confirm-password\">Confirm Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='confirm-password' required/>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"hint\">Hint</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='text' name='hint'/>\n                            <p class=\"help-block\">Example block-level help text here.</p>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n                <button id=\"new-post-submit\" type=\"button\" class=\"btn\">Create</button>\n            </div>\n        </div>\n    </div>\n</div>";
  },"useData":true});
templates['error'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n      "
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"useData":true});
templates['post-create'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"create-post\">\n    <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Enter title... \">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n\n    <div id=\"editor-container\" style=\"width:860px; margin: 30px auto;\">\n        <textarea id=\"editor\" name=\"editor\" placeholder=\"Type your text here...\">\n        Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        </textarea>\n    </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"tags\">Tags</label>\n        <input type=\"text\" class=\"form-control\" id=\"tags\" placeholder=\"Content...\"/ >\n    </div>\n    <button id=\"submit-create-btn\" class=\"btn\">Create</button> \n</div>";
  },"useData":true});
templates['post-full'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.tag, '            ', 'tag', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div id=\"post-full-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"post-full\">\n    <h1>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p id=\"plaintext\">"
    + escapeExpression(((helper = (helper = helpers.plaintext || (depth0 != null ? depth0.plaintext : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"plaintext","hash":{},"data":data}) : helper)))
    + "</p>\n    <div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <p class=\"subtext\">Posted "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n </div>";
},"usePartial":true,"useData":true});
templates['post-menu'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['post-min'], '        ', 'post-min', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"post-menu\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});
templates['post-min'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.tag, '            ', 'tag', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div id=\"post-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"post-min\" data-post-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n    <h3>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n    <div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <p class=\"subtext\">Posted "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n</div>";
},"usePartial":true,"useData":true});
templates['posts'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"left-pane\" class=\"col-sm-6\">\n";
  stack1 = this.invokePartial(partials['post-menu'], '    ', 'post-menu', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n<div id=\"right-pane\" class=\"col-sm-6\">\n</div>";
},"usePartial":true,"useData":true});
templates['tag'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<span class=\"tag tag-"
    + escapeExpression(lambda(depth0, depth0))
    + "\" data-tag=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">\n    "
    + escapeExpression(lambda(depth0, depth0))
    + "\n</span>";
},"useData":true});
})();