import React, { useState, useEffect, useRef } from 'react';

export default function TypewriterHeading({ 
  text, 
  className = '', 
  as = 'h2', 
  showLine = true, 
  speed = 45 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true);
        } else {
          setIsTyping(false);
          setDisplayedText('');
          setTypingComplete(false);
        }
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedText('');
      setTypingComplete(false);
      return;
    }

    let index = 0;
    setTypingComplete(false);

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setTypingComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [isTyping, text, speed]);

  const Tag = as;

  return (
    <Tag ref={headingRef} className={`about-heading-animated ${className}`}>
      {displayedText}
      <span className={`typing-cursor ${typingComplete ? 'cursor-blink' : ''}`}>|</span>
      {showLine && <span className="about-heading-line"></span>}
    </Tag>
  );
}
