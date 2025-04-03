"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome!</h1>
        <div className="flex space-x-4">
          <a href="/mappingNY" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">MENY</a>
          <a href="/northamerica/landowners" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">North America - Landowners</a>
        </div>
      </div>
    </main>
  );
}