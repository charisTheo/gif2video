import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Highlight from 'react-highlight.js';
// TODO separately import only languages used

import './CodeBlock.css';
import CopyToClipboardButton from './CopyToClipboardButton';

export default class CodeBlock extends Component {
    render() {
        return (
            <Paper className="code-block" elevation={3}>
                <CopyToClipboardButton text={this.props.children} />
                <Highlight language={this.props.language}>
                    {this.props.children}
                </Highlight>
            </Paper>
        );
    }
}
