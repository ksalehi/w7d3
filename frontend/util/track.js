const Note = require("./note.js");
const Tones = require("../constants/tones.js");
const KeyAction = require("../actions/key_action.js");
const KeyStore = require("../stores/key_store.js");

function Track(attributes){
  this.name = attributes["name"];
  this.roll = attributes["roll"] || [];
}

Track.prototype.startRecording = function(){
  this.roll = [];
  this.currentTime = Date.now();
};

Track.prototype.addNotes = function(){
  let timeSlice = Date.now() - this.currentTime;
  this.roll.push({timeSlice: timeSlice, notes: KeyStore.all()});
  console.log(this.roll);
};

Track.prototype.play = function(){
  if (this.interval) {
    return;
  } else {
    let playbackStart = Date.now();
    let idx = 0;
    this.interval = setInterval(
      () => {
        if (idx < this.roll.length) {
          if (Date.now() - playbackStart > this.roll[idx].timeSlice) {
            KeyAction.keysPressed(this.roll[idx].notes);
          }
        }
      }
    );
  }
};

Track.prototype.stopRecording = function(){
  this.addNotes([]);
};

module.exports = Track;
