$(document).ready(function() {

    $("button.createMessage").click(open);

    // set form submit actions
    $("#saveMessage").click(function() {
        var data = {};
        var inputs = $('#dialogForm').serializeArray();
        $.each(inputs, function(index, input) {
            data[input.name] = input.value;
        });
        $.ajax({
            url: "/posts/",
            type: 'POST',
            data: data
        }).done(function(res) {
            $("#dialog").dialog("close");
        });
        return false;
    });

    $.ajax({
        url: '/posts',
        type: 'GET',
        // data: {
        //     _csrf: csrf
        // },
        success: function(posts) {
            loadElement('#left-pane', 'post-menu', {posts: posts});
        },
        error: function(jqXHR, textStatus, err) {
            console.log(jqXHR.responseText);
        }
    });


    $(document).on('click', '.post-min', function(e) {
        var postId = $(this).data("post-id");
        $.ajax({
            url: '/posts/' + postId,
            type: 'GET',
            // data: {
            //     _csrf: csrf
            // },
            success: function(post) {
                loadElement('#right-pane', 'post-full', post);
            },
            error: function(jqXHR, textStatus, err) {
                console.log(jqXHR.responseText);
            }
        });
    });
});