import { Press_Start_2P } from "next/font/google";

const PressStart = Press_Start_2P({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
