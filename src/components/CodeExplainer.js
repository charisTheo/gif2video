import React, { Component } from 'react'

import CodeBlock from './CodeBlock';

import { secondaryLight } from '../utils/theme';

export default class CodeExplainer extends Component {
    render() {
        return (
            <div className="code-explainer-container">
                <p><strong>FROM</strong></p>

                <CodeBlock language="html">
                    {`<img src="myAnimation.gif" />`}
                </CodeBlock>

                <p><strong>TO</strong></p>

                <CodeBlock language="html">
                {`<video loop muted autoplay playsinline>
    <source src="/video.webm" type="video/webm">
    <source src="/video.ogg" type="video/ogg">
    <source src="foo.mov" type="video/quicktime">
    <source src="/video.mp4" type="video/mp4">
</video>`}
                </CodeBlock>

                <p style={{ color: secondaryLight }}>
                    <strong><em>(Optional) Custom playback delay</em></strong>
                </p>

                <CodeBlock language="javascript">
                    {`document.querySelectorAll('video[autoplay]').forEach(video => {
   video.playbackRate = 0.75;
   video.onended = () => setTimeout(() => video.play(), 500);
});`}
                </CodeBlock>
            </div>
        )
    }
}
