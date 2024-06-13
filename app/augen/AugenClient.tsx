"use client";

import Background from "@/components/augen/Background";
import Header from "@/components/augen/Header";
import { useState } from "react";

export default function AugenClient() {
  const [active, setActive] = useState(false);

  return (
    <div className="h-dvh w-full relative overflow-hidden flex justify-center ">
      <Background active={active} setActive={setActive} />
      <Header active={active} setActive={setActive} />
    </div>
  );
}
