$(document).ready(function() {
    $("#logout").click(function() {
        localStorage.setItem("token", "");
        localStorage.setItem("admin", ""),
            localStorage.setItem("_id", "");
        localStorage.setItem("username", "");
        $('<a href="../page-login.html" id="aa"></a>').appendTo("body");
        document.getElementById("aa").click();
    })
})