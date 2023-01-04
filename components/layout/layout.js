import React, {useState, useContext} from 'react';
import { useRouter} from 'next/router';
import Menu from '../overlays/menu.js'
import Header from './header';
import Footer from './footer';
import OptionalHeader from './optional-header';
import { AppContext } from '../../services/state/AppProvider'
import Head from 'next/head'

function Layout({ children, optionalHeader, meta }) {

  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext)
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Toni Minge Development</title>
        <meta name="description" content="Toni Minge is a fullstack developer based in Berlin. Traditional and creative coding with specialization in frontend technologies, UI, UX design." />
        <meta property="og:image" content="https://toni-minge-dev.vercel.app/img/share-image.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
      </Head>
      {menuIsOpen && <Menu/>}
      {optionalHeader ? <OptionalHeader meta={meta}/> : null}
      {!optionalHeader ? <Header pathname={router.pathname} /> : null}
      <main className="max-w-6xl mx-auto p-4 z-20 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
