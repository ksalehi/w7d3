const React = require('react');
const Tones = require('../constants/tones.js');
const Note = require('../util/note.js');
const KeyStore = require('../stores/key_store.js');

const NoteKey = React.createClass({
  getInitialState(){
    return {active: false};
  },
  componentDidMount(){
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addListener(this.keyHandler);

  },
  componentWillUnmount(){
    // KeyStore.remove(this.token);
  },
  keyHandler(){
    // debugger
    if (KeyStore.all().includes(this.props.noteName)){
      this.note.start();
      this.setState({active: true});
    } else {
      this.note.stop();
      this.setState({active: false});
    }
  },
  render(){
    return(<div className={`notekey ${this.props.noteName} active-${this.state.active}`}>{this.props.noteName}</div>);
  }
});

module.exports = NoteKey;
