import React, { Component } from 'react'
import { Link } from '@material-ui/core';

import { secondaryLight } from '../utils/theme';

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <hr style={{ marginBottom: 0 }}/>

                <footer style={{
                    // backgroundColor: secondary[800],
                    color: secondaryLight
                }}>
                    <ul>
                        <li>Created with{' '}
                            <Link target="_blank" href="https://material-ui.com/">Material UI</Link>
                            {' '}&amp;{' '}
                            <Link target="_blank" href="https://ffmpeg.org/">ffmpeg</Link>
                        </li>
                        <li>Created by <Link target="_blank" href="https://www.harrytheo.com">Harry Theo</Link></li>
                        <li>Hosted on <Link target="_blank" href="https://www.netlify.com/">Netlify</Link></li>
                    </ul>
                </footer>
            </React.Fragment>
        )
    }
}
