import {createContext} from 'react';

export const NotContext = createContext();

export const NotContextProvider=({childeren})=>{

    return(
<NotContext.Provider>
    {childeren}
</NotContext.Provider>
    )
}