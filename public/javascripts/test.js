/*
  Methods to test the different routes.
*/

$(document).ready(function() {

    $("#submit").on("click", function(e) {
        var method = $("#method").val();
        var url = $("#url").val();
        var data = $("#data").val() || "{}";
        if (method == "GET") {
            data = null;
        } else {
            data = jQuery.parseJSON(data.toString());
        }
        $.ajax({
            url: url,
            type: method,
            data: data,
            dataType: "json",
            processData: method !== "GET",
            success: function(result) {
                $("#result").text(JSON.stringify(result, undefined, 2));
            },
            error: function(jqXHR, textStatus, err) {
                $("#result").text(jqXHR.responseText);
            }
        });
    });
});