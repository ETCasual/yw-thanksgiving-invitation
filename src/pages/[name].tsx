import { Modal } from "@/components/Modal";
import { Slide } from "@/components/SwiperSlide";
import { Typewriter } from "@/components/Typewriter";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const [state, setState] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/Base_UNS.png')] bg-cover bg-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex w-[320px]  flex-col rounded-xl bg-white p-4 text-black shadow-lg">
            <h1 className="mb-2 font-tungsten text-3xl">YW Thanksgiving 🎉</h1>
            {state === 1 ? (
              <Slide
                nextText="Details"
                onClick={() => setState((prev) => prev + 1)}
              >
                <p>
                  Dear <strong>{router.query.name} 🍁🌾</strong>,
                </p>
                <Typewriter text="You are cordially invited to join Young Warrior Thanksgiving Special Service this weekend!" />
                <Typewriter text="Feel free to arrive earlier to fellowship with other pastors; tidbits & beverages and dinner will be ready at L4-6 Pastors Lounge (2pm-3pm & 4.30pm-6pm)." />
              </Slide>
            ) : state === 2 ? (
              <Slide
                nextText="Highlights"
                onClick={() => setState((prev) => prev + 1)}
              >
                <Typewriter text="📅 Date: 26/8/2023, Saturday" />
                <Typewriter text="⏰ Preshow: 2.30pm" />
                <Typewriter text="⛪ Service Starts: 3.00pm" />
                <Typewriter text="🏛 Venue: Wisma FGA KL, L5" />
                <Typewriter text="👕 Dresscode: Pink, Blue, Black, White" />
              </Slide>
            ) : state === 3 ? (
              <Slide
                nextText="Next"
                onClick={() => setState((prev) => prev + 1)}
              >
                <Typewriter text="- Preshow and Performance" />
                <Typewriter text="- Revival Experience Hall" />
                <Typewriter text="- Fellowship and Refreshment" />
              </Slide>
            ) : state === 4 ? (
              <Slide
                nextText="Next"
                onClick={() => setState((prev) => prev + 1)}
              >
                <Typewriter text="Looking forward to having you this Saturday! Do RSVP before [24th August 2023]. Let us come together to see beautiful things that God has done in Young Warrior; and together we will build and raise up a stronger generation!" />
              </Slide>
            ) : state === 5 ? (
              <Slide nextText="RSVP" onClick={() => setModalOpen(true)}>
                <p>With Gratitude, Young Warrior 🚀</p>
                <div className="h-[20px] w-full" />
                <Typewriter text="See You!" />
              </Slide>
            ) : null}
          </div>
        </div>
      </main>
      <Modal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        name={String(router.query.name)}
      />
    </>
  );
};

export default Home;
