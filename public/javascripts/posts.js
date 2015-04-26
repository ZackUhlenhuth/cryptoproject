$(document).ready(function() {

    $("button.createMessage").click(open);

    // set form submit actions
    $("#saveMessage").click(function() {
        var password = $('#messagePassword').val();
        var plaintext = $('#messageContent').val();
        var title = $('#messageTitle').val();
        var ciphertext = Aes.Ctr.encrypt(plaintext, password, 256);
        var data = {"title": title, "content": ciphertext};
        $.ajax({
            url: "/posts/",
            type: 'POST',
            data: data
        }).done(function(res) {
            alert("hi");
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