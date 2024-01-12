import { useRef } from "react";
import { useGame } from "../../../../hooks/useGame";
import { Container, TitleContainer, Title, InputContainer, ScoreInput, ScoreContainer, PinsBadgeText, PinsBadge } from "./styles";
import { View } from "react-native";
import { PinBoard } from "../PinBoard";
import { Scores } from "../Scores";
import { formatFrameFirstShot, formatFrameSecondShot, formatFrameThirdShot } from "../../../../utils/formatScore";
import { isDeviceSmall } from "../../../../utils/deviceDimensions";

export function Board() {
  const inputFirstShot = useRef(null);
  const inputSecondShot = useRef(null);
  const inputThirdShot = useRef(null);

  const { currentFrame, frames, openNumPad } = useGame();

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
    <Container
      scrollEnabled={isDeviceSmall}
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
    >
      <TitleContainer>
        <Title>Frame {currentFrame.frame_number}</Title>
        <PinsBadge>
          <PinsBadgeText>
            Pins {currentFrame.pins ?? ""}
          </PinsBadgeText>
        </PinsBadge>
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
        <View
        style={{
          marginTop: 24,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 220,
          marginBottom: 28,
        }}
        >
          <PinBoard />
        </View>
      <ScoreContainer>
        <Scores
          frames={frames}
        />
      </ScoreContainer>
    </Container>
  )
}
