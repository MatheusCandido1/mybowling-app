import { useGame } from "../../../../hooks/useGame";
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
    if(shouldShowSplit) return 'Set Split';

    else {
      return `Split: ${currentFrame.split === null ? '' : currentFrame.split}`;
    }
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
          width: shouldShowSplit ? '100%': 'auto',
        }}
      >
        <SplitButtonText>
          {getLabel()}
        </SplitButtonText>
      </SplitButtonContainer>
    </SplitContainer>
  )
}
