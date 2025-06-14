import { FeaturedAuctionCard } from "@/components/featured-auction-card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <Header />
      <section className="bg-primary-600 pb-12">
        <h1 className="text-5xl font-bold pt-16 pb-12 text-center text-white">
          Leilões em destaque
        </h1>
        <FeaturedAuctionCard />
      </section>
      <section className="bg-primary-800 pt-18 pb-24">
        <div className="flex items-center justify-center gap-4">
          <div className="h-0.5 w-[720px] bg-primary-400"></div>
          <h2 className="text-white text-2xl font-bold whitespace-nowrap">
            LEILÕES ATIVOS
          </h2>
          <div className="h-0.5 w-[720px] bg-primary-400"></div>
        </div>
        <div className="mt-12">
          <ul className="flex items-center justify-center gap-40">
            <li>
              <div className="flex flex-col items-center">
                <span className="text-red-400 font-bold text-5xl">0</span>
                <span className="text-white">AO VIVO</span>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <span className="text-secundary-800 font-bold text-5xl">1</span>
                <span className="text-white">CADASTRADOS</span>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <span className="text-green-400 font-bold text-5xl">0</span>
                <span className="text-white">ENCERRADOS</span>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <span className="text-blue-600 font-bold text-5xl">1</span>
                <span className="text-white">EM ANDAMENTO</span>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-5xl">0</span>
                <span className="text-white">CAIXAS MISTERIOSAS</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex bg-primary-600 pt-20 pb-20 justify-center items-center">
        <div className="flex">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            width={550}
            height={550}
            className="rounded-l-[10px]"
          />
          <div className="flex justify-center flex-col items-center p-12 bg-primary-400 rounded-r-[10px]">
            <h3 className="text-secundary-800 text-3xl font-bold">
              Quer ficar por dentro de todos nossos leilões?
            </h3>
            <p className="text-white font-bold text-[18px] mb-4">
              Cadastre seu e-mail e receba novidades sobre nossos leilões!
            </p>
            <ul className="list-disc pl-6 text-white font-medium mb-10">
              <li>Receba notificações sobre novos leilões</li>
              <li>Fique por dentro de promoções e descontos</li>
              <li>Tenha acesso exclusivo a leilões especiais</li>
            </ul>
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="w-[300px] h-[30px] mt-4 p-8 rounded-full bg-white text-primary-800 placeholder:text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-800 transition-colors duration-300"
            />
            <input
              type="submit"
              value="Cadastrar"
              className="w-50 mt-4 p-5 rounded-full bg-blue-600 text-white cursor-pointer hover:bg-blue-800 transition-colors duration-300"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
