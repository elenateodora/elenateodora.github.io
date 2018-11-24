
$(document).ready(function () {
    $("#butonModal").click(function () {
        $("#datas").html($("#lastName").val() + " " +
            $("#firstName").val() + " " + "from" + " " +
            $("#address").val() + " " +
            $("#email").val() + " " +
            $("#countries").val()
        )
    });
console.log($("#myform").serialize())
console.log(2+2)
});
