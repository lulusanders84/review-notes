import React from 'react';
import { saveFormatting } from '../Notes/utils/saveFormatting';

export default function(props) {
    const infoContent = saveFormatting(props.values.info);
    return (
        <div>
            Info Requested: For {props.values.dos}: {infoContent}
        </div>
    )
}