import React, { Component } from 'react'
import { Link } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import GitHubIcon from '@material-ui/icons/GitHub';
import NumberTwoIcon from '@material-ui/icons/LooksTwo';

import { secondaryLight, white } from '../utils/theme';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <SettingsIcon
                    className='header-gear-icon'
                    color="primary"
                    style={{fontSize: '8rem'}}
                />
                <Link
                    href="https://github.com/charisTheo/gif2video"
                    className="header-github-link"
                    style={{color: white}}
                >
                    <GitHubIcon />
                </Link>

                <header>
                    
                    <h1 className={'header-title'}>
                        GIF
                        {' '}
                        <NumberTwoIcon style={{fontSize: '4rem', margin: '0 5px'}} color={"primary"}/>
                        {' '}
                        Web Video
                    </h1>
                    <h2 className={'header-subtitle'} style={{color: secondaryLight}}>Optimise your animated GIFs on the web </h2>
                </header>
            </React.Fragment>
        )
    }
}
