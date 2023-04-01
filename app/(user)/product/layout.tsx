
export const metadata = {
  title: 'Product Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <div>{children}</div>
    </div>
  )
}