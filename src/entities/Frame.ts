export interface IFrame {
  id?: number,
  frame_number: number,
  status: 'pending' | 'in_progress' | 'completed',
  first_shot: number | null,
  second_shot: number | null,
  third_shot: number | null,
  pins?: string | null,
  pins2?: string | null,
  is_split?: boolean | null,
  is_split2?: boolean | null,
  points: number,
  score: number
}
