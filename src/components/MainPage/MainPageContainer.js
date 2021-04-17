import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/mainPageStyles'
import Sources from '../Sources';
import { handlePolicyScraping } from "../../utils/Policies/handlePolicyScraping";
import { handleCapWords } from '../../utils/Notes/handleCapWords';
import { useSelector} from 'react-redux';
import { buildVersions } from '../../utils/buildVersions';
import { buildPolicies } from '../../utils/buildPolicies';

const useStyles = makeStyles((theme) => styles(theme))


function MainPageContainer(props) {

  const [updating, setUpdating] = React.useState(false);
  const reducer = useSelector(state => state.reducer)
  const versions = buildVersions(reducer)
  const policies = buildPolicies(reducer)
  const classes = useStyles()
  const mainPageProps = {...classes, updating}

  React.useEffect(() => {
    handlePolicyScraping(setUpdating, versions, policies);
    handleCapWords();
  }, [versions, policies]);
 
    return (
      <Container id="main container" component="main" classes={{root: classes.page}}>
        <CssBaseline />     
        {React.cloneElement(props.component, mainPageProps)}
        <Sources />                
      </Container>
    );
  }

export default MainPageContainer