import { useState, createContext, useRef, Ref } from "react";
import { IFrame } from "../entities/Frame";
import Toast from 'react-native-toast-message';

interface GameContextData {
  frames: IFrame[];
  currentFrame: IFrame;
  handleCurrentFrame: (frame: IFrame) => void;
  isNumPadVisible: boolean;
  openNumPad: (inputNumber: number) => void;
  closeNumPad: () => void;
  updateValueForCurrentFrame: (value: string) => void;
  setSplit: (newValue: boolean) => void;
  framesList: any;
  setSplitValue: (newValue: string) => void;
  score: number;
  max: number;
}

export const GameContext = createContext({} as GameContextData);


export function GameProvider({ children }: { children: React.ReactNode }) {
  const [frames, setFrames] = useState<IFrame[]>([
    {frame_number: 1, status: 'in_progress', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 2, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 3, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 4, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 5, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 6, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 7, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 8, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 9, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
    {frame_number: 10, status: 'pending', first_shot: null, second_shot: null, third_shot: null, points: 0, score: 0, split: null, is_split: null},
  ]);
  const [isNumPadVisible, setIsNumPadVisible] = useState(false);
  const [currentFrame, setCurrentFrame] = useState<IFrame>(frames[0]);
  const [currentInputNumber, setCurrentInputNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [max,] = useState(300);

  const framesList = useRef(null);

  function openNumPad(inputNumber: number) {
    setCurrentInputNumber(inputNumber);
    setIsNumPadVisible(true);
  }

  function closeNumPad() {
    setIsNumPadVisible(false);
  }


  function calculateScore() {
    const newFrames = [...frames];
    let totalScore = 0;

    newFrames.forEach((frame, index) => {
      const nextFrame = newFrames[index + 1];
      const nextNextFrame = newFrames[index + 2];

      if (isStrike(frame)) {
        frame.score = 10;
        if (nextFrame) {
          if (isStrike(nextFrame)) {
            frame.score += 10;
            if (nextNextFrame) {
              frame.score += 10;
            }
          } else {
            frame.score += (nextFrame.first_shot || 0) + (nextFrame.second_shot || 0);
          }
        }
      } else if (isSpare(frame)) {
        frame.score = 10;
        if (nextFrame) {
          frame.score += nextFrame.first_shot || 0;
        }
      } else if (isFrameOpen(frame)) {
        frame.score = (frame.first_shot || 0) + (frame.second_shot || 0);
      }

      // Accumulate the total score
      totalScore += frame.score;

      // Update the frame in the newFrames array
      frame.score = totalScore;
      newFrames[index] = frame;
      setScore(totalScore);
    });

    setFrames(newFrames);
  }

  function moveFrameToNext(index: number) {
    framesList?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  }



  function isStrike(frame: IFrame) {
    return frame.first_shot === 10;
  }

  function isSpare(frame: IFrame) {
    return Number(frame.first_shot) + Number(frame.second_shot) === 10;
  }

  function isFrameOpen(frame: IFrame) {
    return !isStrike(frame) && !isSpare(frame);
  }

  function setSplit(newValue: boolean) {
    const newFrames = [...frames];
    const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
    if(newValue === false) {
      newFrames[index].is_split = false;
      newFrames[index].split = null;
    } else {
      newFrames[index].is_split = true;
    }

    setFrames(newFrames);
  }

  function setSplitValue(newValue: string) {
    const newFrames = [...frames];
    const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
    newFrames[index].split = newValue;
    setFrames(newFrames);
  }

  function updateValueForCurrentFrame(value: string) {
    if(currentInputNumber === 1) {
      const newFrames = [...frames];
      const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
      newFrames[index].first_shot = parseInt(value === "Strike" ? "10" : value);

      if(parseInt(value) === 10 || value === "Strike") {
        moveFrameToNext(currentFrame.frame_number);
        newFrames[index].status = 'completed';
        newFrames[index+1].status = 'in_progress';
        setCurrentFrame(newFrames[index+1]);
      }

      setFrames(newFrames);
    }

    if(currentInputNumber === 2) {
      const newFrames = [...frames];
      const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
      newFrames[index].second_shot = parseInt(value === "Spare" ? (10 - Number(newFrames[index].first_shot)).toString() : value);

      if(value === "Spare" && currentFrame.is_split && currentFrame.split !== null) {
        Toast.show({
          type: 'success',
          text1: 'Split Converted',
          text2: `Wow! You converted a ${currentFrame.split} split! Amazing job!`,
          visibilityTime: 3000,
          autoHide: true,
        })
      }

      newFrames[index].status = 'completed';
      newFrames[index+1].status = 'in_progress';

      if(index < 9) {
        moveFrameToNext(currentFrame.frame_number);
        setCurrentFrame(newFrames[index+1]);
      }
      setFrames(newFrames);
    }
    closeNumPad();
    calculateScore();
  }



  function setAllFramesToPending() {
    const newFrames = [...frames];
    // change status of all frames to pending but keep the completed ones
    newFrames.forEach(frame => {
      if(frame.status !== 'completed') {
        frame.status = 'pending';
      }
    });

    setFrames(newFrames);
  }

  function handleCurrentFrame(frame: IFrame) {
    setAllFramesToPending();
    // change status of current frame to completed
    const index = frames.findIndex(f => f.frame_number === frame.frame_number);
    const newFrames = [...frames];
    newFrames[index].status = 'in_progress';

    setFrames(newFrames);
    setCurrentFrame(frame);
  }

  return (
    <GameContext.Provider
      value={{
        frames,
        currentFrame,
        handleCurrentFrame,
        isNumPadVisible,
        openNumPad,
        closeNumPad,
        updateValueForCurrentFrame,
        setSplit,
        framesList,
        setSplitValue,
        score,
        max
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
