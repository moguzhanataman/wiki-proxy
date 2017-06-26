function changeUrl(anchor) {
    var url = anchor.href
    var newUrl;
    var hostname;
    var protocol = "";
    var urlParts = url.split('/');
    var queryString = url.split('?')[1] || ""

    // If anchor is not about wikipedia return
    if (url.indexOf("wikipedia") === -1) {
      return;
    }

    // If href already have 0wikipedia return
    if (url.indexOf("0wikipedia") > -1) {
      return;
    }

    // Find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf("://") > -1) {
      protocol = urlParts[0] + "//";
      hostname = urlParts[2];
    } else {
      hostname = urlParts[0];
    }

    let prependPoint = hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1);
    let resultUrl = hostname.substr(0, prependPoint+1) + "0" + hostname.substr(prependPoint+1, hostname.length);


    if (queryString != "") {
      newUrl = protocol + resultUrl + "?" + queryString;
    } else {
      newUrl = protocol + resultUrl;
    }

    anchor.href = newUrl;
}

document.querySelectorAll("a").forEach(changeUrl)
