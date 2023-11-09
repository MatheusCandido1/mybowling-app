import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const HeroContainer = styled.View`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 40px;
`;

export const TextContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 0px;
`;

export const Title = styled.Text`
  color: #253237;
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #253237;
  text-align: center;
  margin-top: 8px;
`;

export const Form = styled.View`
  margin-top: 16px;
  gap: 8px;
`;

export const Footer = styled.View`

`;

export const CreateAccountLink = styled.TouchableOpacity`
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CreateAccountLinkText = styled.Text`
  color: #0d9488;
  font-weight: bold;
`;

export const SocialButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
