const sessionURL = "sessions.json";

let sessionList = [];

function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
        sessionList = e.target.response;
        resolve(e.target.response);
    };
    oReq.open("GET", sessionURL , true);
    oReq.responseType = "json";
    oReq.send();
  });
}

// because i want only my getSession exposed to the outside world without exposing my http,
// I would only export getSessions

export {getSessions};

// OR

// export {getSessions as sessions};

// DEFAULT EXPORT
const sessionURL = "sessions.json";

let sessionList = [];

// export function getSession() {
// OR
function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
        sessionList = e.target.response;
        resolve(e.target.response);
    };
    oReq.open("GET", sessionURL , true);
    oReq.responseType = "json";
    oReq.send();
  });
}

export {getSessions as default, sessionURL};
export {sessionTemplate} from './template.js' //this is aggregating modules


