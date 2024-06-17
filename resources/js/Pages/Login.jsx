import Cookies from "js-cookie";
import { useMutation } from "react-query";
import instance from "@/services/index.js";
import { Link, Head } from "@inertiajs/react";
import { realizarlogin } from "../services/apis/index.js";

export default function Login() {
    const logar = useMutation((data) => realizarlogin(data), {
        onSuccess: (r) => {
            Cookies.set("LOGIN_INFO", JSON.stringify({ ...r.data }), {
                expires: 7,
                sameSite: "strict",
                priority: "high",
            });
            window.location.href = route("home");
        },
        onError: (r) => {
            alert(
                "Houve um problema ao realizar o login. Por favor, tente novamente."
            );
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const codUsuario = parseInt(e.target.codigo.value);
        const senha = e.target.senha.value;
        logar.mutateAsync({ codUsuario, senha });
    };

    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex items-center justify-center">
                <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
                    {/* Conteúdo da sua página aqui */}
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                        Login
                    </h1>
                    <form
                        className="w-[400px] items-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="codigo"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Código do Usuário
                            </label>
                            <input
                                type="text"
                                id="codigo"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite seu código de usuário"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="senha"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Senha
                            </label>
                            <input
                                type="password"
                                id="senha"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Link
                                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href={route("home")}
                            >
                                Voltar
                            </Link>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
