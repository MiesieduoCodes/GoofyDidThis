import Image from "next/image";
import Skills from "@/app/components/myservices";
import MyOffer from "@/app/components/my-offer";
import { ModeToggle } from "@/app/components/mode-toggle";

const page = () => {
  return (
    <div>
      <ModeToggle/>
      <MyOffer/>
      <Skills/>
    </div>
  )
}

export default page;
