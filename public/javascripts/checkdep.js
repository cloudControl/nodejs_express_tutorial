function checkUrl(url) {
    check(url, '', 10);
}

function checkDb(url) {
    check(url, 'db', 10);
}

function check(url, appender, i) { 
    document.getElementById("hint").setAttribute("style", "display: none;");
    document.getElementById("wait").setAttribute("style", "display: inline-block;");
    $.get("check/" + url + "/" + appender, function(data) {
        window.location.href = "http://" + url;
    }).fail(function() {
        if (i > 0) {
            i--;
            var timeout = window.setTimeout(function() {check(url, appender, i)}, 2000);
        } else {
            document.getElementById("wait").setAttribute("style", "display: none;");
            document.getElementById("hint").setAttribute("style", "display: inline-block;");
        }
    });
}