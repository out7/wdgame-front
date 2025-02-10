import { PropsWithChildren } from "react";
import { Root } from "@/components/Root/Root";

export const metadata = {
  title: 'World Domination',
  description: 'Telegram Mini App',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Root>
          {children}
        </Root>
      </body>
    </html>
  )
}
