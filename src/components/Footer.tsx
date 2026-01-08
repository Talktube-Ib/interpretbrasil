import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-gray-300 py-16">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* About */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="mb-2 inline-block">
                        <img
                            src="/imagens/home/0_Interpret_Brasil.svg"
                            alt="Interpret Brasil"
                            className="h-10 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Mais de 20 anos de experiência conectando o mundo através da tradução
                        simultânea, consecutiva e escrita. Qualidade premium para eventos globais.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-heading font-bold mb-6">Serviços</h4>
                    <ul className="flex flex-col gap-3 text-sm">
                        <li>
                            <Link href="/servicos/traducao-simultanea" className="hover:text-secondary transition-colors">
                                Tradução Simultânea
                            </Link>
                        </li>
                        <li>
                            <Link href="/servicos/traducao-juramentada" className="hover:text-secondary transition-colors">
                                Tradução Juramentada
                            </Link>
                        </li>
                        <li>
                            <Link href="/servicos/interpretacao-remota" className="hover:text-secondary transition-colors">
                                Interpretação Remota
                            </Link>
                        </li>
                        <li>
                            <Link href="/servicos/equipamentos-para-traducao-simultanea" className="hover:text-secondary transition-colors">
                                Equipamentos
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-heading font-bold mb-6">Contato</h4>
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
                            <span>(11) 99999-9999</span>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white font-heading font-bold mb-6">Redes Sociais</h4>
                    <div className="flex gap-4">
                        <a href="#" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="bg-gray-800 p-2 rounded hover:bg-secondary hover:text-primary transition-all">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Interpret Brasil. Todos os direitos reservados.
            </div>
        </footer>
    );
}
