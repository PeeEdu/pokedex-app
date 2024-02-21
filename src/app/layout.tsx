import { Press_Start_2P } from "next/font/google";
import "./globals.css";

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
    <html>
      <body>
        <div className={` flex justify-center bg-[#11083a] py-6`}>
          <h1
            className={`${PressStart.className} text-[#FFFF00] stroke-[#054F77] text-3xl`}
          >
            PokeDex
          </h1>
        </div>
        <section>{children}</section>
      </body>
    </html>
  );
}
