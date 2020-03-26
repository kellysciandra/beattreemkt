import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import { connect } from 'react-redux'
import { uploadImage } from "../actions/imageActions";

class Basic extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }
  

  onDrop(files) {
      this.setState({
          files: files.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
          }))
      })
      console.log(this.state.files)
  }


  handleSubmit = () => {

    const artistData = {
      _id: this.props._id,
      file: this.state.files
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

  

    this.props.uploadImage(artistData, config)
  }

  render() {    

    const thumbs = this.state.files.map(file => ( 
      <div key={file.name}>
        <img src={file.preview} alt={'avatar'}/>
      </div>
    ));

    return (
      <div>
          <div className='photo_drop'>
               
      <Dropzone onDrop={this.onDrop.bind(this)}>
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <div className='photo_drop_box'>
                  <h1>Drag 'n' drop </h1>
                  </div>
            </div>
            <aside>
              <h4>Files</h4>
              {thumbs}
            </aside>
          </section>
        )}
      </Dropzone>
      <button onClick={this.handleSubmit}>submit</button>


          </div>

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