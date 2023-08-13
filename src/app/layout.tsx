import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Lịch",
  description: "Lịch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
