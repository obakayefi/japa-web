"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function MobileRoadmapCard() {
  return (
    <div className="h-[25rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};


const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Office esports events across African cities",
    content: (
      <p>
        Fast-paced Japa tournaments designed for workplace breaks, making esports a daily ritual across offices.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Expansion into global diaspora markets",
    content: (
      <p>
        Scaling Japa beyond Africa to engage diaspora communities worldwide with culture-driven competition.{" "}
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "SDK for integrating Kayefi Token",
    content: (
      <p>
        A simple toolkit that lets developers plug Kayefi Token rewards, payouts, and leaderboards into their own games.
      </p>
    ),
  },
  {
    id: 3,
    name: "Tyler Durden",
    designation: "Brand-sponsored rooms and cultural skins",
    content: (
      <p>
        Run through Nigerian <Highlight>streets with cultural outfits </Highlight>and brand-sponsored environments, blending heritage with immersive partnerships
        
      </p>
    ),
  },
];
