import {
  Container,
  HeroContainer,
  Content,
  Title,
  Subtitle,
  Form,
  Footer,
  LogoContainer,
  TextContainer,
  CreateAccountLink,
  CreateAccountLinkText,
} from './styles';

import HeroSvg from '../../../assets/img/hero.svg'
import Logo from '../../../assets/img/logo.svg';
import { CustomTextInput } from '../../../components/Shared/Forms/CustomTextInput';
import { useLoginController } from './useLoginController';
import { Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { MainButton } from '../../../components/Shared/Buttons/MainButton';

export function Login() {
  const { errors, handleSubmit, onSubmit, control, isLoading, handleNewAccountPress } = useLoginController();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
       <Container>
       <LogoContainer>
         <Logo />
       </LogoContainer>
       <HeroContainer>
         <HeroSvg />
       </HeroContainer>
       <Content>
         <TextContainer>
           <Title>Welcome!</Title>
           <Subtitle>Sign in to your account to check your bowling stats!</Subtitle>
         </TextContainer>
         <Form>
           <Controller
             name="email"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Email"}
                 icon={"envelope"}
                 value={value}
                 onChangeText={onChange}
                 error={errors.email?.message}
               />
             )}
           />
           <Controller
             name="password"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Password"}
                 icon={"lock"}
                 value={value}
                 onChangeText={onChange}
                 isPassword
                 error={errors.password?.message}
               />
             )}
           />
           <MainButton
             onPress={handleSubmit(onSubmit)}
             label={"Sign in"}
             isLoading={isLoading}
           />
         </Form>

         <Footer>
           <CreateAccountLink
              onPress={handleNewAccountPress}
           >
             <CreateAccountLinkText>Don't have an account? Sign up!</CreateAccountLinkText>
           </CreateAccountLink>
         </Footer>
       </Content>
     </Container>
    </ScrollView>
  )
}
