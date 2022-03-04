import React, {createContext, useState} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [quoteText, setQuoteText] = useState(' ');
    const [author, setAuthor] = useState(' ');
    const [recordArray, setRecordArray] = useState(['0']); 

    return (
        <Context.Provider value ={{
            quoteTxt: [quoteText, setQuoteText],
            auth: [author, setAuthor],
            recordArr: [recordArray, setRecordArray]
        }}>
            {props.children}
        </Context.Provider>
    );
};