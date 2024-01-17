import { useState, createContext, useRef, useEffect } from "react";
import { IFrame } from "../entities/Frame";
import { useNavigation } from "@react-navigation/native";
import { IGame } from "../entities/Game";
import { isGameComplete } from "../utils/scoreHelper";
import { useMutation } from "@tanstack/react-query";
import { framesService } from "../services/frameService";
import { isSplit } from "../utils/splitHelper";

interface GameContextData {
  frames: IFrame[];
  currentFrame: IFrame;
  handleCurrentFrame: (frame: IFrame) => void;
  isNumPadVisible: boolean;
  openNumPad: (inputNumber: number) => void;
  closeNumPad: () => void;
  updateValueForCurrentFrame: (value: string) => void;
  framesList: any;
  setSplitValue: (newValue: string) => void;
  score: number;
  max: number;
  isGameDone: boolean;
  currentGame: IGame | null;
  handleSaveGame: () => void;
  handleNewGame: (data: any) => void;
  handleResumeGame: (game: IGame) => void;
  currentInputNumber: number;
  resetGame: () => void;
}

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: { children: React.ReactNode }) {

  const [currentGame, setCurrentGame] = useState<IGame | null>(null);

  const [frames, setFrames] = useState<IFrame[]>([]);

  const [isNumPadVisible, setIsNumPadVisible] = useState(false);
  const [currentFrame, setCurrentFrame] = useState<IFrame>();
  const [currentInputNumber, setCurrentInputNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [max,] = useState(300);

  const framesList = useRef(null);

  const isGameDone = isGameComplete(frames);

  const navigation = useNavigation();

  function resetGame() {
    setCurrentGame(null);
    setIsNumPadVisible(false);
  }

  const { mutateAsync: updateFrame, isLoading } = useMutation({
    mutationFn: async (data: IFrame) => {
      return framesService.update(data);
    },
  })

  useEffect(() => {
    const newScore = calculateScore();
    setScore(newScore);
  }, [frames, setScore]);

  function handleSaveGame() {
    setCurrentGame(null);
    navigation.navigate('Dashboard');
  }

  function handleResumeGame(game: IGame) {
      setCurrentGame(game);
      const mostRecentFrame = game.frames.find(f => f.status === 'in_progress');
      if(!mostRecentFrame) {
        setCurrentFrame(game.frames[0]);
        setFrames(game.frames);
        moveFrameToNext(0);
      } else {
        setCurrentFrame(mostRecentFrame);

        setTimeout(() =>
          moveFrameToNext(mostRecentFrame!.frame_number - 1), 250
        );

        setFrames(game.frames);

      }
    /*
    */
  }

  function handleNewGame(data: any) {
    setFrames(data.frames);
    setCurrentFrame(data.frames[0]);
    setCurrentGame(data);
  }

  function openNumPad(inputNumber: number) {
    setCurrentInputNumber(inputNumber);
    setIsNumPadVisible(true);
  }

  function closeNumPad() {
    setIsNumPadVisible(false);
  }


  function calculateScore(): number {
    let totalScore = 0;

    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];

      if (frame.frame_number === 10) {
        totalScore += (frame.first_shot || 0) + (frame.second_shot || 0) + (frame.third_shot || 0);
      } else {
        if (isStrike(frame)) {
          totalScore += 10 + getStrikeBonus(frames, i);
        } else if (isSpare(frame)) {
          totalScore += 10 + getSpareBonus(frames, i);
        } else {
          totalScore += getOpenFrameScore(frame);
        }
      }

      frame.score = totalScore;
    }

    return totalScore;
  }

  function getStrikeBonus(frames: IFrame[], currentIndex: number): number {
    const nextFrame = frames[currentIndex + 1];
    const nextNextFrame = frames[currentIndex + 2];

    if (nextFrame) {
      if (isStrike(nextFrame)) {
        if (currentIndex === 8) {
          // In the 9th frame, calculate bonus for consecutive strikes in the last frame
          return 20 + (nextNextFrame ? nextNextFrame.first_shot || 0 : 0);
        } else {
          return 10 + (nextNextFrame ? nextNextFrame.first_shot || 0 : 0);
        }
      } else {
        return (nextFrame.first_shot || 0) + (nextFrame.second_shot || 0);
      }
    }

    return 0;
  }

  function getSpareBonus(frames: IFrame[], currentIndex: number): number {
    const nextFrame = frames[currentIndex + 1];
    return nextFrame ? nextFrame.first_shot || 0 : 0;
  }

  function getOpenFrameScore(frame: IFrame): number {
    return (frame.first_shot || 0) + (frame.second_shot || 0);
  }

  function moveFrameToNext(index: number) {
    if(index <= 9) {
      framesList?.current?.scrollToIndex({
        animated: true,
        index: index,
      });
    }
  }


  function isStrike(frame: IFrame) {
    return frame.first_shot === 10;
  }

  function isSpare(frame: IFrame) {
    return Number(frame.first_shot) + Number(frame.second_shot) === 10;
  }

  function setSplitValue(newValue: string) {
    const newFrames = [...frames];
    const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
    newFrames[index].pins = newValue;
    newFrames[index].is_split = isSplit(newValue);
    setFrames(newFrames);
  }

  function updateValueForCurrentFrame(value: string) {
    if(currentInputNumber === 1) {

      const newFrames = [...frames];
      const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);

      if(newFrames[index].first_shot !== null) {
        newFrames[index].first_shot = null;
        newFrames[index].second_shot = null;
        newFrames[index].pins = null;
        newFrames[index].is_split = false;
      }

      const first_shot = parseInt(value === "Strike" ? "10" : value);

      newFrames[index].first_shot = first_shot;

      if(first_shot === 10) {
        if(index === 9) {
          newFrames[index].status = 'in_progress';
        } else {
          newFrames[index].status = 'completed';
        }

        newFrames[index].points = 10;
        updateFrame(newFrames[index])

        if(index < 9) {
          newFrames[index+1].status = 'in_progress';
          setCurrentFrame(newFrames[index+1]);
          moveFrameToNext(currentFrame.frame_number);
        }
      }
      setFrames(newFrames);
    }

    if(currentInputNumber === 2) {
      const newFrames = [...frames];
      const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
      if(index === 9) {
        if(value === "Spare") {
          newFrames[index].second_shot = (10 - Number(newFrames[index].first_shot));
        } else {
          newFrames[index].second_shot = parseInt(value === "Strike" ? "10" : value);
        }

        const shouldAllowThirdShot = (currentFrame.first_shot === 10 || (Number(currentFrame.first_shot) + Number(currentFrame.second_shot) === 10));


        if(shouldAllowThirdShot) {
          newFrames[index].status = 'in_progress';
        } else {
          newFrames[index].status = 'completed';
        }
      } else {
        newFrames[index].second_shot = parseInt(value === "Spare" ? (10 - Number(newFrames[index].first_shot)).toString() : value);
        newFrames[index].status = 'completed';
      }

      newFrames[index].points = Number(newFrames[index].first_shot) + Number(newFrames[index].second_shot);
      updateFrame(newFrames[index])

      if(index <= 8) {
        newFrames[index+1].status = 'in_progress';
        moveFrameToNext(currentFrame.frame_number);
        setCurrentFrame(newFrames[index+1]);
      }
      setFrames(newFrames);
    }

    if(currentInputNumber === 3) {
      const newFrames = [...frames];
      const index = frames.findIndex(f => f.frame_number === currentFrame.frame_number);
      newFrames[index].third_shot = parseInt(value === "Strike" ? "10" : value)
      newFrames[index].status = 'completed';
      setFrames(newFrames);
      updateFrame(newFrames[index])
    }

    closeNumPad();
  }




  function handleCurrentFrame(frame: IFrame) {
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
        framesList,
        setSplitValue,
        score,
        isGameDone,
        max,
        handleSaveGame,
        handleNewGame,
        currentGame,
        handleResumeGame,
        currentInputNumber,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
