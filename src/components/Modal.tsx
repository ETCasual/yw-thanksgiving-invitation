/* eslint-disable @typescript-eslint/no-misused-promises */
import { Dialog, Transition } from "@headlessui/react";
import { ref, set } from "firebase/database";
import { Fragment, useState, type FunctionComponent } from "react";
import { useDatabase } from "reactfire";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  name: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  closeModal,
  name,
}) => {
  const db = useDatabase();
  const [state, setState] = useState<number>(1);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-center text-lg font-medium leading-6 text-gray-900"
                >
                  {state === 1
                    ? "Will you be joining us on this special occasion?"
                    : state === 2
                    ? "Great! See you this Saturday! 🎉"
                    : "Aw... Do join us next time 😢."}
                </Dialog.Title>

                <div className="mt-4 flex w-full flex-col gap-2">
                  {state === 1 ? (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white focus:outline-none"
                      onClick={async () => {
                        await set(
                          ref(db, `invitation/${name.replaceAll(".", "-")}`),
                          {
                            attendance: true,
                          }
                        ).then(() => setState(2));
                      }}
                    >
                      Yes!
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white focus:outline-none"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  )}
                  {state === 1 && (
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white"
                      onClick={async () => {
                        await set(
                          ref(db, `invitation/${name.replaceAll(".", "-")}`),
                          {
                            attendance: false,
                          }
                        ).then(() => setState(3));
                      }}
                    >
                      Sadly no :(
                    </button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
