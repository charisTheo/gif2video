import React, { Component } from 'react'
import { 
    Paper
} from '@material-ui/core';

import ConvertedVideoDetails from './ConvertedVideoDetails';

import './ConvertedVideosContainer.css';

export default class ConvertedVideosContainer extends Component {
    render() {
        const { refProp, files } = this.props;

        return (
            <div ref={refProp} className='converted-videos-container'>
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
