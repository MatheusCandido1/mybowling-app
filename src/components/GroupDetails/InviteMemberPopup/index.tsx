import { Modal, TouchableOpacity, View } from "react-native";
import {
  Overlay,
  Container,
  PopupContainer,
  PopupTitle,
  PopupHeader,
  PopupContent,
  PopupFooter,
  InputContainer,
  ConfirmActionButton,
  ConfirmActionButtonText,
  CancelActionButton,
  CancelActionButtonText,
  FeedbackContainer,
  FeedbackText,
  EmptyFeedbackContainer
 } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useInviteMemberPopupController } from "./useInviteMemberPopupController";
import { Controller } from 'react-hook-form';
import { CustomTextInput } from "../../Shared/Forms/CustomTextInput";

interface InviteMemberPopupProps {
  showInviteMemberPopup: boolean;
  handleCloseInviteMemberPopup: () => void;
}


export function InviteMemberPopup({ showInviteMemberPopup, handleCloseInviteMemberPopup }: InviteMemberPopupProps) {

  const { onSubmit, handleSubmit, control,feedback, handleResetFeedback, reset } = useInviteMemberPopupController();

  function formatFeedbackMessage(feedback: string) {
    if(feedback === 'ERRORSENT' || feedback === 'ERRORUSERALREADYINGROUP') {
      return {
        message: feedback === 'ERRORSENT' ? 'Invite already sent. Wait for the user to accept it.' : 'User already in group.',
        color: {
          backgroundColor: '#e6eef4',
          borderColor: '#0d5d94'
        }
      }
    }
    if(feedback === 'ERRORUSERNOTFOUND') {
      return {
        message: 'Invalid user email.',
        color: {
          backgroundColor: '#f4e8e8',
          borderColor: '#981B1B'
        }
      }
    }
    if(feedback === 'SUCCESS') {
      return {
        message: 'Invite sent successfully.',
        color: {
          backgroundColor: '#e6f4f3',
          borderColor: '#0d9488'
        }
      }
    }
  }

  function handleClosePopup() {
    reset();
    handleResetFeedback();
    handleCloseInviteMemberPopup();
  }


  const Feedback = () => (
    <FeedbackContainer
      style={{
        backgroundColor: formatFeedbackMessage(feedback)?.color.backgroundColor,
        borderColor: formatFeedbackMessage(feedback)?.color.borderColor
      }}
    >
        <FeedbackText
          style={{
            color: formatFeedbackMessage(feedback)?.color.borderColor
          }}
        >{formatFeedbackMessage(feedback)?.message}</FeedbackText>
    </FeedbackContainer>
  );

  return (
    <Modal
      transparent
      animationType="fade"
      visible={showInviteMemberPopup}
    >
    <Overlay>
      <Container>
        <PopupContainer>
          <PopupHeader>
            <PopupTitle>Invite Member</PopupTitle>
            <TouchableOpacity
              onPress={handleCloseInviteMemberPopup}
            >
              <MaterialCommunityIcons name="close" size={24} color="#000" />
            </TouchableOpacity>
          </PopupHeader>
          <PopupContent>
            <InputContainer>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field: { onChange, value }}) => (
                  <CustomTextInput
                    label="Email"
                    value={value}
                    onChangeText={onChange}
                    icon="envelope"
                  />
                )}
              />
            </InputContainer>
            {feedback ? (
              <Feedback />
            ) : (
              <EmptyFeedbackContainer />
            )}
          </PopupContent>
          <PopupFooter>
            <ConfirmActionButton
              onPress={handleSubmit(onSubmit)}
            >
              <ConfirmActionButtonText>Invite</ConfirmActionButtonText>
            </ConfirmActionButton>
            <CancelActionButton
              onPress={handleClosePopup}
            >
              <CancelActionButtonText>Cancel</CancelActionButtonText>
            </CancelActionButton>
          </PopupFooter>
        </PopupContainer>
      </Container>
    </Overlay>
    </Modal>
  )
}
