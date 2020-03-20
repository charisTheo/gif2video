import React, { Component } from 'react'
import { 
    Button, 
    CircularProgress, 
    Paper,
    Chip
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MovieIcon from '@material-ui/icons/Movie';
import SpeedIcon from '@material-ui/icons/Speed';
import UploadIcon from '@material-ui/icons/CloudUpload';
// TODO:
// import GifIcon from '@material-ui/icons/Gif';

import ConvertedVideosContainer from './ConvertedVideosContainer';
import { fetchVideosFromGif, mapAPIResultsToFiles, formatBytes } from '../utils/util';
import { secondaryLight } from '../utils/theme';
import CodeExplainer from './CodeExplainer';

const MAX_INPUT_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputFile: null,
            convertedFiles: null,
            loading: false,
            showFileSizeError: false
        };

        this.inputRef = React.createRef();
        this.loadingRef = React.createRef();
        this.handleFileInputChange = this.handleFileInputChange.bind(this);
    }

    async handleFileInputChange(event) {
        const inputFile = event.target.files[0];
        if (!inputFile) {
            return;
        }

        if (inputFile.size > MAX_INPUT_FILE_SIZE) {
            // ! show error that the maximum file size acceptable is 5 MB
            this.setState({ showFileSizeError: true }, () => {
                setTimeout(() => {
                    this.setState({ showFileSizeError: false });
                }, 3000);
            });

        } else {
            this.setState({ inputFile, loading: true }, async () => {
                // * scroll to loader when uploaded a file
                if (this.loadingRef.current) {
                    window.scrollTo(0, this.loadingRef.current.offsetTop)
                }
                const results = await fetchVideosFromGif(inputFile);
                const convertedFiles = results.map((file) => mapAPIResultsToFiles(file, inputFile));
    
                this.setState({ convertedFiles, loading: false });
            });

        }
    }

    render() {
        const { 
            inputFile, 
            convertedFiles, 
            loading, 
            showFileSizeError 
        } = this.state;

        return (
            <main>
                <CodeExplainer />

                {showFileSizeError && 
                    <Alert 
                        style={{ marginTop: -40, marginBottom: 40 }}
                        severity="error"
                    >
                        The maximum file size acceptable is 5 MB
                    </Alert>
                }

                {inputFile && 
                    <Paper 
                        className="file-container input-file-container"
                        elevation={3}
                    >
                        <h3>Original file</h3>
                        <img className="file input-file" src={URL.createObjectURL(inputFile)} alt="Original GIF file" />
                        <Chip 
                            style={{margin: '10px 15px 0'}} 
                            label={'gif'} 
                            variant="outlined" 
                            color="primary" 
                            icon={<MovieIcon />} 
                        />
                        <Chip 
                            style={{margin: '10px 15px 0'}} 
                            label={formatBytes(inputFile.size)} 
                            variant="outlined" 
                            color="primary" 
                            icon={<SpeedIcon />} 
                        />
                    </Paper>
                }

                <input 
                    style={{display: 'none'}} 
                    onChange={this.handleFileInputChange} 
                    type="file"
                    name="gif"
                    accept="image/gif"
                    ref={this.inputRef}
                />
                <Button
                    className="upload-gif-button"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (this.inputRef.current) {
                            this.inputRef.current.click();
                        }
                    }}
                    startIcon={<UploadIcon />}
                >
                    UPLOAD GIF
                </Button>
                <span style={{color: secondaryLight, marginTop: 5}}>
                    <em>(file size up to 5 MB)</em>
                </span>

                {convertedFiles && 
                    <React.Fragment>
                        <hr />
                        <ConvertedVideosContainer files={convertedFiles} />
                    </React.Fragment>
                }
                {loading && 
                    <div ref={this.loadingRef} className="converting-file-placeholder">
                        <h3><em>Converting</em></h3>
                        <CircularProgress
                            size={24}
                            className="converting-file-progress"
                        />
                    </div>
                }
            </main>
        )
    }
}
