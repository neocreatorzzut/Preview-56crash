import "@/styles/waitlist.css";
import type { Metadata } from "next";
import WaitlistCrashApp from "@/routes/WaitlistCrashApp";

export const metadata: Metadata = {
  title: "Crash Training App — Waitlist",
};

export default function Page() {
  return <WaitlistCrashApp />;
}
