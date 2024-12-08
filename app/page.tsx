import Image from "next/image";
import ClipboardComponent from "../components/CopyToClipBoard";
import DashedBorder from "@/components/ui/border";
import Card from "@/components/Card";
import CallBalance from "@/components/CallBalance";

export default function Home() {
  return (
    <div className="bg-black font-poppins w-full ">
      <Image
        src={"/assets/pp.png"}
        alt="Profile Picture"
        height={1000}
        width={1000}
        className="w-full"
        style={{ objectFit: "contain" }}
      />

      <div className="bg-black relative -top-3 z-10 rounded-t-2xl h-screen w-full">
        <div className="h-full bg-gradient-to-b rounded-t-2xl flex flex-col items-center" style={{
          background: "linear-gradient(to bottom, rgba(75, 0, 130, 0.6), rgba(48, 0, 87, 0.6), rgba(0, 0, 0, 0.6))"
        }}>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mt-5">Welcome Kash</h1>

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


    </div>
  );
}
