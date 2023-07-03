"use client";
import Card from "@/components/Card";
import { about1, about2, about3 } from "@/public/img/index";

export default function About() {
  return (
    <div className="p-2 flex items-center flex-col md:p-20">
      <h2 className="text-4xl font-semibold">How does it works</h2>
      <h1 className="text-gray-400 text-lg p-2 text-center">
        One theme that serves as an easy-to-use operational toolkit <br /> that
        meets customer&apos;s needs.
      </h1>

      <div className="flex flex-col justify-between w-9/12 md:flex-row md:justify-center">
        <Card
          image={about1}
          title="Speed Optimisation"
          body="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse."
          link="#"
        />
        <Card
          image={about2}
          title="SEO and Backlinks"
          body="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse."
          link="#"
        />
        <Card
          image={about3}
          title="Content Marketing"
          body="Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse."
          link="#"
        />
      </div>
    </div>
  );
}
