'use client'

import AirportNavbar from '@/components/AirportNavbar';
import AirportFooter from '@/components/AirportFooter';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AirportNavbar />
        {children}
        <AirportFooter />
      </body>
    </html>
  )
}
