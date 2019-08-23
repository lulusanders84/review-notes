import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextInput from './TextInput';
import LinkIcon from '@material-ui/icons/Link'
import { Grid, IconButton } from '@material-ui/core';
import BrokenLinkIcon from '@material-ui/icons/LinkOff';
import { formatCodes } from '../MainPage/utils';
import {getServiceFromPair} from './utils/getCodeServicePair';
import { saveCodeServicePair } from './utils/saveCodeServicePair';
import { formatMultiServices } from './utils/formatMultiServices';

const useStyles = makeStyles(() => ({
  card: {
    
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  inputs: {flex: 1},
  link: {
    width: "60px",
    height: "60px",
    marginLeft: "-60px",
    backgroundColor: "transparent",
    webkitTransform: "rotate(90deg)",
    mozTransform: "rotate(90deg)",
    oTransform: "rotate(90deg)",
    msTransform: "rotate(90deg)",
    transform: "rotate(90deg)",
  },
  linkIcon: {
      width: "auto",
      height: "30px"
  }
}));
export default function (props) {
  const [linked, setLinked] = useState(false);
  const classes = useStyles();
  const linkColor = linked ? "primary" : "disabled";
  const onCodeEntry = (value) => {
      props.handleInputs(value);
      const codes = formatCodes(value.value);
      const service = codes.reduce((acc, code) => {
        const service = getServiceFromPair(code)
          if(service) {
              acc.push(service);
              setLinked(true);
          } else setLinked(false);
          return acc;
      }, [])

      props.handleInputs({name: "service", value: formatMultiServices(service)});
  }
  return (
    <Grid container row className={classes.card}>
        <IconButton 
            classes={{root: classes.link}} 
            color={linkColor}
            edge="start" 
            disableRipple 
            style={{ backgroundColor: 'transparent' }} 
            onClick={props.onLinkClick}
        >
            {linked 
                ? <LinkIcon className={classes.linkIcon} />
                : <BrokenLinkIcon className={classes.linkIcon} />
            }          
        </IconButton>        
        <div className={classes.inputs}>
            <TextInput id="code" placeholder="" label="Suspended Codes" onBlur={onCodeEntry} values={props.values} />
            <TextInput id="service" placeholder="" label="Service" onBlur={props.handleInputs} values={props.values} />            
        </div>
    </Grid>
  )
}