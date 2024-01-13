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
  ButtonContainer
} from './styles';

import HeroSvg from '../../../assets/img/hero.svg'
import Logo from '../../../assets/img/logo.svg';
import { CustomTextInput } from '../../../components/Shared/Forms/CustomTextInput';
import { MainButton } from '../../../components/Shared/Buttons/MainButton';
import { useRegisterController } from './useRegisterController';
import { Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { Separator } from '../../../components/Shared/Separator';

export function Register() {
  const { handleSubmit, onSubmit, control, isLoading, handleAlreadyUserPress, errors } = useRegisterController();

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
           <Title>New Here?!</Title>
           <Subtitle>Create your account and start bowling!</Subtitle>
         </TextContainer>
         <Form>
          <Controller
             name="name"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Name"}
                 icon={"user"}
                 value={value}
                 onChangeText={onChange}
                 error={errors.name?.message}
               />
             )}
            />
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

          <ButtonContainer>
           <MainButton
              onPress={handleSubmit(onSubmit)}
              label="Sign Up"
              isLoading={isLoading}
            />
            </ButtonContainer>

         </Form>

         <Footer>
           <CreateAccountLink
              onPress={handleAlreadyUserPress}
           >
             <CreateAccountLinkText>Already an user? Sign in!</CreateAccountLinkText>
           </CreateAccountLink>
         </Footer>
         <Separator
          height={40}
         />
       </Content>
     </Container>
    </ScrollView>
  )
}
