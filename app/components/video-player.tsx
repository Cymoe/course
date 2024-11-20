"use client";

import { Play } from "lucide-react";

export function VideoPlayer() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 p-6">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black/90 shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full backdrop-blur-sm">
                <Play className="h-12 w-12 text-primary" />
              </div>
              <p className="mt-4 text-lg font-medium text-primary">
                Introduction to the Course
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Introduction to the Course</h1>
          <p className="mt-2 text-muted-foreground">
            Welcome to the course! In this lesson, we'll cover the basic concepts
            and set the foundation for your learning journey.
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span>Duration: 5:30</span>
            <span>•</span>
            <span>Module 1, Lesson 1</span>
          </div>
        </div>
      </div>
    </div>
  );
}