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
    <div className="max-w-[1300px] mx-auto bg-[#e7e7e7] py-4 px-7 my-9">
      <section>{children}</section>
    </div>
    </>
  );
}
