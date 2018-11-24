
$(document).ready(function () {
    $("#butonModal").click(function () {
        console.log($("#myform").serialize())
        $("#datas").html($("#lastName").val() + " " +
            $("#firstName").val() + " " + "from" + " " +
            $("#address").val() + " " +
            $("#email").val() + " " +
            $("#countries").val()
        );
        $("#serialize").html($("#myform").serialize())
    });
});
