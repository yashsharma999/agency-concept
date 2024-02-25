'use client';
import React from 'react';
import { ServicesProvider } from './ServicesContext';

export default function AppProviders({ children }) {
  return <ServicesProvider>{children}</ServicesProvider>;
}
