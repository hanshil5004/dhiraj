
$(document).ready(function () {
    $("#singup").on("submit", function (event) {

        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let phone = $("#phone").val();
        let address = $("#address").val();
        let term = $("input[name='term_box']:checked").val();

        if (name.trim().length < 1) {
            $("#name").addClass("redBox2");
            $("#nameBox").show();
        } else {
            $("#name").removeClass("redBox2");
            $("#nameBox").hide();
        }

        if (email.trim().length < 1) {
            $("#email").addClass("redBox2");
            $("#emailBox1").show();
        } else {
            $("#email").removeClass("redBox2");
            $("#emailBox1").hide();
        }

        if (password.trim().length < 8) {
            $("#password").addClass("redBox2");
            $("#passwordBox1").show();
        } else {
            $("#password").removeClass("redBox2");
            $("#passwordBox1").hide();
        }

        if (phone.trim().length < 10) {
            $("#phone").addClass("redBox2");
            $('#phoneBox').show();
        } else {
            $("#phone").removeClass("redBox2");
            $("#phoneBox").hide();
        }

        if (address.trim().length < 1) {
            $("#address").addClass("redBox2");
            $('#addressBox').show();

        } else {
            $("#address").removeClass("redBox2");
            $("#addressBox").hide();
        }

        if (term === "checked") {

            $("#termCondition").hide();
        } else {

            $('#termCondition').show();
        }


       
    });
});
 