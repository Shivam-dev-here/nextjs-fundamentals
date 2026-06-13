import { Geist, Geist_Mono } from "next/font/google";
import AdminNavbar from "@/components/Admin-Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Layout-Next.js",
  description: "Learning",
};

export default function AdminLayout({ children }) {
  return <>
  <AdminNavbar/> Admin Navbar
  {children}</>;
}
