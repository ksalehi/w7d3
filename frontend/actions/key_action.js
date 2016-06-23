"use strict";

const AppDispatcher = require("../dispatcher/dispatcher.js");

const KeyAction = {
  keyPressed(keyCode){
    AppDispatcher.dispatch({
      actionType: 'KEYDOWN',
      noteName: keyCode
    });
  },
  keyReleased(keyCode){
    AppDispatcher.dispatch({
      actionType: 'KEYUP',
      noteName: keyCode
    });
  },
  keysPressed(keyCodesArray){
    AppDispatcher.dispatch({
      actionType: "CHORD",
      noteNames: keyCodesArray
    });
  }
};

module.exports = KeyAction;
