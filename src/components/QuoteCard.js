import React from "react"

export const QuoteCard = ({ quote }) => {
    return (
        <section className="quote">
            <h3 className="quote__name">{quote.text}</h3>
            <h5 className="quote__author">{quote.author}</h5>
        </section>
    );
}