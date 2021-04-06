import React from 'react';

export interface SelectedPageContextType {
    selectedNavBarItem: Number,
    setSelectedNavBarItem: React.Dispatch<React.SetStateAction<Number>>;

}