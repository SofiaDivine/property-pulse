'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react'

const AuthProvider = ({children}) => {
  return (
    <SessionProviders>
      {children}
    </SessionProviders>
  )
}

export default AuthProvider
