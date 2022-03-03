import React, {createContext, useState} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [quoteText, setQuoteText] = useState(' ');
    const [author, setAuthor] = useState(' ');

    return (
        <Context.Provider value ={{
            quoteTxt: [quoteText, setQuoteText],
            auth: [author, setAuthor]
        }}>
            {props.children}
        </Context.Provider>
    );
};