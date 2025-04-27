"use client";

import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ContactInfo from '../components/ContactInfo';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch with us for inquiries, support, or more information about our services." />
      </Head>
      <Navbar />
      <ContactInfo />
    </>
  );
};

export default ContactUs;