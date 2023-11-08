import { useRef, useState } from "react";
import { useGame } from "../../../../hooks/useGame";
import { Container, TitleContainer, Title, InputContainer, ScoreInput, ScoreContainer } from "./styles";
import { View } from "react-native";
import { PinBoard } from "../PinBoard";
import { Scores } from "../Scores";
import { ScoreProgress } from "../ScoreProgress";
import { SplitButton } from "../SplitButton";

export function Board() {
  const inputFirstShot = useRef(null);
  const inputSecondShot = useRef(null);
  const [isSplit, setIsSplit] = useState(false);

  const { currentFrame, openNumPad, setSplit } = useGame();

  function resetInputs() {
    inputFirstShot.current?.blur();
    inputSecondShot.current?.blur();
  }

  const onFocusEmitter = (inputNumber: number) => {
    openNumPad(inputNumber);
    resetInputs();
  }

  function shouldBlockSecondInput() {
    // Check if the frame is the last one
    // To-Do: Check if the frame is the last one and the first shot is a strike
    if(currentFrame.frame_number === 10) return false;
    if(currentFrame.first_shot === null) return true;
    if(currentFrame.first_shot === 10) return true;
    return false;
  }

  const formatFrameFirstShot = () => {
    if(currentFrame.first_shot === null) {
      return '';
    }
    if(currentFrame.first_shot === 10) {
      return 'X';
    }
    if(currentFrame.first_shot === 0) {
      return '-';
    }
    return currentFrame.first_shot.toString();
  }

  const formatFrameSecondShot = () => {
    if(currentFrame.first_shot === null) return ''
    if(currentFrame.second_shot === null) return '';

    if((currentFrame.first_shot + currentFrame.second_shot) === 10) {
      return '/';
    }
    if(currentFrame.second_shot === 0) {
      return '-';
    }
    return currentFrame.second_shot.toString();
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Frame {currentFrame.frame_number}</Title>
      </TitleContainer>
      <InputContainer>
        <ScoreInput
          ref={inputFirstShot}
          showSoftInputOnFocus={false}
          onFocus={() => onFocusEmitter(1)}
          selectionColor={'transparent'}
          value={formatFrameFirstShot()}
        />
        <ScoreInput
          ref={inputSecondShot}
          showSoftInputOnFocus={false}
          onFocus={() => onFocusEmitter(2)}
          selectionColor={'transparent'}
          value={formatFrameSecondShot()}
          editable={!shouldBlockSecondInput()}
          style={{
            opacity: shouldBlockSecondInput() ? 0.5 : 1
          }}
        />
        {(currentFrame.frame_number === 10) && (currentFrame.first_shot === 10 || ((Number(currentFrame.first_shot) + Number(currentFrame.second_shot) === 10))) ?
          (<ScoreInput></ScoreInput>)
            :
            null
        }
      </InputContainer>
      <SplitButton
        onPress={() => setSplit(currentFrame.is_split ? false : true)}
        disabled={currentFrame.first_shot === null}
      />
      {currentFrame.is_split ? (
        <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <PinBoard />
        </View>
      ): null}

      <ScoreContainer>
        <ScoreProgress />
        <Scores />
      </ScoreContainer>


    </Container>
  )
}
