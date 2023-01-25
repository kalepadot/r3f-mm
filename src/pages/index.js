import * as React from 'react';
import dynamic from 'next/dynamic';
import { useAnimation } from 'framer-motion';

import { useLocomotiveScroll } from 'react-locomotive-scroll';

import ArrowScroll from '@/components/ArrowScroll';

const MainScene = dynamic(() => import('@/components/MainScene'), {
  ssr: false,
});

import CommonLayout from '@/layouts/CommonLayout';

import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import { ease } from '@/styles/motion';
import Cart from '@/components/Cart';
import Navbar from '@/components/Navbar';
import Ballpit from '@/components/Ballpit';

const transition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
};

export default function Home() {
  const { toggle, getTheme } = useTheme();

  return (
    <CommonLayout>
      <div className="min-h-[100vh] ">
        {/* <MainScene /> */}
        <Ballpit />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.2,
            ease,
          }}
        >
          <main className="relative mx-auto ">
            <Navbar />
            <Cart />
          </main>
        </motion.div>
      </div>
      {/* <ArrowScroll /> */}
    </CommonLayout>
  );
}
