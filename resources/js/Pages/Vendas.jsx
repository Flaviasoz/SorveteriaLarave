import { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/components/Navbar";
import { useMutation, useQuery } from "react-query";
import {
    criarItemVenda,
    criarVenda,
    getProdutos,
} from "../services/apis/index";
import ProductCard from "../components/card";
import Cookies from "js-cookie";

export default function Vendas() {
    const getUser = () => {
        const info = Cookies.get("LOGIN_INFO");
        const infodec = info ? JSON.parse(info).user : undefined;
        return infodec;
    };

    const [bag, setBag] = useState([]);
    const [expand, setExpand] = useState(false);
    const valorTotal = bag.reduce(
        (acc, produto) => acc + parseFloat(produto.valor),
        0
    );

    const produtos = useQuery("produtos", getProdutos);
    const inserirItems = useMutation(criarItemVenda);
    const finalizarVenda = useMutation(criarVenda, {
        onSuccess: async (r) => {
            const updatedBag = [];
            bag.forEach((produto) => {
                const existingItem = updatedBag.find(
                    (item) => item.codProduto === produto.codProduto
                );
                if (existingItem) {
                    existingItem.qtdProduto += 1;
                } else {
                    updatedBag.push({ ...produto, qtdProduto: 1 });
                }
            });

            updatedBag.forEach(async (produto) => {
                await inserirItems.mutateAsync({
                    codProduto: produto.codProduto,
                    vendaSeq: r.data.seq,
                    qtdProduto: produto.qtdProduto,
                });
            });

            alert(`Venda finalizada com sucesso. Cupom N.º${r.data.numCupom}!`);
            setBag([]);
        },
    });

    const handleAddToBag = (produto) => {
        const newList = [...bag];
        newList.push(produto);

        setBag(newList);
    };

    const handleRemoveToBag = (index) => {
        const newList = [...bag];
        newList.splice(index, 1);
        setBag(newList);
    };

    return (
        <>
            <Head title="Sorveteria" />
            <NavBar />
            <div className="px-3 py-10 bg-gray-100 min-h-[calc(100vh-64px)] flex flex-col">
                {finalizarVenda.isLoading || inserirItems.isLoading ? (
                    <div className="text-center">Finalizando a venda</div>
                ) : (
                    <>
                        {" "}
                        <div className=" max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {produtos?.data?.data?.data.map((produto) => (
                                <ProductCard
                                    key={produto.codProduto}
                                    produto={produto}
                                    onAddToBag={handleAddToBag}
                                />
                            ))}
                        </div>
                        <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-4 shadow-md flex justify-between items-center">
                            <div className="flex-col w-full">
                                {expand && (
                                    <div className="flex-col w-full max-h-36 overflow-y-auto">
                                        {bag.map((produto, i) => (
                                            <div
                                                key={
                                                    produto.codProduto.toString() +
                                                    i.toString()
                                                }
                                                className="w-full flex justify-between items-center mb-1.5"
                                            >
                                                <span className="flex">
                                                    R$ {produto.valor} {" - "}{" "}
                                                    {produto.desProduto}
                                                </span>

                                                <button
                                                    className="mx-2 text-white bg-red-500 rounded-md px-2"
                                                    onClick={() =>
                                                        handleRemoveToBag(i)
                                                    }
                                                >
                                                    Remover
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {bag.length > 0 && (
                                    <div className="flex w-full justify-end my-2">
                                        <button
                                            className="text-white bg-blue-500 rounded-md px-2"
                                            onClick={() => setExpand(!expand)}
                                        >
                                            {expand ? "Esconder " : "Ver "}{" "}
                                            produtos
                                        </button>
                                    </div>
                                )}
                                <div className="flex w-full justify-between">
                                    <span className="text-lg font-semibold mt-2">
                                        Total: R$ {valorTotal}
                                    </span>
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                                        onClick={() => {
                                            if (valorTotal > 0) {
                                                finalizarVenda.mutateAsync({
                                                    valorTotal,
                                                    codUsuario:
                                                        getUser().codUsuario,
                                                });
                                            }
                                        }}
                                    >
                                        Finalizar Venda
                                    </button>
                                </div>
                            </div>
                        </footer>
                    </>
                )}
            </div>
        </>
    );
}
