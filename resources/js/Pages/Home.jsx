import { Link, Head } from "@inertiajs/react";
import NavBar from "@/components/Navbar";
import Cookies from "js-cookie";

export default function Home(props) {
    const getToken = () => {
        const info = Cookies.get("LOGIN_INFO");
        const infodec = info ? JSON.parse(info).accessToken : undefined;
        return infodec;
    };
    return (
        <>
            <Head title="Sorveteria" />
            {getToken() ? (
                <div>
                    <NavBar />
                    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex items-center justify-center">
                        <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
                            {/* Conteúdo da sua página aqui */}
                            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                                Bem-vindo à Sorveteria!
                            </h1>
                            <p className="text-gray-600">
                                Explore nosso sistema utilizando as opções
                                acima.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex items-center justify-center">
                    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
                        {/* Conteúdo da sua página aqui */}
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                            Bem-vindo à Sorveteria!
                        </h1>
                        <p className="text-gray-600">
                            Antes de explorar nosso sistema, utilize uma das
                            opções abaixo para realizar login.
                        </p>
                        <NavBar />
                    </div>
                </div>
            )}
        </>
    );
}
