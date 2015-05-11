(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['decrypt-modal'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"hint\">Hint</label>\n                        <div class=\"col-lg-10\">\n                            "
    + escapeExpression(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hint","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"decrypt-modal-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"decryptModalLabel\" aria-hidden=\"true\" class=\"modal decrypt-modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button class=\"close\" type=\"button\", data-dismiss=\"modal\", aria-hidden=\"true\">&times;</button>\n                <h4 id=\"decryptModalLabel\" class=\"modal-title\">Decrypt post</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"decrypt-modal-error\"></div>\n                <form id='decrypt-form-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "' class=\"decrypt-form\" class=\"form-horizontal\" role=\"form\" data-post-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"password\">Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='password' required/>\n                        </div>\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hint : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"decrypt-post-submit btn\" data-post-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Decrypt</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['encrypt-modal'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"encrypt-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"encryptModalLabel\" aria-hidden=\"true\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button class=\"close\" type=\"button\", data-dismiss=\"modal\", aria-hidden=\"true\">&times;</button>\n                <h4 id=\"encryptModalLabel\" class=\"modal-title\">Encrypt post</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"modal-error\"></div>\n                <form id='encrypt-form' class=\"form-horizontal\" role=\"form\">\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"password\">Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='password' required/>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"confirm-password\">Confirm Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='confirm-password' required/>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"hint\">Hint (optional)</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='text' name='hint'/>\n                            <p class=\"help-block\">Include a hint to help remember your password. If you forget your password, you will not be able to decrypt your post as the password is not stored!</p>\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n                <button id=\"new-post-submit\" type=\"button\" class=\"btn\">Create</button>\n            </div>\n        </div>\n    </div>\n</div>";
  },"useData":true});
templates['error'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n      "
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"useData":true});
templates['intro'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<p>CryptoBook is a secure online encrypted blog.</p>";
  },"useData":true});
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<form id=\"loginForm\" data-route=\"/login\">\n  <div class=\"form-group\">\n    <input id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control login-input\" value=\""
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\"/>\n  </div>\n  <div class=\"form-group\">\n    <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" class=\"form-control login-input\" value=\""
    + escapeExpression(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"password","hash":{},"data":data}) : helper)))
    + "\"/>\n  </div>\n  <button id=\"signup-btn\" class=\"btn\">Signup</button>\n  <button type=\"submit\" id=\"login-btn\" class=\"btn\">Login</button>\n</form>";
},"useData":true});
templates['post-create'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"create-post\">\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <div id=\"editor-container\">\n            <textarea id=\"editor\" name=\"editor\"></textarea>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"tags\">Tags</label>\n        <input type=\"text\" class=\"form-control\" id=\"tags\" placeholder=\"Content...\" data-role=\"tagsinput\"/ >\n    </div>\n    <div class=\"form-group\">\n        <label for=\"title\">Share</label>\n        <input type=\"text\" class=\"form-control\" id=\"shared\" placeholder=\"Enter users to share with... \">\n    </div>\n    <button id=\"submit-create-btn\" class=\"btn\">Create</button> \n</div>";
  },"useData":true});
templates['post-default'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.tag, '            ', 'tag', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div id=\"default-post\" class=\"post-full\">\n    <h1>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n\n    <div id=\"lock\"><i class=\"fa fa-lock\"></i></div>\n    <p class=\"blurry-text\">\n    Lorem ipsum dolor sit amet, mei nostro vulputate ex. Dicat euismod pericula nam ad. Eam iusto nusquam docendi in, id omnes libris mollis sed. Duis consequat mea et, amet incorrupte vim ut. Libris ornatus fierent ea vix. Quo ad eius facete delicata, sea modus nominavi detraxit ea, nec vidisse voluptua molestiae at. No mel agam aperiri, ut cetero virtute reformidans his, mei quas omittam splendide ex.</p>\n    <p class=\"blurry-text\">Qui et posse integre sententiae. Sonet sententiae id per. Ad mandamus oportere efficiendi eum, duo cu recusabo rationibus, eu cum zril integre. Id movet labitur pro, et vim modo mutat utroque, ex nostro erroribus vis. Stet dolores et has, pro ad probo vocent laoreet.</p>\n    <p class=\"blurry-text\">Dico voluptaria in pro, iuvaret salutandi prodesset ius in, ipsum doctus intellegebat eos an. Alterum forensibus voluptatum vim ut. Has propriae fabellas ei, recusabo assentior ei qui. In qui etiam putent omittam. Est an dolore atomorum, ut harum iusto necessitatibus est, eam id quis vulputate.</p>\n    <p class=\"blurry-text\">Amet timeam persius an pro, saepe appellantur pri at, vix illud audiam voluptaria ad. Eruditi repudiandae cum an, cu vel magna impedit. Eum lucilius euripidis voluptatum cu, et vim imperdiet definitiones, ea sonet feugait partiendo vel. Ut esse graeco similique mei. Alterum adipisci cu mei.</p>\n    <div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <p class=\"subtext\">Posted "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n </div>";
},"usePartial":true,"useData":true});
templates['post-full'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.error, '            ', 'error', (depth0 != null ? depth0.error : depth0), undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.tag, '            ', 'tag', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = " <div id=\"post-full-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" class=\"post-full\">\n    <div id=\"post-error\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.error : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n    <h1>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n    <p id=\"plaintext\">"
    + escapeExpression(((helper = (helper = helpers.plaintext || (depth0 != null ? depth0.plaintext : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"plaintext","hash":{},"data":data}) : helper)))
    + "</p>\n    <div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <p class=\"subtext\">Posted "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n </div>";
},"usePartial":true,"useData":true});
templates['post-instructions'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return " <div id=\"post-instructions\" class=\"post-full\">\n    <h1>How to Use CryptoBook</h1>\n    <p>To create a new post: click 'Create' in the top right corner, fill in the fields on the resulting page and click the new 'Create' button at the bottom to pop out the encryption dialog</p>\n    <p>In the following dialog, create a password and a hint to remember the password</p>\n    <p>To view encrypted messages: click the message in the left pane, enter the password you encrypted the post with and click 'Decrypt'</p>\n\n\n\n\n </div>";
},"useData":true});
templates['post-menu'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"post-menu\">\n    <button id=\"my-posts\" class=\"post-menu-btn btn\">My Posts</button>\n    <button id=\"shared-posts\" class=\"post-menu-btn btn\">Shared With Me</button>\n    <div id=\"posts\">\n";
  stack1 = this.invokePartial(partials.posts, '        ', 'posts', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>";
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
  buffer += "    </div>\n    <p class=\"subtext\">Posted "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n</div>\n";
  stack1 = this.invokePartial(partials['decrypt-modal'], '', 'decrypt-modal', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});
templates['posts-page'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"left-pane\" class=\"col-sm-4\">\n";
  stack1 = this.invokePartial(partials['post-menu'], '    ', 'post-menu', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n<div id=\"right-pane\" class=\"col-sm-8\">\n";
  stack1 = this.invokePartial(partials['post-instructions'], '    ', 'post-instructions', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});
templates['posts'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['shared-post-min'], '        ', 'shared-post-min', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials['post-min'], '        ', 'post-min', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.shared : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"usePartial":true,"useData":true});
templates['shared-decrypt-modal'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"hint\">Hint</label>\n                        <div class=\"col-lg-10\">\n                            "
    + escapeExpression(((helper = (helper = helpers.hint || (depth0 != null ? depth0.hint : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hint","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div id=\"decrypt-modal-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"decryptModalLabel\" aria-hidden=\"true\" class=\"modal decrypt-modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button class=\"close\" type=\"button\", data-dismiss=\"modal\", aria-hidden=\"true\">&times;</button>\n                <h4 id=\"decryptModalLabel\" class=\"modal-title\">Decrypt post</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div id=\"decrypt-modal-error\"></div>\n                <form id='decrypt-form-"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "' class=\"decrypt-form\" class=\"form-horizontal\" role=\"form\" data-post-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                    <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\" for=\"password\">Password</label>\n                        <div class=\"col-lg-10\">\n                            <input class=\"form-control\" type='password' name='password' required/>\n                        </div>\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hint : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"shared-decrypt-post-submit btn\" data-post-id="
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + ">Decrypt</button>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
templates['shared-post-min'] = template({"1":function(depth0,helpers,partials,data) {
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
  buffer += "    </div>\n    <p class=\"subtext\">Posted "
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, (depth0 != null ? depth0.date : depth0), {"name":"formatDate","hash":{},"data":data})))
    + " by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.author : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n</div>\n";
  stack1 = this.invokePartial(partials['shared-decrypt-modal'], '', 'shared-decrypt-modal', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});
templates['signup'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<form id=\"loginForm\" data-route=\"/signup\">\n  <div class=\"form-group\">\n    <input id=\"username\" name=\"username\" placeholder=\"Username\" class=\"form-control login-input\" value=\""
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "\"/>\n  </div>\n  <div class=\"form-group\">\n    <input id=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" class=\"form-control login-input\" value=\""
    + escapeExpression(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"password","hash":{},"data":data}) : helper)))
    + "\"/>\n  </div>\n  <div class=\"form-group\">\n    <input id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" placeholder=\"Confirm Password\" class=\"form-control login-input\"/>\n  </div>\n  <button type=\"submit\" id=\"signup-btn\" class=\"btn\">Signup</button>\n  <button id=\"login-btn\" class=\"btn\">Login</button>\n</form>";
},"useData":true});
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