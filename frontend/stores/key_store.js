const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');

const KeyStore = new Store(AppDispatcher);

let _keys = [];

KeyStore.all = function(){
  return _keys;
};

KeyStore.__onDispatch = (payload) => {
  switch(payload.actionType) {
    case 'KEYDOWN':
      if (!_keys.includes(payload.noteName)) {
        _keys.push(payload.noteName);
        KeyStore.__emitChange();
      }
      break;
    case 'KEYUP':
      let keyIdx = _keys.indexOf(payload.noteName);
      if (keyIdx > -1) {
        _keys.splice(keyIdx, 1);
        KeyStore.__emitChange();
      }
      break;
    case "CHORD":
      _keys = payload.noteNames;
      // payload.noteNames.forEach(function(note){
      //   if (!_keys.includes(note)) {
      //     _keys.push(note);
      //     KeyStore.__emitChange();
      //   }
      // });
      KeyStore.__emitChange();
      break;
  }
};

module.exports = KeyStore;
