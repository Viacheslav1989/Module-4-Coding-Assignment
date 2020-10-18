// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE

(function(){
    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"

  for (name in names) {
  
    // STEP 11:
    // Retrieve the first letter of the current name in the loop.

      let firstLetter = names[name].charAt(0).toLowerCase();
      if (firstLetter==="j") {
        byeSpeaker.speak(names[name]);
      }
      else {
        helloSpeaker.speak(names[name]);
      }
    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
  }
  })();
  