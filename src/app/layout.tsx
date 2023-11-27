import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import NavBar from "@/components/NavBar";
import { theme } from "@/theme";

export const metadata: Metadata = {
  title: "Bengali Journey",
  description: "A website for learning Bengali for English speakers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <div className="min-w-fit">
            <NavBar />
            <main className="min-w-fit px-20 py-12 grow">{children}</main>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
