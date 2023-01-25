import * as React from 'react';
import Script from 'next/script';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import { CursorProvider } from '@/contexts/CursorContext';
import { MenuProvider } from '@/contexts/MenuContext';

import Cursor from '@/components/Cursor';

// Import Font Styles
// You can find fonts at https://fonts.adobe.com/
// @import url('https://use.typekit.net/tyl1imq.css');
import '../styles/fonts.css';

// custom scrollbar
import '../styles/locomotive-scroll.css';
import '../styles/custom-scrollbar.css';

// custom mouse cursor
import '../styles/custom-nprogress.css';

// Import Tailwind Styles
import '../styles/tailwind.css';

import '../styles/globals.css';

NProgress.configure({
  showSpinner: false,
});

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  const containerRef = React.useRef(null);
  const { asPath } = useRouter();
  return (
    <MenuProvider>
      <CursorProvider>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={[
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            asPath,
          ]}
          location={asPath}
          onLocationChange={scroll =>
            scroll.scrollTo(0, { duration: 0, disableLerp: true })
          } // If you want to reset the scroll position to 0 for example
          onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on
          containerRef={containerRef}
        >
          <Script
            id="theme-switcher"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                if (
                  localStorage.getItem('theme') === 'dark' ||
                  (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }`,
            }}
          />
          <main data-scroll-container ref={containerRef}>
            <Component {...pageProps} />
            <Cursor />
          </main>
        </LocomotiveScrollProvider>
      </CursorProvider>
    </MenuProvider>
  );
}

export default MyApp;
