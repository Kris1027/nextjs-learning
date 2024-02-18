"use client";
import { useState } from "react";
import Modal from "./modal";

export default function ModalContent() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <main className="h-screen w-full bg-slate-200 flex flex-col justify-center items-center gap-20">
        <h1 className="text-3xl">Here I will show modal</h1>
        <button
          className="px-6 py-4 bg-slate-950 text-slate-200 rounded-xl"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Show Modal
        </button>
      </main>
    </>
  );
}
