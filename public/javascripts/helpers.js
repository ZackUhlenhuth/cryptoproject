Handlebars.registerPartial('post-full', Handlebars.templates['post-full']);
Handlebars.registerPartial('post-min', Handlebars.templates['post-min']);


// Load template into entire page
var loadPage = function(template, data) {
    data = data || {};
    $('.content').html(Handlebars.templates[template](data));
}

// Load error into error dialog
var loadError = function(data) {
    data = data || {};
    $('#error').text(data);
}

// Show error
var displayError = function(element, errorMessage){
    element.text(errorMessage);
}

// Append template to specified selector
var addElement = function(selector, template, data) {
    data = data || {};
    $(selector).append(Handlebars.templates[template](data));
}

// Replace current contents of specified selector
var replaceElement = function(selector, template, data) {
    $(selector).replaceWith(Handlebars.templates[template](data));
}

// Load template to specified selector
var loadElement = function(selector, template, data) {
    $(selector).html(Handlebars.templates[template](data));
}
