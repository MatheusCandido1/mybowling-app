import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const HeroContainer = styled.View`
  width: 100%;
  height: 225px;
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
  margin-top: 12px;
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const InitalFormContainer = styled.View`
  width: 100%
`;

export const ValidationCodeContainer = styled.View`
  width: 100%
`;

export const SingleDigitContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SingleDigitInput = styled.TextInput`
  width: 46px;
  height: 46px;
  border: 2px solid #0d9488;
  border-radius: 8px;
  text-align: center;
  margin-right: 8px;
  font-size: 16px;
  color: #253237;
`;

export const Footer = styled.View``;

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

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  background-color: #0d9488;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 16px;
`;

export const LoginButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
`;
