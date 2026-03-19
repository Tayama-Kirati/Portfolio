import { useState, useEffect, useRef } from 'react';
 
export function useTypewriter(words, typeSpeed = 80, deleteSpeed = 40, pauseMs = 1800) {
  const [text, setText] = useState('');
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;

    const tick = () => {
      const current = words[wordIdx.current];

      if (!deleting.current) {
        if (charIdx.current < current.length) {
          charIdx.current += 1;
          setText(current.slice(0, charIdx.current));
          timer = setTimeout(tick, typeSpeed);
        } else {
          timer = setTimeout(() => {
            deleting.current = true;
            tick();
          }, pauseMs);
        }
      } else {
        if (charIdx.current > 0) {
          charIdx.current -= 1;
          setText(current.slice(0, charIdx.current));
          timer = setTimeout(tick, deleteSpeed);
        } else {
          deleting.current = false;
          wordIdx.current = (wordIdx.current + 1) % words.length;
          timer = setTimeout(tick, typeSpeed);
        }
      }
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
     
  }, []);

  return text;
}