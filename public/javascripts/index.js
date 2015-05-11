(function() {
    $(document).ready(function() {
        loadElement("#content", "login");

        $("#page-turn-img").on("click", function(e) {
            loadElement("#content", "intro");
        });

        $("#loginForm").on("submit", function(e) {
            e.preventDefault();
            var route = $(this).data("route");
            login(route);
        });

        $(document).on("keydown", "#password", function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                login("/login");
            }
        });

        $(document).on("click", "#login-btn", function(e) {
            e.preventDefault();
            login("/login");
        });

        $(document).on("click", "#signup-btn", function(e) {
            e.preventDefault();
            var formData = getFormData('#loginForm');
            if ($("#confirmPassword").length > 0) {
                login('/signup');
            } else {
                loadElement("#content", "signup", formData);
            }
        });

        function login(route) {
            var formData = getFormData('#loginForm');
            formData._csrf = csrf;
            $.ajax({
                url: route,
                type: 'POST',
                data: formData,
                success: function(data) {
                    window.location.href = "/main";
                },
                error: function(jqXHR, textStatus, err) {
                    console.log(jqXHR.responseText);
                }
            });
        }
    })
})();