"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [InputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    push(`/prediction/${InputVal}`);
  };
  return (
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="text-black"
          value={InputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
