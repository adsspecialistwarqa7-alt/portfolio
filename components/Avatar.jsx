import Image from "next/image";

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none w-full h-full pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="w-full h-full object-cover translate-z-0"
      />
    </div>
  );
};

export default Avatar;
