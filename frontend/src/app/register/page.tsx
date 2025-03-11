import Image from "next/image";
const RegisterPage = () => {
  return (
    <div className="w-screen h-screen bg-primary-800 flex flex-col text-white justify-center items-center">
      <form action="#" className="w-md rounded-xl m-auto bg-white-t10">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="mt-8"
            src="/logo-bid-fast-now.png"
            alt="Logo"
            width={241}
            height={138}
          />
          <p className="mt-6 text-3xl font-bold uppercase">Registro</p>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-7 text-primary-800 font-medium"
          ></input>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Sobrenome"
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-5 text-primary-800 font-medium"
          ></input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-5 text-primary-800 font-medium"
          ></input>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-5 text-primary-800 font-medium"
          ></input>
          <button
            type="submit"
            className="mt-12 w-80 p-3.5 bg-secundary-600 text-primary-800 rounded-lg font-medium text-[20px]"
          >
            Registrar
          </button>
          <span className="text-[12px] mt-5">Ou</span>
          <button
            type="submit"
            className="mt-5 w-80 p-3 bg-white rounded-lg text-primary-800"
          >
            Entrar com google
          </button>
          <span className="mt-6 mb-10 text-[13px]">
            Já possui conta?
            <a
              href="/login"
              className="text-blue-800 hover:underline transition duration-200"
            >
              Faça login
            </a>
          </span>
        </div>
      </form>
      <footer className="mb-5">
        <span className="text-[13px] text-primary-200">
          &copy; Luan Jose Chiodini 2025
        </span>
      </footer>
    </div>
  );
};

export default RegisterPage;
