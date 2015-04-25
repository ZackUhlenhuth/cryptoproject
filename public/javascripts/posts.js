(function() {

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
})();