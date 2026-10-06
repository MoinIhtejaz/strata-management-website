import './globals.css'

export const metadata = {
  title: 'Strata Management',
  description: 'Strata management and owners corporation services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
