export interface INotification {
  id: number;
  user_id: number;
  read_at: string | null;
  type: string;
  support_id: string | null;
  author: string;
  created_at: string;
  content: {
    title: string;
    body: string;
  }
}
