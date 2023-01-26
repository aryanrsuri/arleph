import Header from "../components/Header.tsx";

const externalLinks = [
  ["Get Started", "https://alephjs.org/docs/get-started"],
  ["Docs", "https://alephjs.org/docs"],
  ["Github", "https://github.com/alephjs/aleph.js"],
];

export default function App() {
  return (
    <>
      <main class="w-screen h-screen bg-zinc-50 ">
        <div class="flex flex-col p-20 w-full justify-between h-fit ">
          <div class="flex flex-row">
            <h1 class=" text-5xl font-bold text-slate-800 tracking-tighter">
              Hel
            </h1>
            <h1 class=" text-5xl font-bold text-slate-600 tracking-tighter">
              lo, I'
            </h1>
            <h1 class=" text-5xl font-bold text-slate-800 tracking-tighter">
              m Ary
            </h1>

            <h1 class=" text-5xl font-bold text-slate-600 tracking-tighter">
              an,
            </h1>
          </div>

          <div class="flex">
            <h1 class=" text-2xl font-semibold text-yellow-400 tracking-tighter">
              Engineer.
            </h1>
          </div>
        </div>
        <div class="flex p-20 w-full justify-between h-fit">
          <div>
            <h2 class="text-3xl font-semibold text-emerald-500 tracking-tighter hover:underline hover:decoration-8 hover:decoration-emerald-500 ">
              projects
            </h2>
            <h2 class="text-3xl font-semibold text-emerald-500 tracking-tighter hover:underline hover:decoration-8 hover:decoration-emerald-500 ">

            </h2>
            <h2 class="text-3xl font-semibold text-emerald-500 tracking-tighter hover:underline hover:decoration-8 hover:decoration-emerald-500 ">
              links
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
