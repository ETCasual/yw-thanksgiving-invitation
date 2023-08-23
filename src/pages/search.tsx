import { ref } from "firebase/database";
import { useState } from "react";
import { useDatabase, useDatabaseObjectData } from "reactfire";

const SearchPage = () => {
  const dbRef = useDatabase();

  const [searchString, setSearchString] = useState("");

  const inviteRef = ref(dbRef, `invitation`);

  const { data } =
    useDatabaseObjectData<Record<string, { attendance: boolean }>>(inviteRef);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/Base_UNS.png')] bg-cover bg-center">
      <div className="container flex flex-col items-center justify-center px-4 py-16">
        <input
          onChange={(e) => setSearchString(e.currentTarget.value)}
          className="mb-2 mt-1 rounded-md border border-black px-2 py-1 focus-within:outline-none"
        />
        <div className="flex max-h-[70vh] w-[320px] flex-col overflow-y-scroll rounded-xl bg-white p-4 text-black shadow-lg">
          {data &&
            Object.entries(data)
              .filter(
                ([person]) =>
                  person !== "NO_ID_FIELD" &&
                  person.toLowerCase().includes(searchString.toLowerCase())
              )
              .map(([person, attendance]) => (
                <div
                  key={person}
                  className={`mt-2 flex flex-row items-center rounded-md ${
                    attendance.attendance ? "bg-green-500" : "bg-red-400"
                  } px-2 py-1 text-white`}
                >
                  <p className="truncate">
                    {person}{" "}
                    {typeof attendance.attendance === "undefined"
                      ? "No RSVP yet. ⌛"
                      : attendance.attendance
                      ? "is coming! 🎉"
                      : "is not coming.. 😢"}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
