import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("bidfast.token")?.value;

  if (token) {
    redirect("/home");
  }

  return <>{children}</>;
}
