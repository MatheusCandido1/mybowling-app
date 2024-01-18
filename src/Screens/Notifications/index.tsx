import { FlatList, View } from 'react-native';
import { Header } from '../../components/Shared/Header';
import {
  Container,
  Content
} from "./styles";
import { useNotificationController } from './useNotificationController';
import { NotificationCard } from '../../components/Notifications/NotificationCard';
import { INotification } from '../../entities/Notification';
import { OverlayLoading } from '../../components/Shared/OverlayLoading';
import { RefreshControl } from 'react-native-gesture-handler';

export function Notifications() {
  const { handleBackButtonPress, notifications, handleToggleRead, isFetching, refetchNotifications } = useNotificationController();

  return (
    <Container>
      <Header
        title="Notifications"
        onPress={handleBackButtonPress}
      />
      <Content>
      {isFetching ? (<OverlayLoading style="light" />) : (
        <FlatList
        data={notifications}
        keyExtractor={(item: INotification) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={refetchNotifications}
          />
        }
        renderItem={({ item }) => (
              <NotificationCard
                notification={item}
                onPress={() => handleToggleRead(item.id.toString())}
              />
            )}
          />
      )}

      </Content>
    </Container>
  )
}
