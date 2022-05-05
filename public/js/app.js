import getSessions from './sessionRepository'; //this is  default import
// import {sessionTemplate, errorMessage} from './template.js'; //this is a named import done with {} and comma. //OR like line 3
import * as template from './template.js';

function render() {
  var list = document.querySelector("#sessions");
  if (!list) return;
  list.innerHTML = template.sessionTemplate(data.listItems);
}

var data = {
  listItems: [],
};

getSessions().then((sessions) => {
  console.log("promises!");
  data.listItems = sessions;
  render();
});