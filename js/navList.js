function navList() {
    var LinkName, fLen, i, text;
    var text = "";
    LinkName = ["最新消息", "校園職缺"];

    url = ["#", "latestnews.html"];
    fLen = LinkName.length;
    for (i = 0; i < fLen; i++) {
        text += "<li class='nav-item nav-style' ><a class='btn btn-outline-info border-0 font-weight-bold' href='" + url[i] + "'>" + LinkName[i] + "</a></li>";
    }
    document.getElementById("navList").innerHTML = text;
}
navList();