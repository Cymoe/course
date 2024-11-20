export function Mission() {
  return (
    <section className="py-24 bg-black pt-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Why am I doing this?
          </h2>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/heromyles.jpg"
              alt="Person enjoying remote work lifestyle by the ocean"
              className="w-full h-[400px] object-cover" 
            />
          </div>
          <div className="space-y-6 text-neutral-400">
            <p>
              This is a specialized knowledge base designed to meet all the needs I had years ago. For the longest time I wanted to travel and produce an income at the same time.
            </p>
            <p>
              We're experiencing an era where remote business is entirely feasible, whereas just one generation ago, this wasn't the case. It's almost as if the world has been unlocked just for you to experience and enjoy.
            </p>
            <p>
              Although I may not have the resources for ongoing training, my goal remains to equip you with the essential knowledge needed to embrace a location-independent lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}