export function About() {
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            What is the idea?
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <p className="text-xl text-neutral-300 leading-relaxed">
                Build, buy, and operate multiple businesses from a distance. Liberate yourself
                from the shackles of wage slavery, focusing instead on high-value tasks rather
                than the mundane busywork of day-to-day operations.
              </p>

              <div className="py-6 px-8 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-xl font-semibold text-neutral-200">
                  This is NOT freelancing or a remote job
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Use technology, people, and systems to work smarter, not harder, and build
                businesses that generate steady income on their own. Once a business becomes
                self-sustaining, move on to the next one, repeat the process and continue to
                expand your portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }