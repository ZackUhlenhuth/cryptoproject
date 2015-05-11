$(document).ready(function() {

    loadPosts();


    // $("#plaintext").hide();
    // $("#saveNewMessage").hide();
    // $("#decryptSuccess").hide();

    // DECRYPT POST


    var decryptContent = function(post, password, callback) {
        var plaintext = Aes.Ctr.decrypt(post.content, password, 256);
        console.log(checkValidPlaintext(plaintext));
        if (checkValidPlaintext(plaintext)) {
            loadElement("#right-pane", "post-full", post);
            $("#plaintext").html(plaintext);
            $("#decrypt-modal-" + post._id).modal("hide");
        } else {
            loadElement("#decrypt-modal-error", "error", {message: "Password does not match!"});
        }
    }

    // // save message to db
    // $("#saveMessage").click(function() {
    //     var password = $('#messagePassword').val();
    //     // var plaintext = $('#messageContent').val();
    //     var plaintext = $('#messageContent').get(0).innerHTML;
    //     var title = $('#messageTitle').val();
    //     var ciphertext = Aes.Ctr.encrypt(plaintext, password, 256);
    //     //calculates MAC, should be stored by client for later verification
    //     var mac_hex = HMAC_SHA256_MAC(password, ciphertext);
    //     //console.log(mac_hex);
    //     var data = {"title": title, "content": ciphertext};
    //     $.ajax({
    //         url: "/posts/",
    //         type: 'POST',
    //         data: data
    //     }).done(function(res) {
    //         alert("hi");
    //         copyToClipboard(mac_hex);
    //     });
    //     return false;
    // });

    // // decrypt message, check validity (alphanumeric)
    // $("#decryptMessage").click(function() {
    //     var password = $('#decryptPassword').val();
    //     var ciphertext = $('#ciphertext').text();
    //     var plaintext = Aes.Ctr.decrypt(ciphertext, password, 256);
    //     if (checkValidPlaintext(plaintext)){
    //         $("#decryptMessage").hide();
    //         $("#unencryptedContent").val(plaintext);
    //         $("#plaintext").show();
    //         $("#ciphertextInfo").hide();
    //         $("#decryptSuccess").show();
    //         $("#decrypter").hide();
    //         $("#saveNewMessage").show();
    //     }
    //     return false;
    // });

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