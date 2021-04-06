import React, { useState, createContext } from 'react';

import { SelectedPageContextType } from './SelectedPageContextType';

import Home from 'components/Home/Home';
import homeIcon from 'assets/home_icon.png';
import { NavBarItem } from 'Models/NavBarItem';
import browseIcon from 'assets/browse_icon.png';
import likedIcon from 'assets/liked_songs_icon.png';
import BrowsePage from 'components/BrowsePage/BrowsePage';
import LikedSongs from 'components/LikedSongs/LikedSongs';

export const allNavBarItems: NavBarItem[] = [
    {
        id: 1,
        text: 'Home',
        displayComponent: <Home />,
        icon: homeIcon,
    }, 
    {
        id: 2,
        text: 'Browse',
        displayComponent: <BrowsePage />,
        icon: browseIcon,
    }, 
    {
        id: 3,
        text: 'Liked Songs',
        displayComponent: <LikedSongs />,
        icon: likedIcon,
    }
];

export const SelectedPageContext = createContext<SelectedPageContextType | null>(null);

const SelectedPageProvider: React.FC = ({ children }) => {
    const [selectedNavBarItem, setSelectedNavBarItem] = useState<Number>(1);

    return (
        <SelectedPageContext.Provider value={{selectedNavBarItem, setSelectedNavBarItem}}>
            { children }
        </SelectedPageContext.Provider>
    );
}

export default SelectedPageProvider;