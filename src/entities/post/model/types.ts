import { User } from '@/entities/user/model/types';

export type Post = {
  id: number;
  title: string;
  content: string;
  author: User;
  timestamp: string;
  likes: number;
  coverImageUrl: string | null;
};
