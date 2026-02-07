import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <SanityLive />
    </>
  );
}
