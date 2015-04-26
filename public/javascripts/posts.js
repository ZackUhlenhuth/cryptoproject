$(document).ready(function() {

    $("#plaintext").hide();
    $("#saveNewMessage").hide();
    $("#decryptSuccess").hide();

    // save message to db
    $("#saveMessage").click(function() {
        var password = $('#messagePassword').val();
        // var plaintext = $('#messageContent').val();
        var plaintext = $('#messageContent').get(0).innerHTML;
        var title = $('#messageTitle').val();
        var ciphertext = Aes.Ctr.encrypt(plaintext, password, 256);
        //calculates MAC, should be stored by client for later verification
        //var mac_hex = HMAC_SHA256_MAC(password, ciphertext); 
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

    // decrypt message, check validity (alphanumeric)
    $("#decryptMessage").click(function() {
        var password = $('#decryptPassword').val();
        var ciphertext = $('#ciphertext').text();
        var plaintext = Aes.Ctr.decrypt(ciphertext, password, 256);
        if (checkValidPlaintext(plaintext)){
            $("#decryptMessage").hide();
            $("#unencryptedContent").val(plaintext);
            $("#plaintext").show();
            $("#ciphertext").hide();
            $("#decryptSuccess").show();
            $("#decrypter").hide();
            $("#saveNewMessage").show();
        }
        return false;
    });

    var checkValidPlaintext = function(word) {
        var re = /^[\x00-\x7F]+$/;
        return re.test(word);
    }

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

    $(document).on('click', '.post-full', function(e) {
        var ciphertext = $(this).find("p")[0];
        $('#decryptPost').modal('show');
        $('#ciphertext').html(ciphertext);
    });

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