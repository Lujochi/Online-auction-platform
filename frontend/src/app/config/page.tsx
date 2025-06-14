"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useRef, useState } from "react";
import Image from "next/image";

const ConfigPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState("/images/default-user-250.png");

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setAvatarUrl(tempUrl);
    }
  };
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center bg-primary-600">
        <form className="flex flex-col items-center bg-primary-400 p-10 mt-16 mb-16 rounded-lg shadow-md w-full max-w-[1200px]">
          <h1 className="text-white font-bold text-5xl mb-20">Configurações</h1>
          <div className="config-form-container flex">
            <div className="relative flex flex-col items-center gap-8 mr-24">
              <Image
                className="rounded-full object-cover"
                src={avatarUrl}
                alt="user-icon"
                width={250}
                height={250}
              />
              <div className="absolute top-30 text-3xl text-primary-800 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <i
                  className="fa-solid fa-arrow-up-from-bracket"
                  onClick={handleImageClick}
                ></i>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />{" "}
              <h2 className="text-white font-bold text-3xl uppercase">
                Editar perfil
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="first-name"
                  className="text-white font-bold uppercase pl-2"
                >
                  Nome:
                </label>
                <input
                  className="bg-white pt-3 pb-3 pl-4 w-[300px] rounded-[10px] placeholder:text-primary-800"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="Digite seu nome"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="last-name"
                  className="text-white font-bold uppercase pl-2"
                >
                  Sobrenome:
                </label>
                <input
                  className="bg-white pt-3 pb-3 pl-4 w-[300px] rounded-[10px] placeholder:text-primary-800"
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Digite seu sobrenome"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-white font-bold uppercase pl-2"
                >
                  E-mail:
                </label>
                <input
                  className="bg-white pt-3 pb-3 pl-4 w-[300px] rounded-[10px] placeholder:text-primary-800"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="cpf"
                  className="text-white font-bold uppercase pl-2"
                >
                  CPF:
                </label>
                <input
                  className="bg-white pt-3 pb-3 pl-4 w-[300px] rounded-[10px] placeholder:text-primary-800"
                  type="text"
                  name="cpf"
                  id="cpf"
                  placeholder="Digite seu CPF"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="address"
                  className="text-white font-bold uppercase pl-2"
                >
                  Endereço:
                </label>
                <input
                  className="bg-white pt-3 pb-3 pl-4 w-[300px] rounded-[10px] placeholder:text-primary-800"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Digite seu endereço"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="contact"
                  className="text-white font-bold uppercase pl-2"
                >
                  Contato:
                </label>
                <input
                  className="bg-white pt-3 pb-3 pl-4 w-[300px] rounded-[10px] placeholder:text-primary-800"
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Digite seu contato"
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Salvar"
            className="mt-20 pt-3 pb-3 pr-10 pl-10 rounded-[10px] text-white font-bold text-[20px] bg-green-800 cursor-pointer"
          />
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ConfigPage;
