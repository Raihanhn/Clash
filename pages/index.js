export default function Home() {
  return (
    <div className="w-full text-gray-800">
      
      {/* HEADER */}

    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20  pr-10 pl-10 lg:pr-40 lg:pl-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div className="order-2 md:order-1">
            {/* logo / tag */}
            <div className="flex items-center gap-2 mb-6">
              {/* purple 'Sticky' tag */}
              <div
                className="px-3 py-1 rounded-md text-white  font-semibold text-sm md:text-[30px] shadow-md"
                style={{ backgroundColor: "#7b3fe4", transform: "rotate(10deg)" }}
              >
                Sticky
              </div>

              {/* green 'Memories' tag */}
              <div
                className="px-3 py-1 rounded-md text-white font-semibold text-sm md:text-[30px] shadow-md"
                style={{ backgroundColor: "#31B46F", transform: "rotate(-8deg)" }}
              >
                Memories
              </div>
            </div>

            {/* headline */}
            <h1 className="text-3xl md:text-2xl lg:text-2xl font-bold text-gray-900 leading-tight mb-4">
              When their memory changes, <span className="block">staying close shouldn’t feel so hard.</span>
            </h1>

            {/* subtext */}
            <p className="text-gray-800 max-w-xl mb-6">
              <span className="block">
                Sticky Memories™ prompt cards help you spark
              </span>
               <span className="block">
                 moments of pride and connection - moments that
              </span>
              <span className="block"> make people feel like themselves again.</span>
            </p>

            {/* CTA row */}
            <div className="flex items-center gap-4">
              <a
                href="#buy"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 md:px-8 py-3 font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <span>Buy the Cards</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

            </div>
          </div>

          {/* RIGHT: illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            {/* brain illustration container similar to image (rounded, whitespace) */}
            <div className="relative w-64 h-64 md:w-90 md:h-90 lg:w-100 lg:h-100">
              {/* Replace the src with your brain illustration path */}
              <img
                src="/sticky.png"
                alt="Sticky Memories illustration"
                className="w-full h-full object-contain"
              />

              {/* optional sticky note accents */}
              <div className="hidden md:block absolute -left-6 -top-6 w-12 h-12 rounded-sm"
                   style={{ backgroundColor: "#FFD36E", transform: "rotate(-10deg)" }} />
              <div className="hidden md:block absolute -right-8 top-12 w-12 h-12 rounded-sm"
                   style={{ backgroundColor: "#A8E0FF", transform: "rotate(6deg)" }} />
              <div className="hidden md:block absolute right-6 -bottom-4 w-10 h-10 rounded-sm"
                   style={{ backgroundColor: "#C1F7C4", transform: "rotate(-8deg)" }} />
            </div>
          </div>

        </div>
      </div>
    </section>




      {/* WHY STAYING CLOSE GETS HARDER */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why staying close gets harder</h2>

          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            When memory shifts, the whole relationship shifts too.  
            Conversations change. Confidence dips.  
            The person you love feels harder to reach.  
            Not gone, just a little out of reach.
          </p>

          <div className="bg-purple-600 text-white inline-block px-6 py-3 rounded-lg font-bold">
            These cards help with what really matters: how to stay close.
          </div>
        </div>
      </section>


      {/* CARD DECK */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Meet the Sticky Memories™ Card Deck</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            A simple, beautifully designed pack of 52 prompts based on memory science
            and real-life experience.
          </p>

          <div className="bg-purple-100 inline-block px-8 py-5 rounded-xl mb-8 text-left">
            <ul className="text-purple-800 font-medium space-y-2">
              <li>• spark a moment of connection</li>
              <li>• unlock a familiar story</li>
              <li>• reduce pressure during visits</li>
              <li>• feel closer, even as things change</li>
            </ul>
          </div>

          <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto">
            Buy the Cards →
          </button>
        </div>
      </section>


      {/* HOW CARDS WORK */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">How The Cards Work (3 simple steps)</h2>

          <ol className="text-gray-700 space-y-6 max-w-xl mx-auto text-left">
            <li>
              <span className="font-bold">1. Pick a prompt</span><br />
              The cards are grouped around identity, connection, and memories that tend to “stick”.
            </li>
            <li>
              <span className="font-bold">2. Follow their lead</span><br />
              There’s no right or wrong answer.  
              If they smile, pause, or soften — that’s it working.
            </li>
            <li>
              <span className="font-bold">3. Capture the moment</span><br />
              You’ll start noticing what sparks them most, and you’ll build from there.
            </li>
          </ol>

          <button className="bg-purple-600 text-white px-8 py-3 rounded-full mt-10">
            Sample Cards
          </button>
        </div>
      </section>


      {/* WHY THE CARDS WORK */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why The Cards Work (science + heart)</h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Memory changes often affect recent facts first.  
            But older, emotional, identity-shaped memories stay stronger for longer.
          </p>

          <div className="bg-purple-600 text-white inline-block px-8 py-6 rounded-xl text-left mb-10">
            <ul className="space-y-2">
              <li>• lifelong habits</li>
              <li>• sensory cues</li>
              <li>• proud moments</li>
              <li>• stories they've repeated for decades</li>
              <li>• the parts of their identity that remain intact</li>
            </ul>
          </div>

          <p className="text-gray-700 font-medium">
            It’s not about remembering.  
            It’s about <span className="font-bold">feeling like themselves</span> again.
          </p>
        </div>
      </section>


      {/* WHAT PEOPLE EXPERIENCE */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">What People Experience</h2>

            <ul className="text-gray-600 space-y-3">
              <li>• more relaxed visits</li>
              <li>• easier conversations</li>
              <li>• more laughter</li>
              <li>• fewer awkward moments</li>
              <li>• deeper connection without pressure</li>
              <li>• a reminder of who your loved one still is</li>
            </ul>

            <p className="mt-6 text-gray-700 font-medium">It feels easier. More human.</p>
          </div>

          <div className="bg-purple-600 text-white p-8 rounded-xl text-center flex items-center justify-center">
            <p className="text-xl font-semibold">
              “Her whole face changed — it was like a window opened.”  
              <br />
              <span className="font-bold block mt-3">— Daughter</span>
            </p>
          </div>

        </div>
      </section>


      {/* MOVEMENT BEHIND THE CARDS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Movement Behind The Cards</h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Sticky Memories isn’t just cards.  
            It’s part of a movement to protect identity, spark connection,
            and create moments that feel human again.
          </p>

          <div className="bg-purple-100 px-8 py-6 rounded-xl inline-block text-left mb-10">
            <p className="font-semibold text-purple-800 mb-4">
              The cards are the starting point — the simplest, most gentle way to feel the shift.
            </p>

            <p className="text-purple-800 font-medium mb-4">From here, the movement will grow into:</p>

            <ul className="text-purple-800 space-y-2">
              <li>• the Sticky Memories App</li>
              <li>• workshops</li>
              <li>• community tools</li>
              <li>• memory café resources</li>
            </ul>

            <p className="text-purple-800 font-bold mt-4">
              But it all begins with one card.
            </p>
          </div>

          <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto">
            Buy the Cards →
          </button>

          <p className="mt-8 font-medium">It only takes one moment to feel the difference.</p>
        </div>
      </section>

      <footer className="bg-black text-white py-6 text-center text-sm">
        Terms & Support • Privacy Policy
      </footer>

    </div>
  );
}
