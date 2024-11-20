export function Mission() {
    return (
      <section className="py-24 bg-muted/50">
        <h2 className="text-3xl font-bold mb-12 text-center">Why am I doing this?</h2>
        <p className="text-muted-foreground text-center mb-12">
          see exactly how remote business can create a life of location freedom
        </p>

        <div className="container mx-auto px-4">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <img
              src="/heromyles.jpg"
              alt="Person enjoying remote work lifestyle by the ocean"
              className="object-contain w-full h-full"
            />
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              This is a specialized knowledge base designed to meet all the needs I had years
              ago. For the longest time I wanted to travel and produce an income at the same
              time.
            </p>
            <p>
              We're experiencing an era where remote business is entirely feasible, whereas
              just one generation ago, this wasn't the case. It's almost as if the world
              has been unlocked just for you to experience and enjoy.
            </p>
            <p>
              Although I may not have the resources for ongoing training, my goal remains to
              equip you with the essential knowledge needed to embrace a location-independent
              lifestyle.
            </p>
          </div>
        </div>
      </section>
    );
  }