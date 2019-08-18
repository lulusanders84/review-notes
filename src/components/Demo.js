
  import React, { useState } from 'react';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import ChromeTabs from './Tabs';
  
  const Demo = () => {
    const [index, setIndex] = useState(0);
    return (
      <AppBar
        position={'static'}
        elevation={0}
        style={{ backgroundColor: '#E6E8EB' }}
      >
        <Toolbar>
          <ChromeTabs
            style={{ alignSelf: 'flex-end' }}
            tabs={[
              { label: 'Label 1' },
              { label: 'Label 2' },
              { label: 'Label 3' },
              { label: 'Label 4' },
            ]}
            tabStyle={{
              bgColor: '#E6E8EB',
              selectedBgColor: '#ffffff',
              color: 'rgba(0,0,0,0.87)',
            }}
            tabProps={{
              disableRipple: true,
            }}
            value={index}
            onChange={(e, i) => setIndex(i)}
          />
        </Toolbar>
      </AppBar>
    )
  }
  
  export default Demo;