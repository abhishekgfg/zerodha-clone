import { Children, createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useData = ()=>{
    return useContext(DataContext);
}
export const DataContextProvider = ({children})=>{
    const [apiData,setApiData] = useState([]);
    return <DataContext.Provider value={{apiData,setApiData}}>
        {children}
    </DataContext.Provider>
}
