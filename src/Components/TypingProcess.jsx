import React from 'react';

const TypingProcess = ({event, maxTime, timeLeft, mistakes, charIndex, isTyping, setIsTyping, setCharIndex, setMistakes, setWPM, setCPM}) => {
    let characters = document.querySelectorAll('.char');
    let inputChar = event.target.value;

    if (charIndex < characters.length && timeLeft > 0) {
        // handling spaces
        if (characters[charIndex] === '_') {
            return characters[charIndex] === ' ';
        }

        // Start the typing process if not started yet
        if (!isTyping) {
            setIsTyping(true);
        }

        // Handle Correct Input
        if (inputChar === characters[charIndex]) {
            setCharIndex(charIndex + 1);
            if (charIndex + 1 < characters.length) {
                characters[charIndex].classList.remove('active');
                characters[charIndex + 1].classList.add('active');
                characters[charIndex].classList.add('correct');
            }
        } else {
            // handling Wrong Input
            setCharIndex(charIndex + 1);
            setMistakes(mistakes + 1);
            characters[charIndex].classList.remove('active');

            if (charIndex + 1 < characters.length) {
                characters[charIndex + 1].classList.add('active');
                characters[charIndex].classList.add('wrong');
            }
        }

        // End of typing process
        if (characters[charIndex] === characters.length - 1) {
            setIsTyping(false);
        }

        // Calculate WPM
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm === Infinity || !wpm || wpm < 0 ? 0 : wpm;
        setWPM(wpm);

        // calculate CPM
        let cpm = (charIndex - mistakes - 1) * (60 / (maxTime - timeLeft));
        cpm = cpm === Infinity || !cpm || cpm < 0 ? 0 : cpm;
        setCPM(parseInt(cpm, 10));
    } else {
        setIsTyping(false);
    };
};

export default TypingProcess;