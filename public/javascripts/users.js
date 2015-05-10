(function() {
    $(document).ready(function() {
        $("#loginButton").on("click", function() {
            console.log("click");
            var formData = getFormData('#loginForm');
            formData._csrf = csrf;
            console.log(formData);
            $.ajax({
                url: "/login/",
                type: 'POST',
                data: formData,
                success: function(data) {
                    window.location.href = "/main";
                },
                error: function(jqXHR, textStatus, err) {
                    console.log(jqXHR.responseText);
                }
            });
        })
    })
})();