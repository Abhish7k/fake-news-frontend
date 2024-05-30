"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight, MoveRight } from "lucide-react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function CTA() {
  return (
    <section className="my-[15%] text-center flex flex-col items-center gap-10 bg- w-[90%] ">
      <Image
        src="/logo.svg"
        height={150}
        width={150}
        alt="logo"
        className="border bg-white shadow rounded-2xl p-4"
      />
      <h2 className="text-4xl font-bold">Ready to Detect Fake News ?</h2>
      <p className="w-[60%] -mt-5">
        Empower yourself with the tools to identify and combat misinformation.
        Sign up today and start verifying news articles with ease.
      </p>
      <RegisterLink>
        <Button variant="outline" size="lg" className="rounded-full">
          Get Started
        </Button>
      </RegisterLink>
    </section>
  );
}
