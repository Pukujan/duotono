import Image from "next/image";
import LogoImage from "@/public/images/logo-white.png";
import Link from "next/link";
import { MapPinIcon, PhoneCallIcon, MailIcon } from "lucide-react";
import FonePayLogo from "@/public/images/fonepay.png";
import EeswaLogo from "@/public/images/esewa.png";
import KhaltiLogo from "@/public/images/khalti.jpg";
import FacebookLogo from "./icons/FacebookLogo";
import TwitterLogo from "./icons/TwitterLogo";
import InstagramLogo from "./icons/InstagramLogo";
import LinkedInLogo from "./icons/LinkedInLogo";
import YoutubeLogo from "./icons/YoutubeLogo";

export default function Footer() {
  const ProductosLinks = [
    { label: "Papelería y oficina", href: "/" },
    { label: "Publicidad y exterior", href: "/" },
    { label: "Ropa y accesorios", href: "/" },
    { label: "Decoración y regalos", href: "/" },
    { label: "Empaques", href: "/" },
  ];

  const NuestrosServiciosLinks = [
    { label: "Impresión digital", href: "/" },
    { label: "Branding", href: "/" },
    { label: "Imagen corporativa", href: "/" },
    { label: "Diseño redes sociales", href: "/" },
  ];

  const DuotonoLinks = [
    { label: "Sobre nosotros", href: "/" },
    { label: "Contáctanos", href: "/" },
    { label: "Ubicación", href: "/" },
  ];

  const SoporteLinks = [
    { label: "Preguntas frecuentes", href: "/wwwwww" },
    { label: "Centro de ayuda", href: "/" },
  ];


  return (
    <footer className="w-full h-full text-white bg-black flex justify-center">
      <div className="divide-y mx-[120px] divide-neutral-600 w-full container">
        <section className="py-[130px] flex justify-between">
          <div className="max-w-[341px]">
            <h2 className="pb-1 font-bold">Logotipo</h2>
            <p className="leading-[30px] py-10">¡Resalta con duotono! Expande tu marca
              gracias a la impresión digital.</p>
            <div className="flex gap-4">
              <FacebookLogo /> <TwitterLogo /> <InstagramLogo /><LinkedInLogo /><YoutubeLogo />
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="font-bold pb-8">Productos</p>
              {ProductosLinks.map((link, index) => (
                <div key={index} className="py-2">


                  <Link className="text-[18px]" href={link.href}>{link.label}</Link>


                </div>
              ))}
            </div>
            <div>

              <p className="font-bold pb-8">Nuestros servicios</p>

              {NuestrosServiciosLinks.map((link, index) => (
                <div key={index} className="py-2">


                  <Link className="text-[18px]" href={link.href}>{link.label}</Link>


                </div>
              ))}
            </div>
            <div>

              <p className="font-bold pb-8">Duotono</p>

              {DuotonoLinks.map((link, index) => (
                <div key={index} className="py-2">


                  <Link className="text-[18px]" href={link.href}>{link.label}</Link>


                </div>
              ))}
            </div>
            <div>

              <p className="font-bold pb-8">Soporte</p>

              {SoporteLinks.map((link, index) => (
                <div key={index} className="py-2">


                  <Link className="text-[18px]" href={link.href}>{link.label}</Link>


                </div>
              ))}
            </div>
          </div>

        </section>
        <section className="py-[44px]">
          <p className="text-[18px] flex justify-center">Copyright © 2023 duotono | Todos los derechos reservados</p>
        </section>
      </div>
    </footer>
  );
}
