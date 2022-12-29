import React, {useState, useContext} from 'react';
import { useRouter} from 'next/router';
import Menu from '../overlays/menu.js'
import Header from './header';
import Footer from './footer';
import OptionalHeader from './optional-header';
import { AppContext } from '../../services/state/AppProvider'

function Layout({ children, optionalHeader, meta }) {

  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext)
  const router = useRouter();

  return (
    <div>
      {menuIsOpen && <Menu/>}
      {optionalHeader ? <OptionalHeader meta={meta}/> : null}
      {!optionalHeader ? <Header pathname={router.pathname} /> : null}
      <main className="max-w-6xl mx-auto p-4 z-20 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
