import React from 'react';

export type TThemeVal = { theme?: string, buttonTheme?: string }
export type TThemeSet = { toggleTheme?:() => {}, toggleButtonTheme?:() => {} }

const init = { toggleTheme: ()=>{return{}}};
export const ThemeContext = React.createContext<TThemeVal>( {theme: 'default'} );
export const ThemeContextSetter = React.createContext<TThemeSet>(init);