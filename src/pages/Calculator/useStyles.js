import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(90deg, rgba(255,70,112,1) 0%, rgba(94,70,254,1) 100%)',
    position: 'relative',
  },

  calculatorContainer: {
    maxWidth: '20rem',
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '.5rem .5rem 0',
    backdropFilter: 'blur(2rem)',
    background: 'rgba(0, 0, 0, 0.2)',
  },

  calculatorMonitor: {
    background: '#fff',
    width: '100%',
    padding: '.5rem',
    marginBottom: '.5rem',
    minHeight: '2.5rem',
    overflowX: 'hidden',
    display: 'flex',

    '& > p': {
      wordBreak: 'break-all',
    },
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    minHeight: '20rem',

    '& > :hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    },

    '& > #showResult': {
      width: '100% !important',
    },

    '& > button': {
      width: 'calc(25% - .5rem)',
      marginBottom: '.5rem',
      background: 'rgba(255, 255, 255, 0.2)',
      color: '#fff',

      '& > svg': {
        width: '1rem',
      },
    },
  },
}));

export default useStyles;
