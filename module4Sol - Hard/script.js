<<<<<<< HEAD
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j')
      byeSpeaker.speak(names[i]);
    else
      helloSpeaker.speak(names[i]);
  }
})(window);

=======
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j')
      byeSpeaker.speak(names[i]);
    else
      helloSpeaker.speak(names[i]);
  }
})(window);

>>>>>>> 23a830134c85c0b9b7bd887b9a52efe8d49ddbb6
