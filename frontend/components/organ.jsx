const React = require('react');
const Tones = require('../constants/tones');
const NoteKey = require("../components/note_key.jsx");
const AddKeyEventListeners = require("../util/add_key_listeners.js");
const Recorder = require('./recorder.jsx');

const Organ = React.createClass({
  componentDidMount(){
    AddKeyEventListeners();
  },
  render(){
    return (
      <div>
        {Object.keys(Tones).map(function(tone){
          return (<NoteKey key={tone} noteName={tone} />);
        })}
        <Recorder />
      </div>
    );
  }
});

module.exports = Organ;
