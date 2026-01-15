import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Youtube, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { lang, t } = useLanguage();

    return (
        <footer className="bg-primary text-gray-300 py-16">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* About */}
                <div className="flex flex-col gap-4">
                    <Link href={`/${lang}`} className="mb-2 inline-block">
                        <img
                            src="/imagens/home/0_Interpret_Brasil.svg"
                            alt="Interpret Brasil"
                            className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-400">
                        {t("footer.about_description")}
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-heading font-bold mb-6">{t("footer.services")}</h4>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li>
                            <Link href={`/${lang}/servicos/traducao-simultanea`} className="hover:text-secondary transition-colors">
                                {t("header.services_simultaneous")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/servicos/traducao-juramentada`} className="hover:text-secondary transition-colors">
                                {t("header.services_sworn")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/servicos/interpretacao-remota`} className="hover:text-secondary transition-colors">
                                {t("header.services_remote")}
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${lang}/servicos/equipamentos-para-traducao-simultanea`} className="hover:text-secondary transition-colors">
                                {t("header.services_equipment")}
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-heading font-bold mb-6">{t("footer.contact")}</h4>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li className="flex items-start gap-3">
                            <Mail className="text-secondary shrink-0" size={18} />
                            <a href="mailto:contato@interpretbrasil.com" className="hover:text-white transition-colors">
                                contato@interpretbrasil.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="text-secondary shrink-0" size={18} />
                            <span>
                                São Paulo / SP <br />
                                Rio de Janeiro / RJ
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-secondary shrink-0" size={18} />
                            <span>+55 (11) 99868-2679</span>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white font-heading font-bold mb-6">{t("footer.social")}</h4>
                    <div className="flex gap-4 flex-wrap">
                        <a href="http://linkedin.com/company/interpret-brasil/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/interpretbrasil/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.facebook.com/Interpret-Brasil-454351724757710/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCgpANW5po_fY02uSHitX6_w" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Youtube size={20} />
                        </a>
                        <a href="https://www.twitter.com/interpretbrasil" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Interpret Brasil. {t("footer.rights")}
            </div>
        </footer>
    );
}
