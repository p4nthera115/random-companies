"use client";

import Background from "@/components/augen/Background";
import Header from "@/components/augen/Header";

export default function AugenClient() {
  return (
    <div className="h-dvh w-full relative overflow-hidden">
      <Background />
      <Header />
    </div>
  );
}
