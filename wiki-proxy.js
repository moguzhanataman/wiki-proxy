function changeUrl(anchor) {
    const url = anchor.href
    const urlParts = url.split('/');
    const queryString = url.split('?')[1] || ""

    let newUrl = "";
    let hostname = "";
    let rest = "";
    let protocol = "";

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
      rest = urlParts.slice(3).join('/');
    } else {
      hostname = urlParts[0];
      rest = urlParts.slice(1).join('/');
    }

    let splitHostname = hostname.split(".")
    let i;
    for (i = 0; i < splitHostname.length; ++i) {
      if (splitHostname[i] === "wikipedia") {
        splitHostname[i] = "0wikipedia"
      }
    }
    hostname = splitHostname.join('.')

    anchor.href = protocol + hostname + '/' + rest;
}

document.querySelectorAll("a").forEach(changeUrl)
