import NavBar from "@/components/Navbar";
import { Head } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { useMutation, useQuery } from "react-query";
import { getItensVenda, getVendas } from "../services/apis/index";
import { customStyles, paginationComponentOptions } from "../../css/table";
import { useState } from "react";

const ExpandeProdutos = ({ produtos, loading }) => {
    return (
        <DataTable
            columns={[
                {
                    name: "Produto",
                    selector: (produto) => produto.codProduto,
                    sortable: true,
                },
                {
                    name: "Quantidade",
                    selector: (produto) => produto.qtdProduto,
                    sortable: true,
                },
            ]}
            data={produtos}
            customStyles={customStyles}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            progressComponent={<div>Carregando...</div>}
            progressPending={loading}
        />
    );
};

const RelVendas = () => {
    const [dtaRow, setDtaRow] = useState(null);

    const vendas = useQuery("vendas", getVendas);
    const produtosVenda = useMutation(getItensVenda);

    return (
        <>
            <Head title="Relatório de Vendas" />
            <NavBar />
            <div className="px-3">
                <h1 className="text-3xl font-semibold text-gray-800 my-4">
                    Relatório de Vendas
                </h1>
                <DataTable
                    columns={[
                        {
                            name: "Seq",
                            selector: (row) => row.seq,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Data Venda",
                            selector: (row) => row.dtaVenda,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Cupom",
                            selector: (row) => row.numCupom,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Valor Total",
                            selector: (row) => row.valorTotal,
                            sortable: true,
                            center: true,
                        },
                        {
                            name: "Usuario",
                            selector: (row) => row.codUsuario,
                            sortable: true,
                            center: true,
                        },
                    ]}
                    pagination
                    subHeaderWrap
                    highlightOnHover
                    customStyles={customStyles}
                    data={vendas?.data?.data?.data ?? []}
                    progressPending={vendas.isRefetching || vendas.isLoading}
                    progressComponent={<div>Carregando...</div>}
                    paginationComponentOptions={paginationComponentOptions}
                    noDataComponent={<div>Não existem vendas.</div>}
                    expandableRows
                    expandOnRowClicked
                    onRowClicked={(row) =>
                        produtosVenda.mutateAsync({ vendaSeq: row.seq })
                    }
                    expandableRowsComponent={() =>
                        ExpandeProdutos({
                            produtos: produtosVenda?.data?.data?.data ?? [],
                            loading: produtosVenda.isLoading,
                        })
                    }
                    expandableRowExpanded={(row) => row === dtaRow}
                    onRowExpandToggled={(_, row) => setDtaRow(row)}
                    expandableRowsHideExpander
                />
            </div>
        </>
    );
};

export default RelVendas;
