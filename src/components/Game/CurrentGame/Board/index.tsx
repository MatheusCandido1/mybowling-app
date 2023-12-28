import { useRef, useState } from "react";
import { useGame } from "../../../../hooks/useGame";
import { Container, TitleContainer, Title, InputContainer, ScoreInput, ScoreContainer } from "./styles";
import { View } from "react-native";
import { PinBoard } from "../PinBoard";
import { Scores } from "../Scores";
import { ScoreProgress } from "../ScoreProgress";
import { SplitButton } from "../SplitButton";
import { formatFrameFirstShot, formatFrameSecondShot, formatFrameThirdShot } from "../../../../utils/formatScore";



export function Board() {
  const inputFirstShot = useRef(null);
  const inputSecondShot = useRef(null);
  const inputThirdShot = useRef(null);

  const [isSplit, setIsSplit] = useState(false);

  const { currentFrame, frames, openNumPad, setSplit } = useGame();

  function resetInputs() {
    inputFirstShot.current?.blur();
    inputSecondShot.current?.blur();
    inputThirdShot.current?.blur();
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
          value={formatFrameFirstShot(currentFrame)}
        />
        <ScoreInput
          ref={inputSecondShot}
          showSoftInputOnFocus={false}
          onFocus={() => onFocusEmitter(2)}
          selectionColor={'transparent'}
          value={formatFrameSecondShot(currentFrame)}
          editable={!shouldBlockSecondInput()}
          style={{
            opacity: shouldBlockSecondInput() ? 0.5 : 1
          }}
        />
        {(currentFrame.frame_number === 10) && (currentFrame.first_shot === 10 || ((Number(currentFrame.first_shot) + Number(currentFrame.second_shot) === 10))) ?
          (
            <ScoreInput
              ref={inputThirdShot}
              showSoftInputOnFocus={false}
              onFocus={() => onFocusEmitter(3)}
              selectionColor={'transparent'}
              value={formatFrameThirdShot(currentFrame)}
              editable={true}
              style={{
                opacity: shouldBlockSecondInput() ? 0.5 : 1
              }}
            />
          )
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
        <Scores
          frames={frames}
        />
      </ScoreContainer>


    </Container>
  )
}
