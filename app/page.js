import Navbar from "@/components/Navbar";
import Demo from "@/components/Demo";
import Hero from "@/components/Hero";
import {
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { WobbleCardDemo } from "@/components/WobbleCardSection";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  console.log(isAuthenticated);

  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Navbar />
        <Hero />

        {(await isAuthenticated()) ? (
          <Demo />
        ) : (
          <div className="mt-10">
            <RegisterLink>
              <Button size="lg">
                Sign Up For Free
                <span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              </Button>
            </RegisterLink>
          </div>
        )}

        <div className="my-[20%]">
          <HowItWorks />
        </div>

        <div className="w-full mb-20">
          <h1 className="ml-20 text-5xl font-bold">Features</h1>
          <div className="h-2 ml-20 bg-blue-500 w-52 rounded-full"></div>
          <WobbleCardDemo />
        </div>

        <div className="w-full flex justify-center items-center mb-20">
          <CTA />
        </div>
      </div>
    </main>
  );
}
