export interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  created_at: Date;
  additional_info: JSON;
  avatar: string;
  username: string;
  total_applications: number;
  bio: string;
}
