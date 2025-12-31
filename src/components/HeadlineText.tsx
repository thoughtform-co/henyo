import React from 'react';
import { HenyoTooltip } from './HenyoTooltip';

interface HeadlineTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  progress: number; // 0 to 1, determines how many words are black
}

export function HeadlineText({ text, className = '', style = {}, progress }: HeadlineTextProps) {
  const words = text.split(' ');
  const totalWords = words.length;
  
  return (
    <h2 className={className} style={style}>
      {words.map((word, index) => {
        // Calculate if this word should be black based on progress
        const wordProgress = index / totalWords;
        const isBlack = progress >= wordProgress;
        
        // Smooth transition for the current word being animated
        const wordTransitionStart = wordProgress;
        const wordTransitionEnd = (index + 1) / totalWords;
        let color = isBlack ? '#000000' : '#888888';
        
        // If we're in the transition zone for this word, interpolate color
        if (progress >= wordTransitionStart && progress < wordTransitionEnd) {
          const wordLocalProgress = (progress - wordTransitionStart) / (wordTransitionEnd - wordTransitionStart);
          const greyValue = 0x88;
          const blackValue = 0x00;
          const currentValue = Math.round(greyValue - (greyValue - blackValue) * wordLocalProgress);
          const hexValue = currentValue.toString(16).padStart(2, '0');
          color = `#${hexValue}${hexValue}${hexValue}`;
        }
        
        // Check if this word is "Henyo" (case insensitive, and check if it's the first occurrence)
        const isHenyo = word.toLowerCase() === 'henyo' || word.toLowerCase() === 'henyo.';
        const cleanWord = word;
        
        return (
          <span 
            key={index}
            style={{ 
              color, 
              transition: 'color 0.3s ease-out',
              display: 'inline-block',
              marginRight: index < words.length - 1 ? '0.35em' : '0'
            }}
          >
            {isHenyo && index === 0 ? (
              <HenyoTooltip>{cleanWord}</HenyoTooltip>
            ) : (
              cleanWord
            )}
          </span>
        );
      })}
    </h2>
  );
}