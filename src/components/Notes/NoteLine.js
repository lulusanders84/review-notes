import React from 'react';

export const NoteLine = (props) => {
  const { line, value } = props;
  return (
    <div>
      {line}{value}
    </div>
  )
}

export default NoteLine;