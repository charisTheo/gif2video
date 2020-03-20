import React, { Component } from 'react'
import { 
    Chip,
    Paper,
    CircularProgress
} from '@material-ui/core';
import DownloadIcon from '@material-ui/icons/GetApp';
import JSZip from "jszip";

import ConvertedVideoDetails from './ConvertedVideoDetails';

import './ConvertedVideosContainer.css';

export default class ConvertedVideosContainer extends Component {
    state = {
        zipping: false
    }

    downloadAllFiles() {
        this.setState({ zipping: true }, async () => {
            const { files } = this.props;
            const zip = new JSZip();
            files.map(f => zip.file(f.name, f.blob));
            const base64Zip = await zip.generateAsync({type:"base64"});
            window.location.href="data:application/zip;base64," + base64Zip;

            this.setState({ zipping: false });
        });
    }

    render() {
        const { files } = this.props;
        const { zipping } = this.state;

        return (
            <div className='converted-videos-container'>
                <div className="download-all-chip-container">
                    <Chip 
                        onClick={() => this.downloadAllFiles()}
                        label={zipping ? 'Zipping...' : 'Download All'} 
                        variant="default"
                        color="primary" 
                        icon={<DownloadIcon />} 
                    />
                    {zipping && 
                        <CircularProgress 
                            size={24} 
                            className="download-all-chip-progress" 
                        />
                    }
                </div>

                {files.map((file, index) => (
                    <Paper 
                        elevation={3}
                        key={`video-${index}`} 
                        className="file-container converted-video-container"
                    >
                        <video 
                            className='file converted-video'
                            loop 
                            muted 
                            autoPlay 
                            playsInline 
                            // TODO: onError={}
                            src={file.objectUrl} 
                            type={file.mime}
                        >
                        </video>

                        <ConvertedVideoDetails file={file} />
                    </Paper>
                ))}
            </div>
        )
    }
}
