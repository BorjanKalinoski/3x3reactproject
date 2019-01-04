import React,{Component} from 'react';
import { FilePond, File, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
export default class SubmitImagesAboutUs extends Component {
    constructor(props) {
        super(props);
        this.state={
            files:[]
        }
    }

    render() {
        return (
            <div>
                <form className={"ba bw1 br2 measure center pa2"}>
                    <legend className={"f4 fw6 ph0 mv2 tc w-100"}>Add images</legend>
                        <FilePond
                            allowMultiple={true}
                                  maxFiles={10}
                                  server="/api"
                                  onupdatefiles={(fileItems) => {
                                      // Set current file objects to this.state
                                      this.setState({
                                          files: fileItems.map(fileItem => fileItem.file)
                                      });
                                  }}>
                            {/* Update current files  */}
                            {this.state.files.map(file => (
                                <File key={file} src={file} origin="local" />
                            ))}
                        </FilePond>
                    <input type="submit"/>
                </form>
            </div>
        );
    }


};