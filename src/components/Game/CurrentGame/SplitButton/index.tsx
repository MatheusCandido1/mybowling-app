import { useGame } from "../../../../hooks/useGame";
import { Pin2Icon } from "../../../Icons/Pin2Icon";
import { PinIcon } from "../../../Icons/PinIcon";
import { ThreePinIcon } from "../../../Icons/ThreePinIcon";
import { SplitContainer, SplitButtonContainer, SplitButtonText } from "./styles";

interface SplitButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

export function SplitButton({ onPress, disabled }: SplitButtonProps) {

  const { currentFrame } = useGame();

  const shouldShowSplit = currentFrame.is_split === null || currentFrame.is_split === false;

  function getLabel() {
    if(shouldShowSplit) return 'Show Pins';
    return 'Hide Pins';
  }

  return (
    <SplitContainer
      onPress={onPress}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1
      }}
    >
      <SplitButtonContainer
        style={{
          width: 'auto'
        }}
      >
        <SplitButtonText>
          {getLabel()}
        </SplitButtonText>
        <PinIcon
          height={20}
          width={20}
          color={"#0d9488"}
        />
      </SplitButtonContainer>
    </SplitContainer>
  )
}
