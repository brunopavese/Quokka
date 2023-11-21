export type User = {
  id: string;
  userName: string;
  email: string;
  avatarImage: {
    data: number[];
    type: string;
  };
  createdAt: string;
};