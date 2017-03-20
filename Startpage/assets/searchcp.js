var box = document.getElementById("search");
var urlPattern = /^(https?:\/\/)?[^ ]+[.][^ ]+([.][^ ]+)*(\/[^ ]+)?$/i;
var handy = /^(google|gmail|dropbox|github|3djuegos|9gag|facebook|fb)$/i;

function search() {
  console.log("Googling \"" + box.value + "\"");
  console.log("Encoded query: \n" + encodeURIComponent(box.value));
  document.location.href = "http://www.google.com/search?q=" + encodeURIComponent(box.value);
}

function nav(address) {
  if (/^(?:(?:https?|ftp):\/\/).*/i.test(address)) {
    document.location.href = address;
  } else {
    document.location.href = "http://" + address;
  }
}

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    parseCom(box.value);
  }

}


function parseCom(com) {
  // handle convenient links
  if (handy.test(com)) {
    nav("http://www."+com+".com/");
  }
  // handle "drive" command
  else if (/^drive$/i.test(com)) {
    nav("http://drive.google.com");
  }
  // handle "miudul" command
  else if (/^moodle$/i.test(com)) {
    nav("moodle.inf.utfsm.cl");
  }
  // handle "telegram" command
  else if (/^telegram$/i.test(com)) {
    nav("https://web.telegram.org");
  }
    // handle "aula" command
  else if (/^aula$/i.test(com)) {
    nav("https://aula.usm.cl");
  }
  // handle "reddit" command
  else if (com.startsWith("reddit")==true) {
    // if "reddit" command is matched, open reddit
    if (/^reddit$/i.test(com)) {
      nav("https://www.reddit.com/");
    }
    // if the subreddit command is matched
    else if (/^reddit .*$/i.test(com)) {
      var sargs = com.split(" ");
      sargs.shift();
      nav("https://www.reddit.com/r/" + (sargs.toString()).replace(/,/g," "));
    }
      // if anything else, search for it
      else if (urlPattern.test(com)){
        nav(com);
      }
      // if all else fails, search for it
      else {
        search();
      }
    }
  else if (com.startsWith("youtube")==true) {
    if (/^youtube$/i.test(com)) {
      nav("https://www.youtube.com/");
    }
    else if (/^youtube .*$/i.test(com)) {
      var sargs = com.split(" ");
      sargs.shift();
      nav("https://www.youtube.com/results?search_query=" + (sargs.toString()).replace(/,/g," ") );
    }
      else if (urlPattern.test(com)){
        nav(com);
      }
      else {
        search();
      }
    }
    
  else if (com.startsWith("torrent")==true) {
    // if "reddit" command is matched, open reddit
    if (/^torrentz2$/i.test(com)) {
      nav("https://www.torrentz2.eu/");
    }
    // if the search command is matched
    else if (/^torrent .*$/i.test(com)) {
      var sargs = com.split(" ");
      sargs.shift();
      nav("https://torrentz2.eu/search?f=" + (sargs.toString()).replace(/,/g," "));
    }
      // if anything else, search for it
      else if (urlPattern.test(com)){
        nav(com);
      }
      // if all else fails, search for it
      else {
        search();
      }
    }
    else if (com.startsWith("wa")==true) {
    // if "reddit" command is matched, open reddit
    if (/^wa$/i.test(com)) {
      nav("https://www.wolframalpha.com/");
    }
    // if the search command is matched
    else if (/^wa .*$/i.test(com)) {
      var sargs = com.split(" ");
      sargs.shift();
      nav("https://www.wolframalpha.com/input/?i=" + (sargs.toString()).replace(/,/g," ").replace("+","%2B"));
    }
      // if anything else, search for it
      else if (urlPattern.test(com)){
        nav(com);
      }
      // if all else fails, search for it
      else {
        search();
      }
    }
  else if (urlPattern.test(com)) {
    nav(com);
  }
  else {
    search();
  }
}