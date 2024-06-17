import React from "react";

const ProductCard = ({ produto, onAddToBag }) => {
    const handleAdd = () => {
        onAddToBag(produto);
    };

    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white text-center">
            <h2 className="text-xl font-semibold mb-4">{produto.desProduto}</h2>
            <p className="text-lg text-gray-600 mb-4">R$ {produto.valor}</p>
            <button
                onClick={handleAdd}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                Adicionar Produto
            </button>
        </div>
    );
};

export default ProductCard;
