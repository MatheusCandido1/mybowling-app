import { FlatList, View } from 'react-native';
import { Header } from '../../components/Shared/Header';
import {
  Container,
  Content
} from "./styles";
import { useNotificationController } from './useNotificationController';
import { NotificationCard } from '../../components/Notifications/NotificationCard';
import { INotification } from '../../entities/Notification';

export function Notifications() {
  const { handleBackButtonPress, notifications, handleToggleRead } = useNotificationController();

  return (
    <Container>
      <Header
        title="Notifications"
        onPress={handleBackButtonPress}
      />
      <Content>
      <FlatList
        data={notifications}
        keyExtractor={(item: INotification) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
          renderItem={({ item }) => (
              <NotificationCard
                notification={item}
                onPress={() => handleToggleRead(item.id.toString())}
              />
            )}
          />

      </Content>
    </Container>
  )
}
