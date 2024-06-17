import NavBar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "react-query";
import {
    atualizarProduto,
    criarProduto,
    deletarProduto,
    getCategoria,
    getFornecedores,
    getProdutos,
} from "../services/apis/index";
import { customStyles, paginationComponentOptions } from "../../css/table";
import Modal from "@/components/Modal";
import { useState } from "react";

const Produtos = () => {
    const [modal, setModal] = useState(false);
    const [produto, setProduto] = useState();
    const [ind, setInd] = useState(false);

    const produtos = useQuery("produtos", getProdutos);
    const categorias = useQuery("categorias", getCategoria);
    const fornecedores = useQuery("fornecedores", getFornecedores);

    const excluirProduto = useMutation(deletarProduto, {
        onSuccess: () => {
            produtos.refetch();
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a exclusão. Por favor, tente novamente."
            );
        },
    });
    const editarProduto = useMutation(atualizarProduto, {
        onSuccess: () => {
            produtos.refetch();
            setModal(false);
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a edição. Por favor, tente novamente."
            );
        },
    });
    const novoProduto = useMutation(criarProduto, {
        onSuccess: () => {
            produtos.refetch();
            setModal(false);
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a criação. Por favor, tente novamente."
            );
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (ind) {
            editarProduto.mutateAsync(produto);
        } else {
            novoProduto.mutateAsync({
                ...produto,
                codFornecedor:
                    produto?.codFornecedor ??
                    fornecedores?.data?.data?.data[0].codFornecedor,
                codCategoria:
                    produto?.codCategoria ??
                    categorias?.data?.data?.data[0].codCategoria,
            });
        }
    };

    return (
        <>
            <Head title="Produtos" />
            <NavBar />
            <div className="px-3">
                <h1 className="text-3xl font-semibold text-gray-800 my-4">
                    Produtos
                </h1>
                <div className="w-full flex justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            setModal(true);
                            setProduto(undefined);
                            setInd(false);
                        }}
                        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Novo
                    </button>
                </div>
                <DataTable
                    columns={[
                        {
                            name: "Código do Produto",
                            selector: (row) => row.codProduto,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Nome do Produto",
                            selector: (row) => row.desProduto,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Valor",
                            selector: (row) => row.valor,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Estoque",
                            selector: (row) => row.estoque,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Estoque minimo",
                            selector: (row) => row.estoqueMinimo,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Código Fornecedor",
                            selector: (row) => row.codFornecedor,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Código Categoria",
                            selector: (row) => row.codCategoria,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Editar",
                            selector: (row) => row.codProduto,
                            cell: (row) => (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setModal(true);
                                        setProduto(row);
                                        setInd(true);
                                    }}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Editar
                                </button>
                            ),
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Excluir",
                            selector: (row) => row.codProduto,
                            cell: (row) => (
                                <button
                                    type="button"
                                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() =>
                                        excluirProduto.mutateAsync(
                                            row.codProduto
                                        )
                                    }
                                >
                                    Excluir
                                </button>
                            ),
                            sortable: true,
                            center: true,
                        },
                    ]}
                    pagination
                    subHeaderWrap
                    highlightOnHover
                    customStyles={customStyles}
                    data={produtos?.data?.data?.data ?? []}
                    progressPending={
                        produtos.isRefetching || produtos.isLoading
                    }
                    progressComponent={<div>Carregando...</div>}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent={<div>Não existe produtos.</div>}
                />
                <Modal
                    show={modal}
                    closeable
                    onClose={() => setModal(false)}
                    title={ind ? "Editar Produto" : "Criar Produto"}
                >
                    <form className="px-3 items-center" onSubmit={handleSubmit}>
                        {ind && (
                            <div className="mb-4">
                                <label
                                    htmlFor="codProduto"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Código do Produto
                                </label>
                                <input
                                    type="text"
                                    id="codProduto"
                                    required
                                    readOnly
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={produto?.codProduto}
                                    onChange={(e) =>
                                        setProduto({
                                            ...produto,
                                            codProduto: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="desProduto"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Descrição do Produto
                            </label>
                            <input
                                type="text"
                                id="desProduto"
                                required
                                placeholder="Digite a descrição do produto"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={produto?.desProduto}
                                onChange={(e) =>
                                    setProduto({
                                        ...produto,
                                        desProduto: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="valor"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Valor
                            </label>
                            <input
                                type="text"
                                id="valor"
                                required
                                placeholder="Digite o valor do produto"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={produto?.valor}
                                onChange={(e) =>
                                    setProduto({
                                        ...produto,
                                        valor: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="estoque"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Estoque
                            </label>
                            <input
                                type="text"
                                id="estoque"
                                required
                                placeholder="Digite a quantidade em estoque"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={produto?.estoque}
                                onChange={(e) =>
                                    setProduto({
                                        ...produto,
                                        estoque: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="estoqueMinimo"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Estoque Mínimo
                            </label>
                            <input
                                type="text"
                                id="estoqueMinimo"
                                required
                                placeholder="Digite a quantidade mínima em estoque"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={produto?.estoqueMinimo}
                                onChange={(e) =>
                                    setProduto({
                                        ...produto,
                                        estoqueMinimo: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="codFornecedor"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Código do Fornecedor
                            </label>
                            <select
                                id="codFornecedor"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={produto?.codFornecedor}
                                onChange={(e) =>
                                    setProduto({
                                        ...produto,
                                        codFornecedor: e.target.value,
                                    })
                                }
                            >
                                {fornecedores?.data?.data?.data.map(
                                    (fornecedor) => (
                                        <option
                                            key={fornecedor.codFornecedor}
                                            value={fornecedor.codFornecedor}
                                        >
                                            {fornecedor.desFornecedor}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="codCategoria"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Código da Categoria
                            </label>
                            <select
                                id="codCategoria"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={produto?.codCategoria}
                                onChange={(e) =>
                                    setProduto({
                                        ...produto,
                                        codCategoria: e.target.value,
                                    })
                                }
                            >
                                {categorias?.data?.data?.data.map(
                                    (categoria) => (
                                        <option
                                            key={categoria.codCategoria}
                                            value={categoria.codCategoria}
                                        >
                                            {categoria.desCategoria}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                        <div className="flex items-center justify-end pb-3">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        </>
    );
};

export default Produtos;
