'use client';

interface Props {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: Props) {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center text-white px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to BizUnite!</h1>
      <p className="text-lg mb-8">
        Please provide us with all the necessary information below.
      </p>
      <button
        onClick={onNext}
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Get Started
      </button>
    </section>
  );
}
