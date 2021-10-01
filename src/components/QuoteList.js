import React, { useEffect, useState } from 'react';
import { getAllQuotes } from '../modules/QuoteManager';
import { QuoteCard } from './QuoteCard';

export const QuoteList = () => {
    // The initial state is an empty array
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState([]);
    const getQuotes = () => {
        // After the data comes back from the API, we
        //  use the setQuotes function to update state
        return getAllQuotes().then(quotesFromAPI => {
            // gets all quotes and sets "quotes"
            setQuotes(quotesFromAPI)
            
        });
    };

    const handleNewQuote = (allQuotes) => {
        setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length)])
    }

    // got the quotes from the API on the component's first render
    useEffect(() => {
        getQuotes();
    }, []);
    //Finally we use .map() to "loop over" the quotes array to show a quote
    return (
        <div className="quote-card">
            {quotes.length > 0 ? <QuoteCard quote={quote} /> : <p>There are no quotes.</p>}
            <button type="button" onClick={() => handleNewQuote(quotes)}>Show Another</button>
        </div>
    );
};