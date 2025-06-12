import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="flex justify-around items-center h-[100px] bg-primary-800">
          <div className="logo">
            <a href="/home">
              <Image
                src="/logo-bid-fast-now.png"
                alt="Logo"
                width={174}
                height={100}
              />
            </a>
          </div>
          <input
            className="rounded-full w-[400px] pr-5 pl-5 pt-2 pb-2 border-1 border-white text-white font-medium"
            type="text"
            placeholder="Pesquisar"
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center pr-3 pl-3 pt-2 pb-2 gap-[5px] bg-primary-600 rounded-[10px]">
              <Image
                className="rounded-l-lg"
                src="/images/coin-icon.png"
                alt="coin-icon"
                width={16}
                height={16}
              />
              <span className="text-white text-[14px] font-medium">
                R$ 0,00
              </span>
              <button className="cursor-pointer">
                <Image
                  src="/images/add-icon.png"
                  alt="add-icon"
                  width={18}
                  height={18}
                />
              </button>
            </div>
            <div className="cursor-pointer">
              <Image
                className="rounded-full"
                src="/images/default-user.png"
                alt="user-icon"
                width={45}
                height={45}
              />
            </div>
          </div>
        </div>
        <nav className="flex justify-center items-center bg-secundary-400">
          <ul className="flex items-center gap-30 h-[50px] max-w-[1440px]">
            <li>
              <a href="#">Comuns</a>
            </li>
            <li>
              <a href="#">Antiguidades</a>
            </li>
            <li>
              <a href="#">Colecionáveis</a>
            </li>
            <li>
              <a href="#">Veículos/Peças</a>
            </li>
            <li>
              <a href="#">Itens de Luxo</a>
            </li>
            <li>
              <a href="#">Arte e decoração</a>
            </li>
            <li>
              <a href="#">Outros</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
