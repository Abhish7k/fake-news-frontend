import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-20 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-bold">How It Works</h2>
        <div className="h-2 bg-blue-500 w-80 rounded-full"></div>
      </div>
      <div className="mt-14 flex justify-around flex-wrap">
        <div className="max-w-xs p-4">
          <h3 className="text-xl font-semibold">Step 1</h3>
          <p>Enter the news article to analyze.</p>
        </div>
        <div className="max-w-xs p-4">
          <h3 className="text-xl font-semibold">Step 2</h3>
          <p>Our AI analyzes the content for credibility and sources.</p>
        </div>
        <div className="max-w-xs p-4">
          <h3 className="text-xl font-semibold">Step 3</h3>
          <p>Receive a result on the news article&apos;s authenticity.</p>
        </div>
      </div>
    </section>
  );
}
