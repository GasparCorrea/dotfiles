var box = document.getElementById("search");

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

var search_urls = {
    "r": "reddit.com/r/",
    "g": "google.cl/search?q=",
    "yt": "https://www.youtube.com/results?search_query=",
    "to": "https://torrentz2.eu/search?f=",
    "wa": "https://www.wolframalpha.com/input/?i=",
    "tjpes": "https://translate.google.com/?um=1&ie=UTF-8&hl=es&client=tw-ob#ja/es/",
    "tesjp": "https://translate.google.com/?um=1&ie=UTF-8&hl=es&client=tw-ob#es/ja/",
    "tenes": "https://translate.google.com/?um=1&ie=UTF-8&hl=es&client=tw-ob#en/es/",
    "tesen": "https://translate.google.com/?um=1&ie=UTF-8&hl=es&client=tw-ob#es/en/",
    "img": "https://www.google.com/search?tbm=isch&q="
};

var handy_urls = {
    "9gag": "https://www.9gag.com/trending",
    "gmail": "https://www.gmail.com",
    "github": "github.com",
    "3djuegos": "3djuegos.com",
    "fb": "facebook.com",
    "aula": "aula.usm.cl",
    "moodle": "moodle.inf.utfsm.cl"
};

function parseCom(com) {
    var match = /([A-Za-z0-9]+)(?: (.+))/g;
    var result = match.exec(com);
    if(com in handy_urls){
	nav(handy_urls[com]);
    }else if (result[1] in search_urls){
	nav(search_urls[result[1]] + encodeURIComponent(result[2]));
    }else{
	nav(search_urls["g"] + encodeURIComponent(com));
    }
}
