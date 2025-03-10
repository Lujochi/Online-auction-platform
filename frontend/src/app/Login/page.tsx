import Image from "next/image";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-primary-800 flex">
      <form action="#" className="w-md rounded-xl m-auto bg-white-t10">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/logo-bid-fast-now.png"
            alt="Logo"
            width={241}
            height={138}
          />
          <p>Login</p>
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <div>
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <span>Lembre-me</span>
            </div>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit">Entrar</button>
          <span>Ou</span>
          <button type="submit">Entrar com google</button>
          <span>
            Não possui conta?<a href="#">Crie uma agora</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
