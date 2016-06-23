const React = require("react");
const Track = require("../util/track.js");
const KeyStore = require("../stores/key_store.js");

const Recorder = React.createClass({
  getInitialState: function() {
    return {
      recording: false,
      track: new Track({name: 'woo'})
    };
  },
  componentDidMount(){
    KeyStore.addListener(this._keysChanged);
  },
  toggleRecording(){
    if (this.state.recording) {
      this.state.track.stopRecording();
      this.setState({recording: false});
    } else {
      this.setState({recording: true});
      this.state.track.startRecording();
    }
  },
  _keysChanged(){
    if (this.state.recording){
      this.state.track.addNotes();
    }
  },
  render(){
    return(
      <div>
        <button type="button" id="play-button" onClick={this.state.track.play.bind(this.state.track)}>Play</button>
        <button type="button" id="start-button" onClick={this.toggleRecording}>Start</button>
        <button type="button" id="stop-button" onClick={this.toggleRecording}>Stop</button>
      </div>
    );
  }
});

module.exports = Recorder;
