import React from 'react';
import { getListEditorTypeProps } from '../../utils/ListEditor';
import SpringModal from '../SpringModal/SpringModal';


function ListEditor(props) {
  const { type } = props;
  const typeProps = getListEditorTypeProps(type);
  
  return (
    <SpringModal {...typeProps} />
  );
}



export default ListEditor