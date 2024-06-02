import { IUser } from "../../../entities/User";
import { Avatar } from "../../Shared/Avatar";
import { FirstPlaceContainer, FirstPlacePosition, FirstPlacePositionText } from "./styles";

interface PlaceProps {
  position: number;
  avatar: string;
  score: number;
}

export function Place({ position, avatar, score }: PlaceProps) {

  function getStyle() {
    switch (position) {
      case 1:
        return {
          color: '#FFD700',
          imageSize: 114,
          size: 120,
        }
      case 2:
        return {
          color: '#C0C0C0',
          imageSize: 84,
          size: 90,
        }
      case 3:
        return {
          color: '#CD7F32',
          imageSize: 64,
          size: 70,
        }
      default:
        return {
          color: '#FFFFFF',
          imageSize: 64,
          size: 70,
        }
    }
  }



  return (
    <FirstPlaceContainer
      style={{
        borderColor: getStyle().color,
        width: getStyle().size,
        height: getStyle().size,
        borderRadius: getStyle().size / 2,
      }}
    >
      <Avatar
        imageUri={avatar}
        size={getStyle().imageSize}
       />
      <FirstPlacePosition
        style={{
          backgroundColor: getStyle().color,
        }}
      >
        <FirstPlacePositionText>{score}</FirstPlacePositionText>
      </FirstPlacePosition>
    </FirstPlaceContainer>
  )
}
