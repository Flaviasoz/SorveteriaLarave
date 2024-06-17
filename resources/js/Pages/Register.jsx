import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { Link, Head } from "@inertiajs/react";
import { realizarCadastro } from "@/services/apis";
import instance from "@/services";

export default function Register(props) {
    const cadastrar = useMutation((data) => realizarCadastro(data), {
        onSuccess: (r) => {
            console.log("AQ");
            Cookies.set("LOGIN_INFO", JSON.stringify({ ...r.data }), {
                expires: 7,
                sameSite: "strict",
                priority: "high",
            });
            window.location.href = route("home");
        },
        onError: (r) => {
            console.log("AQ2");
            alert(
                "Houve um problema ao realizar o cadastro. Por favor, tente novamente."
            );
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nome, sobrenome, CPF, dtaNascimento, senha, indAdm } = e.target;
        cadastrar.mutateAsync({
            nome: nome.value,
            sobrenome: sobrenome.value,
            CPF: CPF.value,
            dtaNascimento: dtaNascimento.value,
            senha: senha.value,
            indAdm: parseInt(indAdm.value),
        });
    };
    return (
        <>
            <Head title="Login" />
            <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex items-center justify-center">
                <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
                    {/* Conteúdo da sua página aqui */}
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                        Register
                    </h1>
                    <form
                        className="w-[400px] items-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="nome"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nome
                            </label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                                placeholder="Digite seu nome"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="sobrenome"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Sobrenome
                            </label>
                            <input
                                type="text"
                                id="sobrenome"
                                name="sobrenome"
                                required
                                placeholder="Digite seu sobrenome"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="CPF"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                CPF
                            </label>
                            <input
                                type="text"
                                id="CPF"
                                name="CPF"
                                required
                                placeholder="Digite seu CPF"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="dtaNascimento"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Data de Nascimento
                            </label>
                            <input
                                type="date"
                                id="dtaNascimento"
                                name="dtaNascimento"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                name="senha"
                                required
                                placeholder="Informe sua senha de acesso"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="indAdm"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Administrador
                            </label>
                            <input
                                type="text"
                                id="indAdm"
                                name="indAdm"
                                value="0"
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
