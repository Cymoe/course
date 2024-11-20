"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const secondRowTestimonials = [
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on. The path to success is to take massive, determined action. Life is either a daring adventure or nothing at all.",
    name: "Robert Frost",
    title: "Poet",
  },
  {
    quote: "Life is what happens when you're busy making other plans. Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.",
    name: "John Lennon",
    title: "Musician",
  },
  {
    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    name: "Steve Jobs",
    title: "Apple Inc.",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts. Never give up on something that you can't go a day without thinking about.",
    name: "Winston Churchill",
    title: "Prime Minister",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams. No one can make you feel inferior without your consent. Great minds discuss ideas.",
    name: "Eleanor Roosevelt",
    title: "First Lady",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 overflow-hidden bg-black pt-0">
        <div className="flex justify-center mb-40">
          <Link href="/courses">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="text-lg px-8 py-6 flex items-center gap-3"
            >
                Get Access
              </HoverBorderGradient>
            </Link>
          </div>
      <div className="absolute inset-0 bg-grid-white/[0.05]" />
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Join 10,422 nomads
          </h2>
          <p className="text-lg text-neutral-400">
            on the best place on the internet to learn AI skills and become location independent
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={secondRowTestimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
} 