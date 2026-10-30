import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  character: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ character, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{character}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {character}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  // Calculate total characters across all words for accurate scroll mapping
  const words = text.split(" ");
  let runningCharCount = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`${className} break-normal text-balance`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        const wordStartIndex = runningCharCount;
        runningCharCount += word.length + 1; // +1 for the space

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charIdx) => {
                const globalIndex = wordStartIndex + charIdx;
                const start = globalIndex / totalChars;
                const end = (globalIndex + 1) / totalChars;
                return (
                  <Char
                    key={charIdx}
                    character={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {wordIdx < words.length - 1 && <span>&nbsp;</span>}
          </React.Fragment>
        );
      })}
    </p>
  );
};
