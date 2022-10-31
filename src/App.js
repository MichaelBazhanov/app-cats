import "./App.css";

function App() {
  return (
    <div className="antialiased font-sans">
      <header className="bg-blue">
        <nav className="flex max-w-7xl mx-auto px-6">
          <div className="py-6 px-5.5 text-sm cursor-pointer whitespace-nowrap tracking-wide text-white bg-black bg-opacity-10">
            Все котики
          </div>
          <div className="py-6 px-5.5 text-sm cursor-pointer whitespace-nowrap tracking-wide text-white/70 hover:text-white hover:bg-black hover:bg-opacity-10 transition-colors">
            Любимые котики
          </div>
        </nav>
      </header>
      <main>
        <h1 className="sr-only">Page Cats</h1>

        {/* this component */}
        <section>
          <div className="max-w-7xl mx-auto  px-6 mt-12">Все котики</div>
        </section>

        {/* this component */}
        <section>
          <div className="max-w-7xl mx-auto  px-6 mt-12">Любимые котики</div>
        </section>
      </main>
    </div>
  );
}

export default App;
