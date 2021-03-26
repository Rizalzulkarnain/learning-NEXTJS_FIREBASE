import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../lib/context';

const AuthCheck = ({ children, fallback }) => {
  const { username } = useContext(UserContext);

  return username
    ? children
    : fallback || (
        <Link href="/enter">
          <a>You must Log in First!</a>
        </Link>
      );
};

export default AuthCheck;
