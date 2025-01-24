import Image from "next/image";

export const metadata = {
  title: " contact page",
  description: "contact description",
};
const ContactPage = () => {
  return (
    <div className="flex items-center gap-[100px] sm:gap-[20px] ">
      <div className="flex-1 relative ">
        <Image
          src="/contact.png"
          alt=""
          width={500}
          height={200}
          className="object-contain "
        />
      </div>
      <div className="flex-1 gap-[10px]">
        <form action="" className="flex flex-col gap-[20px] text-black ">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-[20px] rounded-sm outline-none bg-gray-300 "
          />
          <input
            type="text"
            placeholder="Email address"
            className="p-[20px] rounded-sm outline-none bg-gray-300"
          />
          <input
            type="text"
            placeholder="Phone Number (optional)"
            className="p-[20px] rounded-sm outline-none bg-gray-300"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-[20px] rounded-sm outline-none bg-gray-300"
          ></textarea>
          <button className="bg-blue-700 rounded-md p-2 w-[100px] m-auto">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
