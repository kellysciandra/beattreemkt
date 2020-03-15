import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import { connect } from 'react-redux'
import { uploadImage } from "../actions/authActions";

class Basic extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({files})
    };
    this.state = {
      files: []
    };
  }


  handleSubmit = () => {
    console.log('this')
    const artistData = {
      _id: this.props._id,
      file: this.state.files
    }
    this.props.uploadImage(artistData)
  }

  render() {    console.log(this.state, this.props._id)
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <div>

 
      <Dropzone onDrop={this.onDrop}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
      <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    _id: state.auth.artist.id
  }
}



export default connect(mapStateToProps, {uploadImage})(Basic);