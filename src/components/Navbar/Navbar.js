import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../lib/context';

import styles from './navbar.module.css';

const Navbar = (props) => {
  const { user, username } = useContext(UserContext);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Naenroo Blog</button>
          </Link>
        </li>

        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL || '/hacker.png'} alt="" />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <>
            <li>
              <Link href="/login">
                <button className="btn-blue">Log In</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
