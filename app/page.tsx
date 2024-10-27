export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Your Personal Incubator <br />
        <span className="text-blue-600">Everything You Need From 0-1</span>
      </h1>
      <button className="bg-green-400 text-black px-6 py-2 rounded-full text-lg font-semibold mt-4 hover:bg-green-500">
        Get Started
      </button>
      <p className="mt-2 text-gray-600">Geninfinity Explained in 90 seconds.</p>
    </div>
  );
}
