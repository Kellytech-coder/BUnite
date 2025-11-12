'use client';

export default function SocialLogin() {
  return (
    <div className="flex justify-center gap-4 mt-2">
      <button className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90 transition">
         Apple
      </button>
      <button className="bg-white border px-4 py-2 rounded-md hover:bg-gray-100 transition">
        🔍 Google
      </button>
    </div>
  );
}
