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
            <h1 className="mb-2 font-tungsten text-3xl font-bold">
              YW Thanksgiving 🎉
            </h1>
            {state === 1 ? (
              <Slide
                nextText="Details"
                onClick={() => setState((prev) => prev + 1)}
              >
                <p>
                  Dear <strong>{router.query.name}</strong>,
                </p>
                <Typewriter text="Join us as we gather to give thanks and celebrate the blessings of the past year. Our special Thanksgiving service will be a time of reflection, gratitude, and community." />
              </Slide>
            ) : state === 2 ? (
              <Slide
                nextText="Highlights"
                onClick={() => setState((prev) => prev + 1)}
              >
                <Typewriter text="📅 Date: 26/8/2023, Saturday" />
                <Typewriter text="⏰ Time: 3pm" />
                <Typewriter text="🏛 Location: Wisma FGA, L5" />
              </Slide>
            ) : state === 3 ? (
              <Slide
                nextText="Next"
                onClick={() => setState((prev) => prev + 1)}
              >
                <Typewriter text="- Experience Hall" />
                <Typewriter text="- Inspirational Praise and Worship" />
                <Typewriter text="- Sharing of Gratitude" />
                <Typewriter text="- Fellowship and Refreshments" />
              </Slide>
            ) : state === 4 ? (
              <Slide
                nextText="Next"
                onClick={() => setState((prev) => prev + 1)}
              >
                <Typewriter text="Please RSVP by [24th August 2023] to ensure we have enough seating and refreshments for everyone. We look forward to sharing this meaningful occasion with you and your loved ones." />
              </Slide>
            ) : state === 5 ? (
              <Slide nextText="RSVP" onClick={() => setModalOpen(true)}>
                <Typewriter text="Dresscode will be set and bring your thankful heart! Let's come together to rejoice in the spirit of Thanksgiving." />
                <div className="h-[20px] w-full" />
                <p>With Gratitude, Young Warrior 🚀</p>
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
