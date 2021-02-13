import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { Button } from '@material-ui/core';
import DataTable from '../DataTable/DataTable';
import { getStorage, saveToStorage } from '../../utils';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [savedData, setSavedData] = React.useState([])
  const [saved, setSaved] = React.useState(false)
  
  React.useEffect(() => {
    setSaved(data !== savedData ? false : true)
  }, [data, savedData])

  const handleOpen = (e) => {
    setOpen(true);
    const storedData = getStorage(props.storageLocation, [])
    setData(storedData)
    setSavedData(storedData)
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  const handleSaveChanges = () => {
    saveToStorage(props.storageLocation, savedData)
    setData(savedData)
    setSaved(true)
  }
  const setDataFromNewRows = (newRows) => {
    const newData = formatRowsToData(newRows)
      setSavedData(newData)
  }
  const formatRowsToData = (newItems) => {
    return newItems.reduce((acc, item) => {
      acc[item.code] = item.service;
      return acc;
    }, {})
  }
  return (
    <div>
      <Button onClick={handleOpen}>
        {props.title}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <DataTable {...props} data={data} setData={setDataFromNewRows} />
            <Button onClick={handleClose}>
              Close
            </Button>

            <Button onClick={handleSaveChanges} disabled={saved}>
              {!saved ? "Save" : "Changes Saved"}
            </Button>             
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
