import Image from "next/image";
import ClipboardComponent from "../components/CopyToClipBoard";
import DashedBorder from "@/components/ui/border";
import Card from "@/components/Card";
import CallBalance from "@/components/CallBalance";

export default function Home() {
  return (
    <div className="bg-black font-poppins w-full">
      <Image
        src={"/assets/pp.png"}
        alt="Profile Picture"
        height={1000}
        width={1000}
        className="w-full"
        style={{ objectFit: "contain" }}
      />

      <div className="bg-black relative -top-3 z-10 rounded-t-2xl h-screen w-full">
        <div className="h-full bg-gradient-to-b from-purple-900 via-purple-950 to-black rounded-t-2xl opacity-60"></div>
      </div>

      <div className="absolute top-[294px] left-0 right-0 bottom-0 z-10 p-5 flex flex-col items-center w-full md:top-[40rem] lg:top-[75rem]">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">Welcome Kash</h1>

        {/* Pubkey */}
        <div className="flex justify-center mt-3 w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <p className="truncate w-[50%] text-gray-500 text-sm sm:text-base">{`BmQuXK4wJdLEULMvzwyiNE9p7Rj3Pg4pgFfoB1SY53pj`}</p>
          <ClipboardComponent value="BmQuXK4wJdLEULMvzwyiNE9p7Rj3Pg4pgFfoB1SY53pj" />
        </div>

        {/* Border */}
        <DashedBorder />

        <div>
          <CallBalance amount={20} />

          <div className="flex justify-between mt-3 ">
            <Card
              imageurl="/assets/phone.png"
              smallText="Total"
              biggerText="Contacts"
              numberOfSpamOrContacts={100}
            />
            <div className=" ml-1"></div>
            <Card
              imageurl="/assets/verified.png"
              smallText="Spam"
              biggerText="Detected"
              numberOfSpamOrContacts={30}
            />
          </div>

       
        </div>
        <DashedBorder />
      </div>
    </div>
  );
}
