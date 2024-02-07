import {
  Container,
  HeroContainer,
  Content,
  Title,
  Subtitle,
  Form,
  LogoContainer,
  TextContainer,
  ButtonContainer
} from './styles';

import HeroSvg from '../../../assets/img/hero.svg'
import Logo from '../../../assets/img/logo.svg';
import { CustomTextInput } from '../../../components/Shared/Forms/CustomTextInput';
import { MainButton } from '../../../components/Shared/Buttons/MainButton';
import { useNewPasswordController } from './useNewPasswordController';
import { Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { Separator } from '../../../components/Shared/Separator';

export function NewPassword({ route }) {

  const { handleSubmit, onSubmit, control, isLoading, errors } = useNewPasswordController();

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
           <Title>Create New Password</Title>
           <Subtitle>Hey, make sure you create a strong password, okay?!</Subtitle>
         </TextContainer>
         <Form>
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
           <Controller
             name="password_confirmation"
             control={control}
             defaultValue={""}
             render={({ field: { onChange, value }}) => (
               <CustomTextInput
                 label={"Password Confirmation"}
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
              label="Update Password"
              isLoading={isLoading}
            />
            </ButtonContainer>

         </Form>

         <Separator
          height={40}
         />
       </Content>
     </Container>
    </ScrollView>
  )
}
