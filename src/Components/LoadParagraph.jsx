import React from "react";

const LoadParagraph = ({ paragraphs, setInputFieldValue, setMistakes, setIsTyping, setTypingText, setCharIndex }) => {
    const randomIndex = Math.trunc(Math.random * paragraphs.length);
    const inputField = document.getElementById('demo');
    document.addEventListener('keydown', inputField.focus());

    const content = Array.from(paragraphs(randomIndex)).map((letter, index) => {
        return (
            <span
            key = {index}
            className = {`char ${index === 0 ? 'active' : ''}`}
            style={{
                color: letter !== ' ' ? 'black' : 'transparent'
            }}
            >
                {letter !== ' ' ? {letter} : '_'}
            </span>
        )
    })

    setInputFieldValue('');
    setIsTyping(false);
    setTypingText(content);
    setCharIndex(0);
    setMistakes(0);
};

export default LoadParagraph;