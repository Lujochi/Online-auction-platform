"use client";
import { createContext, ReactNode, useState } from "react";
import { setCookie } from "nookies";
import { useRouter } from "next/navigation";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  profile_picture: string;
}

interface AuthContextData {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
}

interface SignInData {
  User: {
    email: string;
    password_hash: string;
  };
  token: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;
  const router = useRouter();

  async function signIn(data: SignInData) {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.User.email,
        password_hash: data.User.password_hash,
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao fazer login");
    }

    const responseData = await response.json();

    setCookie(undefined, "bidfast.token", responseData.token, {
      maxAge: 60 * 60 * 1, // 1 hora
    });

    setUser(responseData.User);

    router.push("/home");

    return responseData;
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
