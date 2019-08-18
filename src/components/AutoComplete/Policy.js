import React from 'react';
import AutoComplete from './AutoComplete';
import Grid from '@material-ui/core/Grid';
import * as utils from './utils';

export default function(props) {
    return (
        <Grid item xs={12}>
            <AutoComplete value={props.value} suggestions={utils.policySuggestions()} label="Medical Policy" placeholder="Enter policy number" onSelect={props.setPolicy} /> 
        </Grid>
    )
}