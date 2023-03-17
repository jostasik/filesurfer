function createsearch() {
  query = "?q="
  site = "http://www.google.com/search"
  delimit = " +intitle:%22index of%22 -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml)"
  exclusions =
    " -inurl:(hypem|unknownsecret|sirens|writeups|trimediacentral|articlescentral|listen77|mp3raid|mp3toss|mp3drug|theindexof|index_of|wallywashis|indexofmp3)"
  var searchtype = document.menufrm.filetype.value
  var searchstring = document.menufrm.string.value
  sstring = " +" + searchstring
  if (searchtype == ".torrent") {
    url = site + query + searchtype + sstring + exclusions
  } else {
    url = site + query + searchtype + sstring + delimit + exclusions
  }
  searchpage = window.open(url)
  if (window.focus) {
    searchpage.focus()
  }
  parent.display.document.write("<html>\n")
  parent.display.document.write("<head>\n")
  parent.display.document.write("</head>\n")
  parent.display.document.write("<body>\n")
  parent.display.document.write('Your search URL is <a href="' + url + '" target="_blank"><b>' + url + "</b></a><br><br>\n")
  parent.display.document.write("</body>\n")
  parent.display.document.write("</html>\n")
  return false
}
