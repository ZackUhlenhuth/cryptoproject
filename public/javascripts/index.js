(function() {
    $(document).ready(function() {
        loadElement("#content", "login");

        $("#page-turn-img").on("click", function(e) {
            loadElement("#content", "intro");
        });

        $("#loginForm").on("submit", function(e) {
            e.preventDefault();
        });

        $("#password").on("keydown", function(e) {
            if (e.keyCode == 13) {
                login("/login");
            }
        })

        $("#login-btn").on("click", function(e) {
            e.preventDefault();
            login("/login");
        });

        $("#submit-btn").on("click", function(e) {
            e.preventDefault();
            login("/signup");
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