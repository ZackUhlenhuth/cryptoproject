Handlebars.registerPartial('post-full', Handlebars.templates['post-full']);
Handlebars.registerPartial('post-min', Handlebars.templates['post-min']);
Handlebars.registerPartial('tag', Handlebars.templates['tag']);
Handlebars.registerPartial('error', Handlebars.templates['error']);
Handlebars.registerPartial('post-menu', Handlebars.templates['post-menu']);
Handlebars.registerPartial('decrypt-modal', Handlebars.templates['decrypt-modal']);
Handlebars.registerPartial('post-instructions', Handlebars.templates['post-instructions']);
Handlebars.registerPartial('post-default', Handlebars.templates['post-default']);

Handlebars.registerHelper('formatDate', function(date) {
    return moment(date).fromNow();
});

// Load template into entire page
var loadPage = function(template, data) {
    data = data || {};
    $('#content').html(Handlebars.templates[template](data));
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


var getFormData = function(form) {
    var inputs = {};
    $(form).serializeArray().forEach(function(item) {
      inputs[item.name] = item.value;
    });
    return inputs;
};

var loadPosts = function() {
    $.ajax({
        url: '/posts',
        type: 'GET',
        success: function(posts) {
            loadElement('#content', 'posts', {posts: posts});
        },
        error: function(jqXHR, textStatus, err) {
            console.log(jqXHR.responseText);
        }
    });
}