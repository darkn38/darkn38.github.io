'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="/images/me1.png"
            alt="Christian Jay Medallo"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Christian Jay Medallo</h2>
          <p>
            <a href="mailto:cjaymknight@gmail.com">cjaymknight@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Christian. I am a{' '}
          <a href="https://cit.edu">Cebu Institute of Technology</a> graduating student looking for an internship. I am confident with my
          Web Development Skills and also aspiring to be a Systems Administrator.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Christian Jay Medallo <Link href="/">cjaymknight@gmail.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
