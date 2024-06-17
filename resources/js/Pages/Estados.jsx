import NavBar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "react-query";
import {
    atualizarEstado,
    criarEstado,
    deletarEstado,
    getEstados,
} from "../services/apis/index";
import { customStyles, paginationComponentOptions } from "../../css/table";
import Modal from "@/components/Modal";
import { useState } from "react";

const Estados = () => {
    const [modal, setModal] = useState(false);
    const [estado, setEstado] = useState();
    const [ind, setInd] = useState(false);

    const estados = useQuery("estados", getEstados);
    const excluirEstado = useMutation(deletarEstado, {
        onSuccess: () => {
            estados.refetch();
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a exclusão. Por favor, tente novamente."
            );
        },
    });
    const editarEstado = useMutation(atualizarEstado, {
        onSuccess: () => {
            estados.refetch();
            setModal(false);
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a edição. Por favor, tente novamente."
            );
        },
    });
    const novoEstado = useMutation(criarEstado, {
        onSuccess: () => {
            estados.refetch();
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
        const codSigla = e.target.codSigla.value;
        const nome = e.target.nome.value;
        // Adicionar a linha abaixo para atualizar o estado com os valores do formulário
        setEstado({ codSigla, nome });
    };

    return (
        <>
            <Head title="Estados" />
            <NavBar />
            <div className="px-3">
                <h1 className="text-3xl font-semibold text-gray-800 my-4">
                    Estados
                </h1>
                <div className="w-full flex justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            setModal(true); setEstado(undefined);
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
                            name: "Sigla",
                            selector: (row) => row.codSigla,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Nome",
                            selector: (row) => row.nome,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Editar",
                            selector: (row) => row.codSigla,
                            cell: (row) => (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setModal(true), setEstado(row);
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
                            selector: (row) => row.codSigla,
                            cell: (row) => (
                                <button
                                    type="button"
                                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() =>
                                        excluirEstado.mutateAsync(row.codSigla)
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
                    data={estados?.data?.data?.data ?? []}
                    progressPending={estados.isRefetching || estados.isLoading}
                    progressComponent={<div>Carregando...</div>}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent={
                        <div>Não existe estados.</div>
                    }
                />
                <Modal
                    show={modal}
                    closeable
                    onClose={() => setModal(false)}
                    title={ind ? "Editar Estado" : "Criar Estado"}
                >
                    <form className="px-3 items-center" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="codSigla"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Código da sigla
                            </label>
                            <input
                                type="text"
                                id="codSigla"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite a sigla do estado"
                                disabled={ind}
                                value={estado?.codSigla}
                                onChange={(e) =>
                                    setEstado({
                                        ...estado,
                                        codSigla: e.target.value.toUpperCase(),
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="nome"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nome
                            </label>
                            <input
                                onChange={(e) =>
                                    setEstado({
                                        ...estado,
                                        nome: e.target.value,
                                    })
                                }
                                value={estado?.nome}
                                type="text"
                                id="nome"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite o nome do estado"
                            />
                        </div>
                        <div className="flex items-center justify-end pb-3">
                            <button
                                onClick={() => {
                                    if (ind) {
                                        editarEstado.mutateAsync(estado);
                                    } else {
                                        novoEstado.mutateAsync(estado);
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

export default Estados;
