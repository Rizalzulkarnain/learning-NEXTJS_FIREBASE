import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { SignInButton, SignOutButton, UsernameForm } from '../utils/auth';

import MetaTags from '../components/Metatags';

const LoginPage = () => {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      <MetaTags title="Login" description="Login for creating post" />

      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

export default LoginPage;
