import { Toaster } from 'react-hot-toast';

import Navbar from '../components/Navbar/Navbar';
import { UserContext } from '../lib/context';

import { useUserData } from '../lib/useUserData';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
