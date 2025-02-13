import React from 'react';
import type { User } from '@/types/user';

interface UserProps {
  user: User;
}

const UserInfo: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="ineed.io-profile-user-info">
      Hey {user.user_metadata.first_name} {user.user_metadata.last_name}!
    </div>
  );
};

export default UserInfo;
