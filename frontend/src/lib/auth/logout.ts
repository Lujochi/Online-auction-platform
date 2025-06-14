"use client";

import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  return () => {
    destroyCookie(null, "bidfast.token", { path: "/" });
    router.push("/login");
  };
}
