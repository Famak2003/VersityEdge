import LOGO from "./../../assets/logo.png";

export default function Logo() {
  return (
    <figure className="logo flex h-[5rem] w-[5rem] items-center justify-center overflow-hidden rounded-full bg-white px-[6px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:h-[7rem] md:w-[7rem] ">
      <img
        className="h-full w-full scale-[80%] cursor-pointer object-contain"
        src={LOGO}
        alt="Versity Edge"
      />
    </figure>
  );
}
