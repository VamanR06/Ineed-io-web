import React from 'react';
import '../../globals.css';

/* 
TODO (Large TODO): This is going to be the profile page to view other users.
Essentially, a user can go to like /profile/123 (for now, we will refer to users by their unique id, later usernames)
The "123" portion is going to be a users UNIQUE ID. Essentially, this is what's going to happen
1. Grab the 123 out of the url (look into dynamic routing, one of the key features of next.js: https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
2. Query the database to grab the user's information (similar to the profile page, without the profile header though)
3. When querying, remember that the "123" is the id, so only get the user with that "123" id
4. IF USER DOESN"T EXIST (error), then SAY USER WASN'T FOUND (don't worry about styliing for now, just functionality)
5. ELSE, display all their stats, like the app/profile/page.tsx, except WITHOUT THE PROFILE HEADER COMPONENT (which would say something like "Hello John")

*/

const UserProfilePage: React.FC = () => {
  return (
    <div className="ineed.io-profile.page min-h-screen bg-background p-6">
      User profile page (to be implemented)
    </div>
  );
};

export default UserProfilePage;
