import instance from "@/services";
import { Head, Link } from "@inertiajs/react";
import Cookies from "js-cookie";
import foto from "../../assets/foto.svg";
import { logout } from "@/services/apis";
import { useMutation } from "react-query";

const NavBar = () => {
    const getToken = () => {
        const info = Cookies.get("LOGIN_INFO");
        const infodec = info ? JSON.parse(info).accessToken : undefined;
        return infodec;
    };
    instance.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    const getUser = () => {
        const info = Cookies.get("LOGIN_INFO");
        const infodec = info ? JSON.parse(info).user : undefined;
        return infodec;
    };

    const logoutM = useMutation(logout);

    const logon = () => {
        logoutM.mutateAsync();
        Cookies.remove("LOGIN_INFO");
        Cookies.remove("laravel_session");
        Cookies.remove("XSRF-TOKEN");
        localStorage.clear();
        window.location.href = route("login");
    };

    return (
        <>
            <Head title="Sorveteria" />
            <nav className="bg-gray-800 p-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex space-x-4 w-[700px]">
                        {getToken() && (
                            <>
                                <Link
                                    href={route("estados")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Estados
                                </Link>
                                <Link
                                    href={route("fornecedores")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Fornecedores
                                </Link>
                                <Link
                                    href={route("categorias")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Categorias
                                </Link>
                                <Link
                                    href={route("produtos")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Produtos
                                </Link>
                                <Link
                                    href={route("vendas")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Vender
                                </Link>
                                <Link
                                    href={route("relVendas")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Rel. de vendas
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex items-center space-x-4 ml-auto">
                        {getToken() ? (
                            <>
                                <span className="text-white text-sm">
                                    Logado como:{" "}
                                    {getUser()?.nome +
                                        " " +
                                        getUser()?.sobrenome}
                                </span>
                                <button
                                    onClick={logon}
                                    className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    <img src={foto} alt="logout" />
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="text-white hover:text-gray-300 px-2 py-1 rounded-md font-semibold"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
