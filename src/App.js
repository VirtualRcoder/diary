import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNote, deleteNote } from './actions/notesAction';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.renderNotes = this.renderNotes.bind(this);

  }

componentDidMount() {
  this.props.getNotes();
}

  handleChange(e){
   this.setState({
     [e.target.name]: e.target.value
   });
  }

  handleSubmit(e){
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.saveNote(note);
    this.setState({
      title: '',
      body: ''
    });
  }

  renderNotes(){
    return _.map(this.props.notes, (note, key) => {
      return (
          <div key="key">
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <button className="btn btn-danger btn-xs" onClick={()=>this.props.deleteNote(key)}>
            Delete
            </button>
          </div>
        )
    });
  }

  render() {
    return (
      <div className="container-fluid">
          <br/>
          <br/>
          <br/>
          <br/>
            <form onSubmit={this.handleSubmit} style={{ width: '50%', margin:'0px 0px 0px 410px', padding: '70px' ,border: '5px solid black'}}>
              <div className="form-group">
                <input 
                  onChange={this.handleChange}
                  value={this.state.title} 
                  type="text" 
                  name="title" 
                  className="form-control no-border" 
                  placeholder="Title..." 
                  required
                />
              </div>  

              <div className="form-group">
                <textarea 
                  onChange={this.handleChange}
                  value={this.state.body}
                  type="text"
                  name="body"
                  className="form-control no-border" 
                  placeholder="Body..." 
                  required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-info col-sm-12">Save</button>
              </div>
            </form> 
            {this.renderNotes()} 
      </div>
  );
}
}

function mapStateToProps(state, ownProps){
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getNotes, saveNote, deleteNote })(App);
