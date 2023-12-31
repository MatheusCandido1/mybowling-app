import { FlatList, Text, View } from "react-native";
import { Container, BallContainer, Label, IconContainer, HelperText} from "./styles";
import { Ball2Icon } from "../../../Icons/Ball2Icon";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IBall } from "../../../../entities/Ball";
import { ErrorFeedbackInput } from "../ErrorFeedbackInput";
import { formatBallName } from "../../../../utils/formatBallName";
import { useBalls } from "../../../../hooks/useBalls";


interface BallSelectInputProps {
  label: string;
  error?: string;
  onChange?(value: string, item: IBall): void;
  value?: string | null;
}

export function BallSelectInput({ label, error, onChange, value }: BallSelectInputProps) {
  const { balls } = useBalls();

  const [selectedBall, setSelectedBall] = useState<IBall | null>(() => {
    if (value === null || value === undefined) {
      resetSelectedBall();
      return undefined; // Set the input to its default state
    } else {
      const foundBall = balls.find((b: IBall) => b.id === value.id);
      return foundBall || null;
    }
  });

  function resetSelectedBall() {
    if(selectedBall?.id) {
      setSelectedBall(null);
      return;
    }
  }

  function handleSelectBall(ball: IBall) {
    if(selectedBall?.id === ball.id) {
      setSelectedBall(null);
      return;
    }
    setSelectedBall(ball);
    onChange?.(ball.id.toString(), ball);
  }

  function getColor(ball: IBall) {
    const defaultColor = '#0d9488'
    if((selectedBall?.color === defaultColor) && (ball.color === defaultColor)) {
      return '#FFF'
    } else {
      return ball.color
    }
  }

  return (
    <Container>
      {!selectedBall ? (
        <Label>{label}</Label>
      ): (
        <Label>{label}: {formatBallName(selectedBall)}</Label>
      )}
      <FlatList
        data={balls}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        renderItem={({ item }) => (
          <BallContainer
            onPress={() => handleSelectBall(item)}
            style={{
              backgroundColor: selectedBall?.id === item.id ? '#0d9488': '#FFF'
            }}
          >
            <Ball2Icon
              height={32}
              width={32}
              color={getColor(item)}
            />
            {selectedBall?.id === item.id && (
            <IconContainer>
              <MaterialCommunityIcons
              name="check"
              size={20}
              color="#FFF"
              />
            </IconContainer>
            )}
          </BallContainer>
        )}
      />
      <ErrorFeedbackInput error={error} />
    </Container>
  )
}
