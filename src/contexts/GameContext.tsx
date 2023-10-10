import { createContext, useEffect, useRef, useState } from "react";
import { IFrame } from "../entities/Frame";

interface GameContextData {
  frames: IFrame[];
  currentFrame: IFrame | undefined;
  isNumPadVisible: boolean;
  openNumPad: () => void;
  closeNumPad: () => void;
  input1: string;
  input2: string;
  updateFrameValue: (value: string) => void;
  calculateFrame: (currentFrame: IFrame | undefined, frameIndex: number | undefined) => number;
  startNewGame: () => void;
  resetGame: () => void;
}

export const GameContext = createContext({} as GameContextData);

const initialFrames: IFrame[ ] = Array.from({ length: 10 }, (_, i) => ({
  frameNumber: i + 1,
  isStrike: false,
  isSpare: false,
  currentScore: 0,
  firstBall: {
    pins: undefined,
    thrown: false
  },
  secondBall: {
    pins: undefined,
    thrown: false,
  },
  thirdBall: {
    pins: undefined,
    thrown: false,
  },
  points: 0,
  status: i === 0 ? 'IN_PROGRESS':'WAITING',
  split: '',
}));


export function GameProvider({ children }: { children: React.ReactNode }) {

  const [frames, setFrames] = useState<IFrame[]>(initialFrames);
  const [isNumPadVisible, setIsNumPadVisible] = useState(false);

  const currentFrame = frames.find(f => f.status === 'IN_PROGRESS');

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  function openNumPad() {
    setIsNumPadVisible(true);
  }

  function closeNumPad() {
    setIsNumPadVisible(false);
  }

  function startNewGame() {
    setFrames(initialFrames);
  }

  function resetGame() {
    setFrames([]);
  }



  function calculateScorePerFrame() {
    const updatedFrames = frames.map((frame: IFrame, index) =>  {
      const prevFrame = frames[index - 1];
      const val = prevFrame ? prevFrame.currentScore : 0;

      if (frame.isStrike) {
        return { ...frame, currentScore: val + 10 + calculateFrame(frame, index + 1) };
      } else if (frame.isSpare) {
        return { ...frame, currentScore: val + 10 + calculateFrame(frame, index + 1) };
      } else {
        return { ...frame, currentScore: val + calculateFrame(frame, index + 1) };
      }
    })
    // Update the frames array with the updatedFrames
    setFrames(updatedFrames);
  }

  function updateFrameValue(value: string) {
    calculateScorePerFrame();
    setFrames(prevFrames => {
      const updatedFrames = [...prevFrames];

      // Find the frame with 'IN_PROGRESS' status
      const currentFrameIndex = updatedFrames.findIndex(
        frame => frame.status === 'IN_PROGRESS'
      );

      if (currentFrameIndex !== -1) {
        const currentFrame = updatedFrames[currentFrameIndex];

        if(value === 'Delete') {
          if (currentFrame.firstBall.thrown) {
            updatedFrames[currentFrameIndex] = {
              ...currentFrame,
              firstBall: { ...currentFrame.firstBall, pins: 0, thrown: false },
            };

          } else if (currentFrame.secondBall.thrown) {
            updatedFrames[currentFrameIndex] = {
              ...currentFrame,
              secondBall: { ...currentFrame.secondBall, pins: 0, thrown: false },
            };
          }
          return updatedFrames;
        }

        // If this is the first ball
        else if (!currentFrame.firstBall.thrown) {
          closeNumPad();
          if (value === 'Strike') {

            const prevFrame = frames[currentFrameIndex - 1];
            const value = prevFrame ? prevFrame.currentScore : 0;

            // Calculate the current score
            let score = 10;
            if(updatedFrames[currentFrameIndex].frameNumber <= 8) {
              if(updatedFrames[currentFrameIndex+1].status === 'COMPLETED') {
                score += updatedFrames[currentFrameIndex+1].points;
              }
              if(updatedFrames[currentFrameIndex+2].status === 'COMPLETED') {
                score += updatedFrames[currentFrameIndex+2].points;
              }
            }

             // Update the current frame for a strike
             updatedFrames[currentFrameIndex] = {
              ...currentFrame,
              isStrike: true,
              points: 10,
              firstBall: { ...currentFrame.firstBall, pins: 10, thrown: true },
              status: 'COMPLETED',
              currentScore: 10
            };


            // Check if there's a next frame
            const nextFrameIndex = currentFrameIndex + 1;
            if (nextFrameIndex < updatedFrames.length) {
              // Update the next frame to "IN_PROGRESS"
              updatedFrames[nextFrameIndex] = {
                ...updatedFrames[nextFrameIndex],
                status: 'IN_PROGRESS',
              };
            }
          } else {
            // Update the current frame for a non-strike first ball
            updatedFrames[currentFrameIndex] = {
              ...currentFrame,
              points: Number(value),
              firstBall: { ...currentFrame.firstBall, pins: Number(value), thrown: true },

            };
          }
        } else if (!currentFrame.secondBall.thrown) {
          // If this is the second ball
          closeNumPad();
          if (value === 'Spare') {
            // Update the current frame for a spare
            updatedFrames[currentFrameIndex] = {
              ...currentFrame,
              isSpare: true,
              points: 10,
              secondBall: { ...currentFrame.secondBall, pins: (10 - Number(currentFrame.firstBall.pins)), thrown: true },
              status: 'COMPLETED',
            };

          } else {
            // Update the current frame for a non-spare second ball
            updatedFrames[currentFrameIndex] = {
              ...currentFrame,
              points: Number(currentFrame.firstBall.pins) + Number(value),
              secondBall: { ...currentFrame.secondBall, pins: Number(value), thrown: true },
              status: 'COMPLETED',
            };
          }
           // Check if there's a next frame
           const nextFrameIndex = currentFrameIndex + 1;
           if (nextFrameIndex < updatedFrames.length) {
             // Update the next frame to "IN_PROGRESS"
             updatedFrames[nextFrameIndex] = {
               ...updatedFrames[nextFrameIndex],
               status: 'IN_PROGRESS',
             };
           }
        }
      }
      return updatedFrames;
    });
  }

  function calculateFrame(currentFrame: IFrame | undefined, frameIndex: number | undefined) {
    if(currentFrame !== undefined && frameIndex !== undefined) {
      if(currentFrame.frameNumber === 10) {
          if(currentFrame.firstBall.pins === 10) {
              return 10 + currentFrame.firstBall.pins + (currentFrame.thirdBall?.pins || 0);
          }

          let semiTotal = (currentFrame.firstBall?.pins || 0) + (currentFrame.secondBall?.pins || 0);
          if(semiTotal === 10) {
              return semiTotal + (currentFrame.thirdBall?.pins || 0)
          }

          if(semiTotal <= 9) {
              return semiTotal
          }
      }



      const nextFrame = frames[frameIndex]
      const nextNextFrame = frames[frameIndex+1]

      if(currentFrame.isStrike && currentFrame.status === 'COMPLETED') {
          if(nextFrame.isStrike && nextFrame.status === 'COMPLETED') {
              if(nextNextFrame.isStrike && nextNextFrame.status === 'COMPLETED') {
                  return 20;
              }
              if(nextNextFrame.isSpare && nextNextFrame.status === 'COMPLETED') {
                  return 10 + (nextNextFrame.firstBall.pins || 0)
              }
          }
          if(nextFrame.isSpare) {
              return 10
          }
      }
      if (currentFrame.isSpare) {
          if(!nextFrame.isSpare) {
              return nextFrame.firstBall.pins
          }
      }
      if(!currentFrame.isSpare && !currentFrame.isStrike) {
          return currentFrame.points
      }
    }
  }





  return (
    <GameContext.Provider
      value={{
        frames,
        currentFrame,
        isNumPadVisible,
        openNumPad,
        closeNumPad,
        input1,
        input2,
        updateFrameValue,
        calculateFrame,
        startNewGame,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
