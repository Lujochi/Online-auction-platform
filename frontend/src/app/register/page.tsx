"use client";

import Image from "next/image";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        alert("Erro: " + error.message);
        return;
      }

      const result = await res.json();
      alert("Usuário registrado com sucesso!");
      console.log(result);
    } catch (err) {
      console.error("Erro ao registrar:", err);
      alert("Erro ao registrar. Veja o console.");
    }
  };

  return (
    <div className="w-screen h-screen bg-primary-800 flex flex-col text-white justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-md rounded-xl m-auto bg-white-t10"
      >
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
            name="first_name"
            placeholder="Nome"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-7 text-primary-800 font-medium"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Sobrenome"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-5 text-primary-800 font-medium"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-5 text-primary-800 font-medium"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-80 pr-4 pl-4 pt-3 pb-3 bg-white rounded-lg mt-5 text-primary-800 font-medium"
          />
          <button
            type="submit"
            className="mt-12 w-80 p-3.5 bg-secundary-600 text-primary-800 rounded-lg font-medium text-[20px] cursor-pointer"
          >
            Registrar
          </button>

          <span className="text-[12px] mt-5">Ou</span>
          <button
            type="button"
            className="mt-5 w-80 p-3 bg-white rounded-lg text-primary-800 cursor-pointer"
          >
            Entrar com Google
          </button>
          <span className="mt-6 mb-10 text-[13px]">
            Já possui conta?
            <a
              href="/login"
              className="text-blue-800 hover:underline transition duration-200 ml-1"
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
