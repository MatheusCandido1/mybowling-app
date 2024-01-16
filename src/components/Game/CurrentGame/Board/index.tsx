import { useRef } from "react";
import { useGame } from "../../../../hooks/useGame";
import { Container, TitleContainer, Title, InputContainer, ScoreInput, ScoreContainer, PinsBadgeText, PinsBadge } from "./styles";
import { View } from "react-native";
import { PinBoard } from "../PinBoard";
import { Scores } from "../Scores";
import { formatFrameFirstShot, formatFrameSecondShot, formatFrameThirdShot } from "../../../../utils/formatScore";
import { isDeviceSmall, isDeviceSmallMedium } from "../../../../utils/deviceDimensions";
import { isSplit } from "../../../../utils/splitHelper";

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

  function shouldBlockThirdInput() {
    if(currentFrame.second_shot === null) return true;
    return false;
  }


  return (
    <Container
      scrollEnabled={isDeviceSmall || isDeviceSmallMedium}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
    >
      <TitleContainer>
        <Title>Frame {currentFrame.frame_number}</Title>
        <PinsBadge
          style={{
            backgroundColor: isSplit(currentFrame.pins) ? '#0D9488' : '#FFF',
            shadowColor: isSplit(currentFrame.pins) ? '#0D9488' : '#000',
            shadowOffset: { width: 0, height: isSplit(currentFrame.pins) ? 4 : 0 },
            shadowOpacity: isSplit(currentFrame.pins) ? 0.4 : 0,
            shadowRadius: isSplit(currentFrame.pins) ? 4 : 0,
            borderWidth: 2,
            borderColor: isSplit(currentFrame.pins) ? '#0D9488' : '#0D9488',
          }}
        >
          <PinsBadgeText
            style={{
              color: isSplit(currentFrame.pins) ? '#FFF' : '#0D9488',
            }}
          >
            {isSplit(currentFrame.pins) ? "Split" : "Pins"}: {currentFrame.pins}
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
              editable={!shouldBlockThirdInput()}
              style={{
                opacity: shouldBlockThirdInput() ? 0.5 : 1
              }}
            />
          )
          :
          null
        }
      </InputContainer>
        <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 220,
          marginBottom: 32,
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
