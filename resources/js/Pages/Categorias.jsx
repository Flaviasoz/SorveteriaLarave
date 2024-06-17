import NavBar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "react-query";
import {
    atualizarCategoria,
    criarCategoria,
    deletarCategoria,
    getCategoria,
} from "../services/apis/index";
import { customStyles, paginationComponentOptions } from "../../css/table";
import Modal from "@/components/Modal";
import { useState } from "react";

const Categorias = () => {
    const [modal, setModal] = useState(false);
    const [categoria, setCategoria] = useState();
    const [ind, setInd] = useState(false);

    const categorias = useQuery("categorias", getCategoria);
    const excluirCategoria = useMutation(deletarCategoria, {
        onSuccess: () => {
            categorias.refetch();
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a exclusão. Por favor, tente novamente."
            );
        },
    });
    const editarCategoria = useMutation(atualizarCategoria, {
        onSuccess: () => {
            categorias.refetch();
            setModal(false);
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a edição. Por favor, tente novamente."
            );
        },
    });
    const novaCategoria = useMutation(criarCategoria, {
        onSuccess: () => {
            categorias.refetch();
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
        const codCategoria = e.target.codCategoria.value;
        const desCategoria = e.target.desCategoria.value;
        // Adicionar a linha abaixo para atualizar o estado com os valores do formulário
        setCategoria({ codCategoria, desCategoria });
    };

    return (
        <>
            <Head title="Categorias" />
            <NavBar />
            <div className="px-3">
                <h1 className="text-3xl font-semibold text-gray-800 my-4">
                    Categorias
                </h1>
                <div className="w-full flex justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            setModal(true);
                            setCategoria(undefined);
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
                            name: "Sequência",
                            selector: (row) => row.codCategoria,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Nome",
                            selector: (row) => row.desCategoria,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Editar",
                            selector: (row) => row.codCategoria,
                            cell: (row) => (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setModal(true), setCategoria(row);
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
                            selector: (row) => row.codCategoria,
                            cell: (row) => (
                                <button
                                    type="button"
                                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() =>
                                        excluirCategoria.mutateAsync(
                                            row.codCategoria
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
                    data={categorias?.data?.data?.data ?? []}
                    progressPending={
                        categorias.isRefetching || categorias.isLoading
                    }
                    progressComponent={<div>Carregando...</div>}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent={<div>Não existe categorias.</div>}
                />
                <Modal
                    show={modal}
                    closeable
                    onClose={() => setModal(false)}
                    title={ind ? "Editar Categoria" : "Criar Categoria"}
                >
                    <form className="px-3 items-center" onSubmit={handleSubmit}>
                        {ind && (
                            <div className="mb-4">
                                <label
                                    htmlFor="codCategoria"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Código da categoria
                                </label>
                                <input
                                    type="text"
                                    id="codCategoria"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    disabled={ind}
                                    value={categoria?.codCategoria}
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="desCategoria"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nome
                            </label>
                            <input
                                onChange={(e) =>
                                    setCategoria({
                                        ...categoria,
                                        desCategoria: e.target.value,
                                    })
                                }
                                value={categoria?.desCategoria}
                                type="text"
                                id="desCategoria"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite o nome da categoria"
                            />
                        </div>
                        <div className="flex items-center justify-end pb-3">
                            <button
                                onClick={() => {
                                    if (ind) {
                                        editarCategoria.mutateAsync(categoria);
                                    } else {
                                        novaCategoria.mutateAsync(categoria);
                                    }
                                }}
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

export default Categorias;
