import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return <MaxWidthWrapper>
    <div className="py-20 mx-auto flex flex-col text-center items-center max-w-3xl">
      <h1 className="text-4xl tracking-tight font-bold text-grey-900 sm:text-6xl">
        Your marketplace for high quality {' '}
        <span className="text-red-600">
          Indian Spices
        </span>.
      </h1>
    </div>
  </MaxWidthWrapper>;
}
