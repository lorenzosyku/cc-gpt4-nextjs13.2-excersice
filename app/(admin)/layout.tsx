import "../../styles/globals.css"

export const metadata = {
  title: 'GPT-4 playground',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body>
      <header>you are the admin</header>
        {children}</body>
    </html>
  )
}