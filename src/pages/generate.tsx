import { ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useDatabase, useDatabaseObjectData } from "reactfire";

const Generate = () => {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1500);

    () => clearTimeout(timeout);
  }, [copied]);

  const dbRef = useDatabase();
  const inviteeRef = ref(dbRef, `invitation/${name}`);

  const { data } = useDatabaseObjectData<{ attendance: boolean }>(inviteeRef);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/Base_UNS.png')] bg-cover bg-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex w-[320px]  flex-col rounded-xl bg-white p-4 text-black shadow-lg">
          <h1 className="font-tungsten text-3xl">
            What is your friend&apos;s name?
          </h1>
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            className="mt-1 rounded-md border border-black px-2 py-1 focus-within:outline-none"
          />
          {name && (
            <button
              onClick={() => {
                const text = `https://invitation.fgacycyw.com/invite/${encodeURI(
                  name.trim()
                )}`;
                void navigator.clipboard
                  .writeText(text)
                  .then(() => setCopied(true));
              }}
              className={`mt-2 truncate rounded-md font-bold ${
                !copied ? "bg-gray-300 text-black" : "bg-green-500 text-black"
              } bg-gray-300 px-2 py-1`}
            >
              {!copied
                ? `https://invitation.fgacycyw.com/invite/${encodeURI(name)}`
                : "Copied!"}
            </button>
          )}
          {name && (
            <p className="w-full text-right text-xs">Click above to copy</p>
          )}
          {name && data && (
            <div
              className={`mt-2 flex flex-row items-center rounded-md ${
                data.attendance ? "bg-green-500" : "bg-red-400"
              } px-2 py-1 text-white`}
            >
              <p className="truncate">
                {name}{" "}
                {typeof data.attendance === "undefined"
                  ? "No RSVP yet. ⌛"
                  : data.attendance
                  ? "is coming! 🎉"
                  : "is not coming.. 😢"}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Generate;
