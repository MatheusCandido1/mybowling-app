import { Image } from "react-native";
import Avatar2Svg from "../../../assets/img/avatar2.svg";
import { Container } from "./styles";

interface AvatarProps {
  imageUri?: string;
  size?: number;
}

export function Avatar({ imageUri, size }: AvatarProps) {
  //const uri = imageUri ? imageUri : AvatarSvg;

  return (
    <Container
      style={{
        width: size ? size : 30,
        height: size ? size : 30,
      }}
    >
      {imageUri ? (
        <Image
          source={{
            uri: imageUri,
          }}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          borderRadius={size ? size / 2 : 15}
        />
      ) : (
        <Avatar2Svg />
      )}
    </Container>
  )
}
