"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Upload, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { motion } from "framer-motion";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? (
                <span className="flex items-center gap-2">
                    Enviando... <span className="animate-spin">⏳</span>
                </span>
            ) : (
                <span className="flex items-center gap-2">
                    Enviar Mensagem <Send size={18} />
                </span>
            )}
        </button>
    );
}

export default function ContactForm() {
    const [state, setState] = useState<{ success?: boolean; message?: string } | null>(null);

    async function clientAction(formData: FormData) {
        const result = await submitContactForm(formData);
        setState(result);
    }

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-heading font-bold mb-6 text-primary">Envie uma mensagem</h3>

            <form action={clientAction} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:bg-gray-50"
                            placeholder="Seu nome completo"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Telefone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:bg-gray-50"
                            placeholder="(00) 00000-0000"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:bg-gray-50"
                        placeholder="seu@email.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="px-4 py-3 rounded-lg border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none disabled:bg-gray-50"
                        placeholder="Como podemos ajudar?"
                    ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-gray-700">Anexar Arquivo (Opcional)</span>
                    <label htmlFor="file" className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-secondary hover:text-secondary transition-colors">
                        <Upload size={24} className="mb-2" />
                        <span className="text-sm">Clique para upload ou arraste o arquivo</span>
                        <input type="file" id="file" name="file" className="hidden" />
                    </label>
                </div>

                {state && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg flex items-center gap-2 ${state.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                            }`}
                    >
                        {state.success ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                        <span className="font-medium text-sm">{state.message}</span>
                    </motion.div>
                )}

                <SubmitButton />
            </form>
        </div>
    );
}
