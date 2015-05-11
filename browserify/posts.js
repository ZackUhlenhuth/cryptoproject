var cryptico = require('cryptico-js');

function decryptCiphertext(post, password) {
    var ciphertext = post.content;
    var plaintext = cryptico.decrypt(ciphertext, cryptico.generateRSAKey("asdf", 1024)).plaintext;
    loadElement("#right-pane", "post-full", post);
    $("#plaintext").html(plaintext);
    $("#decrypt-modal-" + post._id).modal("hide");
}

$(document).ready(function() {

    loadPosts();

    var decryptContent = function(post, password, callback) {
        var plaintext = Aes.Ctr.decrypt(post.content, password, 256);
        console.log(checkValidPlaintext(plaintext));
        current_mac_hex = HMAC_SHA256_MAC(password, post.content);
        if (checkValidPlaintext(plaintext)) {
            //if the MAC does not match, alert the user
            if (!compareMACs(current_mac_hex, post.mac_hex)){
                alert("This post's integrity may have been compromised!");
            }
            loadElement("#right-pane", "post-full", post);
            $("#plaintext").html(plaintext);
            $("#decrypt-modal-" + post._id).modal("hide");
        } else {
            loadElement("#decrypt-modal-error", "error", {message: "Password does not match!"});
        }
    }

    var checkValidPlaintext = function(word) {
        var re = /^[\x00-\x7F]+$/;
        return re.test(word);
    }

    // calculate MAC, check authenticity
    $("#checkMAC").click(function() {
        var password = $('#decryptPassword').val();
        var ciphertext = $('#ciphertext').text();
        var oldMAC = $("#oldMAC").val();
        var mac_hex = HMAC_SHA256_MAC(password, ciphertext);
        var isMatched = compareMACs(oldMAC, mac_hex);
        if (isMatched){
            $("#macComparison").text("MAC verified! Click Decrypt!");
        }else{
            $("#macComparison").text("MAC doesn't match!");
        }
    });

    $(document).on('click', '.post-min', function(e) {
        var postId = $(this).data("post-id");
        $.ajax({
            url: '/posts/' + postId,
            type: 'GET',
            success: function(post) {
                loadElement("#right-pane", "post-default", post);

                // addElement("#two-pane", "decrypt-modal", post);
                $("#decrypt-modal-" + postId).modal();
                // loadElement('#right-pane', 'post-full', post);
            },
            error: function(jqXHR, textStatus, err) {
                console.log(jqXHR.responseText);
            }
        });
    });

    $(document).on('submit', '.decrypt-form', function(e) {
        e.preventDefault();
        var postId = $(this).data("post-id");
        decryptPost(postId);
    });

    $(document).on('click', '.decrypt-post-submit', function(e) {
        var postId = $(this).data("post-id");
        decryptSharedPost(postId);
    });

    $(document).on('click', '.shared-decrypt-post-submit', function(e) {
        var postId = $(this).data("post-id");
        decryptPost(postId);
    });

    function decryptPost(postId) {
        var formData = getFormData('#decrypt-form-' + postId);
        var password = formData.password;
        $.ajax({
            url: '/posts/' + postId,
            type: 'GET',
            success: function(post) {
                decryptContent(post, password);
                $("#password").val("");
            },
            error: function(jqXHR, textStatus, err) {
                console.log(jqXHR.responseText);
            }
        });
    }

    function decryptSharedPost(postId) {
        var formData = getFormData('#decrypt-form-' + postId);
        var password = formData.password;
        $.ajax({
            url: '/posts/shared/' + postId,
            type: 'GET',
            success: function(post) {
                decryptCiphertext(post, password);
                $("#password").val("");
            },
            error: function(jqXHR, textStatus, err) {
                console.log(jqXHR.responseText);
            }
        });
    }

    $(document).on('click', '#shared-posts', function(e) {
        $.ajax({
            url: '/posts/shared',
            type: 'GET',
            success: function(posts) {
                loadElement("#posts", "posts", {posts: posts, shared: true});
            },
            error: function(jqXHR, textStatus, err) {
                console.log(jqXHR.responseText);
            }
        });
    });

    $(document).on('click', '#my-posts', function(e) {
        $.ajax({
            url: '/posts/',
            type: 'GET',
            success: function(posts) {
                loadElement("#posts", "posts", {posts: posts, shared: false});
            },
            error: function(jqXHR, textStatus, err) {
                console.log(jqXHR.responseText);
            }
        });
    });


    // $(document).on('click', '.post-full', function(e) {
    //     var ciphertext = $(this).find("p").first().text();
    //     $('#decryptPost').modal('show');
    //     $('#ciphertext').text(ciphertext);
    // });

    // SEARCH

    $("#search").keydown(function(e) {
        showSearchResults();
    });

    $("#search-submit").on("click", function(e) {
        showSearchResults();
    });

    var showSearchResults = function() {
        var regExp = new RegExp($("#search").val(), 'i');
        $(".post-min").hide();
        var results = $(".post-min").filter(function() {
            return regExp.test($(this).text());
        }).show();
    }
});