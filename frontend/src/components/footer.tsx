import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-primary-800 text-white pl-30 pr-30 h-36">
      <div>
        <Image
          src="/logo-bid-fast-now.png"
          alt="Footer Image logo"
          width={120}
          height={70}
        />
      </div>
      <div className="flex flex-col items-center gap-5 text-sm">
        <div>
          <a href="#" className="underline">
            Termos e condições de uso
          </a>
          <span> / </span>
          <a href="#" className="underline">
            Política de privacidade
          </a>
        </div>
        <span className="text-primary-400">&copy; Luan Jose Chiodini 2025</span>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">
              <Image
                src="/images/facebook-icon.png"
                alt="Facebook Icon"
                width={42}
                height={42}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram Icon"
                width={42}
                height={42}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/images/twitter-icon.png"
                alt="Twitter Icon"
                width={42}
                height={42}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/images/tiktok-icon.png"
                alt="TikTok Icon"
                width={42}
                height={42}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/images/youtube-icon.png"
                alt="YouTube Icon"
                width={42}
                height={42}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
