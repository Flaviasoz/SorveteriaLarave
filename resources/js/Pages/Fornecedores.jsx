import NavBar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "react-query";
import {
    atualizarFornecedor,
    criarFornecedor,
    deletarFornecedor,
    getEstados,
    getFornecedores,
} from "../services/apis/index";
import { customStyles, paginationComponentOptions } from "../../css/table";
import Modal from "@/components/Modal";
import { useState } from "react";

const Fornecedor = () => {
    const [modal, setModal] = useState(false);
    const [fornecedor, setFornecedor] = useState();
    const [ind, setInd] = useState(false);

    const fornecedores = useQuery("fornecedores", getFornecedores);
    const estados = useQuery("estadosFornecedores", getEstados);
    const excluirFornecedor = useMutation(deletarFornecedor, {
        onSuccess: () => {
            fornecedores.refetch();
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a exclusão. Por favor, tente novamente."
            );
        },
    });
    const editarFornecedor = useMutation(atualizarFornecedor, {
        onSuccess: () => {
            fornecedores.refetch();
            setModal(false);
        },
        onError: () => {
            alert(
                "Houve um problema ao realizar a edição. Por favor, tente novamente."
            );
        },
    });
    const novoFornecedor = useMutation(criarFornecedor, {
        onSuccess: () => {
            fornecedores.refetch();
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
            editarFornecedor.mutateAsync(fornecedor);
        } else {
            novoFornecedor.mutateAsync({
                ...fornecedor,
                estado:
                    fornecedor?.estado ?? estados?.data?.data?.data[0].codSigla,
            });
        }
    };
    return (
        <>
            <Head title="fornecedores" />
            <NavBar />
            <div className="px-3">
                <h1 className="text-3xl font-semibold text-gray-800 my-4">
                    Fornecedores
                </h1>
                <div className="w-full flex justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            setModal(true);
                            setFornecedor(undefined);
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
                            name: "Código do Fornecedor",
                            selector: (row) => row.codFornecedor,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Nome do Fornecedor",
                            selector: (row) => row.desFornecedor,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "CNPJ",
                            selector: (row) => row.cnpj,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Contato",
                            selector: (row) => row.numContato,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Estado",
                            selector: (row) => row.estado,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Editar",
                            selector: (row) => row.codFornecedor,
                            cell: (row) => (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setModal(true), setFornecedor(row);
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
                            selector: (row) => row.codFornecedor,
                            cell: (row) => (
                                <button
                                    type="button"
                                    className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() =>
                                        excluirFornecedor.mutateAsync(
                                            row.codFornecedor
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
                    data={fornecedores?.data?.data?.data ?? []}
                    progressPending={
                        fornecedores.isRefetching || fornecedores.isLoading
                    }
                    progressComponent={<div>Carregando...</div>}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent={<div>Não existe fornecedores.</div>}
                />
                <Modal
                    show={modal}
                    closeable
                    onClose={() => setModal(false)}
                    title={ind ? "Editar Fornecedor" : "Criar Fornecedor"}
                >
                    <form className="px-3 items-center" onSubmit={handleSubmit}>
                        {ind && (
                            <div className="mb-4">
                                <label
                                    htmlFor="codFornecedor"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Código do Fornecedor
                                </label>
                                <input
                                    type="text"
                                    id="codFornecedor"
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    disabled={ind}
                                    value={fornecedor?.codFornecedor}
                                    onChange={(e) =>
                                        setFornecedor({
                                            ...fornecedor,
                                            codFornecedor: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="desFornecedor"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Nome do Fornecedor
                            </label>
                            <input
                                type="text"
                                id="desFornecedor"
                                required
                                placeholder="Digite o nome do fornecedor"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={fornecedor?.desFornecedor}
                                onChange={(e) =>
                                    setFornecedor({
                                        ...fornecedor,
                                        desFornecedor: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="cnpj"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                CNPJ
                            </label>
                            <input
                                type="text"
                                id="cnpj"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite o CNPJ do fornecedor"
                                value={fornecedor?.cnpj}
                                onChange={(e) =>
                                    setFornecedor({
                                        ...fornecedor,
                                        cnpj: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="numContato"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Número de Contato
                            </label>
                            <input
                                type="text"
                                id="numContato"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Digite o número de contato do fornecedor"
                                value={fornecedor?.numContato}
                                onChange={(e) =>
                                    setFornecedor({
                                        ...fornecedor,
                                        numContato: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="estado"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                Estado
                            </label>
                            <select
                                id="estado"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={fornecedor?.estado}
                                onChange={(e) =>
                                    setFornecedor({
                                        ...fornecedor,
                                        estado: e.target?.value,
                                    })
                                }
                            >
                                {estados?.data?.data?.data.map((estado) => (
                                    <option
                                        key={estado.codSigla}
                                        value={estado.codSigla}
                                    >
                                        {estado.nome}
                                    </option>
                                ))}
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

export default Fornecedor;
