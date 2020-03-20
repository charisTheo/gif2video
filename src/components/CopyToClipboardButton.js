import React, { Component } from 'react'
import { IconButton, Snackbar, Grow } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopy';

export default class CopyToClipboardButton extends Component {
    constructor() {
        super();

        this.state = {
            showAlert: false
        };
        this.copyToClipboard = this.copyToClipboard.bind(this);
        this.handleAlertClose = this.handleAlertClose.bind(this);
    }

    copyToClipboard() {
        const { text } = this.props;

        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        this.setState({ showAlert: true });
    }
    
    handleAlertClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        
        this.setState({ showAlert: false });
    }

    render() {
        const { showAlert } = this.state;

        return (
            <React.Fragment>
                <div className="copy-to-clipboard-button">
                    <IconButton 
                        onClick={this.copyToClipboard}
                        color="primary" 
                        aria-label="copy to clipboard"
                        >
                        <CopyIcon />
                    </IconButton>
                </div>
                <Snackbar
                    open={showAlert}
                    autoHideDuration={3000}
                    onClose={this.handleAlertClose}
                    TransitionComponent={props => <Grow {...props} />}
                    message="Copied to clipboard"
                />
            </React.Fragment>
        )
    }
}
