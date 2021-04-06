import { useContext } from 'react';

import useStyles from './MainPageStyles';

import { NavBarItem } from 'Models/NavBarItem';
import { SelectedPageContextType } from 'Context/SelectedPageContext/SelectedPageContextType';
import { allNavBarItems, SelectedPageContext } from 'Context/SelectedPageContext/SelectedPageContext';

const MainPage = (): JSX.Element => {
    const classes = useStyles();
    const { selectedNavBarItem } = useContext(SelectedPageContext) as SelectedPageContextType;

    return (
        <div className={classes.page}>
            {allNavBarItems.find((navItem: NavBarItem) => navItem.id === selectedNavBarItem)?.displayComponent}
        </div>
    );
}

export default MainPage;