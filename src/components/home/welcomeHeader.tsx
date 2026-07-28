import { Bakbak_One, Be_Vietnam_Pro } from "next/font/google";

const bakbak = Bakbak_One({
  subsets: ["latin"],
  weight: "400",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: "400",
});

export default function WelcomeHeader() {
  return (
    <div className="px-6 pt-30 md:pt-32 md:max-w-3xl md:mx-auto">

      <h1 className={`${bakbak.className} text-white text-2xl`}>
        Bem Vindo (A)!
      </h1>

      <h2 className={`${beVietnam.className} text-white mt-2`}>
        Selecione um módulo
      </h2>

    </div>
  );
}