import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    
    <html lang="fr">
      <head>
      <link rel="icon" type="image/png" href="\hhh.JPG" sizes="32x32"></link>
      <title>Profilage Risque </title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    
  )
}

