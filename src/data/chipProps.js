import React from 'react';


export const chipProps = {
  policy: { 
    label: (data) => <a href={data.href} target="blank">{data.value}</a>,
    title: (data) => data.name ? data.name : "",
    isTooltipped: true
  },
  pend: { 
    label: (data) => data.label,
    isTooltipped: false
  }

}