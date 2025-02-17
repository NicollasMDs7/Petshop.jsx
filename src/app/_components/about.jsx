import Image from "next/image";
import dogSobre from "../../../public/thor-sobre.jpeg";
import dogSobre2 from "../../../public/thor-sobre-2.jpeg";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div
        className="container mx-auto grid-cols-1
         lg:grid-cols-2 gap-12 items-center px-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 items-center">
          <div
            className="relative"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={dogSobre}
                alt="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={dogSobre2}
                alt="Foto do cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold ">SOBRE</h2>
            <p>
              Até que alguém ame um animal, uma parte de sua alma permanece
              adormecida. Acreditamos nisso e acreditamos no acesso fácil a
              coisas que fazem bem à nossa mente, corpo e espírito. Com uma
              oferta inteligente, suporte excelente e checkout seguro, você está
              em boas mãos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinarios
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                target="_blank"
                href={`https://wa.me/5511951783281?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                target="_blank"
                href={`https://wa.me/5511951783281?text=Olá vim pelo site e gostaria de mais informações`}
                className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
