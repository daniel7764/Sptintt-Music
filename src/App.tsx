import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import useStyles from 'AppStyles';

import NavBar from 'components/NavBar/NavBar';
import MainPage from 'components/MainPage/MainPage';
import SelectedPageProvider from 'Context/SelectedPageContext/SelectedPageContext';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Rubik'
    ].join(','),
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <SelectedPageProvider>
          <NavBar />
          <MainPage />
        </SelectedPageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
