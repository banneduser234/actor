

export default function SearchHero() {
    return (
      <>
        <div className="relative bg-green-800">
            <div className="absolute inset-0">
                <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                alt=""
                />
                <div className="absolute inset-0 bg-green-800 mix-blend-multiply" aria-hidden="true" />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">RECHERCHES</h1>
                <p className="mt-6 max-w-3xl text-xl text-indigo-100">
                
                </p>
            </div>
        </div>
      </>
    )
  }
  