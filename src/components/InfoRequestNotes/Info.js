import React from 'react';

export default function(props) {
    let infoContent = props.values.info.split("\n\n");
    infoContent = infoContent.map(content => {
        return <span>{content}<br /><br /></span>
    })
    const info = `For ${props.values.dos}: ${infoContent}`
    return (
        <div>
            Info Requested: For {props.values.dos}: {infoContent}
        </div>
    )
}