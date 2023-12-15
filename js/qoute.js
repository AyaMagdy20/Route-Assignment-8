var sentences = [
  "Be yourself; everyone else is already taken",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
  "“You only live once, but if you do it right, once is enough.”  ",
];
var auths = [
  "― Oscar Wilde",
  "― Albert Einstein",
  "― Bernard M. Baruch",
  "― Mae West",
];

// function display() {
//   var ran_sent = Math.floor(Math.random() * sentences.length);

//   document.getElementById("sent").innerHTML = `${sentences[ran_sent]}`;
// }
// function displayAuth() {
//   var ran_auth = Math.floor(Math.random() * auths.length);

//   document.getElementById("auth").innerHTML = `${auths[ran_auth]}`;
// }
function display() {
  var ran_sent = Math.floor(Math.random() * sentences.length);
  var ran_auth = Math.floor(Math.random() * auths.length);

  document.getElementById("sent").innerHTML = `${sentences[ran_sent]}`;
  document.getElementById("auth").innerHTML = `${auths[ran_auth]}`;
}
