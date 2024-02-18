import { useEffect } from "react";

export default function Modal({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal((prev: boolean) => !prev);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed h-screen w-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 h-96 rounded-lg flex justify-center">
        <button onClick={() => setShowModal((prev: boolean) => !prev)}>
          X
        </button>
      </div>
    </div>
  );
}
