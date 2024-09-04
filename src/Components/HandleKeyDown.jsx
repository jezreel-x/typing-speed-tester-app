import React from 'react';

const HandleKeyDown = ({ event, charIndex, timeLeft, setCharIndex, mistakes, maxTime, setCPM, setWPM }) => {
    const characters = document.querySelectorAll('.char');

    if (charIndex > 0 && charIndex < characters.length && event.key === 'Backspace' && timeLeft > 0) {
        // handling corrections
        if (characters[charIndex - 1].classList.contains('correct')) {
            characters[charIndex - 1].classList.remove('correct');
        }

        if (characters[charIndex - 1].classList.contains('wrong')) {
            characters[charIndex - 1].classList.remove('wrong');
        }

        // update active status of our current character index
        characters[charIndex].classList.remove('active');
        characters[charIndex - 1].classList.add('active');
        setCharIndex(charIndex - 1);

        // cpm calculation
        let cpm = (charIndex - mistakes - 1) * (60 / (maxTime - timeLeft));
        cpm = cpm === Infinity || !cpm || cpm < 0 ? 0 : cpm;
        setCPM(parseInt(cpm, 10));

        // wpm calculation
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm === Infinity || !wpm || wpm < 0 ? 0 : wpm;
        setWPM(wpm);
    };
};

export default HandleKeyDown;