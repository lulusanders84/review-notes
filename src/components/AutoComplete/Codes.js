import React from 'react';
import AutoComplete from './AutoComplete';
import Grid from '@material-ui/core/Grid';
import * as utils from './utils';

export default function(props) {
    return (
        <Grid item xs={12}>
            <AutoComplete suggestions={utils.codeSuggestions()} label="Suspended Code(s)" placeholder="Enter code" onSelect={props.onSelect} /> 
        </Grid>
    )
}