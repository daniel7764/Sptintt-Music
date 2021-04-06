import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    navContainer: {
        height: '93vh',
        width: '16vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    logo: {
        height: '5vh',
        width: '5vw',
        margin: '5vh 0 0 5vw',
    },
    navBar: {
        height: '100%',
        width: '100%',
        margin: '3vh 0 0 3vw',
    },
    item: {
        marginBottom: '2vh',
        borderRadius: '9px',
        width: '10vw',
        '&:hover': {
            backgroundColor: 'rgba(29,185,84,0.15)'
        },
    },
    selectedItem: {
        '&.Mui-selected': {
            backgroundColor: 'rgba(29,185,84,0.15)'
        },
    },
});

export default useStyles;