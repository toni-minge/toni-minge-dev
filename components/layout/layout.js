import React from 'react';
import { useRouter } from 'next/router';
import Header from './header';
import Footer from './footer';
import OptionalHeader from './optional-header';

function Layout({ children, optionalHeader, meta }) {
  const router = useRouter();

  return (
    <div>
      {optionalHeader ? <OptionalHeader meta={meta}/> : null}
      {!optionalHeader ? <Header pathname={router.pathname} /> : null}
      <main className="max-w-6xl mx-auto p-4 z-20">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
