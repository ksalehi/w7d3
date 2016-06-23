const KeyActions = require("../actions/key_action.js");

const Mapping = {
  65: 'C4',
  83: 'D4',
  68: 'E4',
  70: 'F4',
  71: 'G4',
  72: 'A4',
  74: 'B4',
  75: 'C5'
};

function addKeyEventListeners(){

  $(document).on("keyup", function(e){
    // debugger
    KeyActions.keyReleased(Mapping[e.keyCode]);
  });

  $(document).on("keydown", function(e){
    KeyActions.keyPressed(Mapping[e.keyCode]);
  });
}

module.exports = addKeyEventListeners;
