import { FlatList, Text, View } from "react-native";
import { Container, BallContainer, Label, IconContainer} from "./styles";
import { Ball2Icon } from "../../../Icons/Ball2Icon";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IBall } from "../../../../entities/Ball";
import { ErrorFeedbackInput } from "../ErrorFeedbackInput";


interface BallSelectInputProps {
  label: string;
  resetForm?: () => void;
  error?: string;
}

export function BallSelectInput({ label, resetForm, error }: BallSelectInputProps) {
  const [selectedBall, setSelectedBall] = useState<IBall | null>(null);

  function handleSelectBall(ball: IBall) {
    setSelectedBall(ball);
  }

  useEffect(() => {
    if(resetForm) {
      setSelectedBall(null);
    }
  }, []);

  function getColor(ball: IBall) {
    const defaultColor = '#0d9488'
    if((selectedBall?.color === defaultColor) && (ball.color === defaultColor)) {
      return '#FFF'
    } else {
      return ball.color
    }
  }

  const balls = [
    {
      id: 1,
      name: "Hammer",
      color: "#0d9488"
    },
    {
      id: 2,
      name: "Hammer",
      color: "#ff7a00"
    },
    {
      id: 3,
      name: "Hammer",
      color: "#971d6f"
    },
  ]


  return (
    <Container>
      <Label>{label}</Label>
      <FlatList
        data={balls}
        keyExtractor={item => String(item.id)}
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