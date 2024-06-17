import axios from '..'

export const realizarlogin = async (data) => {
    const response = await axios.post('/login', { ...data })
    return Promise.resolve(response)
  }

  export const realizarCadastro = async (data) => {
    const response = await axios.post('/register', { ...data })
    return Promise.resolve(response)
  }

  export const getEstados = async () => {
    const response = await axios.get('/estados');
    return Promise.resolve(response);
  }

  export const criarEstado = async (data) => {
    const response = await axios.post('/estados', { ...data });
    return Promise.resolve(response);
  }

  export const atualizarEstado = async (data) => {
    const response = await axios.put(`/estados/${data.codSigla}`, { ...data });
    return Promise.resolve(response);
  }

  export const deletarEstado = async (id) => {
    const response = await axios.delete(`/estados/${id}`);
    return Promise.resolve(response);
  }

  export const getCategoria = async () => {
    const response = await axios.get('/categorias');
    return Promise.resolve(response);
  }

  export const criarCategoria = async (data) => {
    const response = await axios.post('/categorias', { ...data });
    return Promise.resolve(response);
  }

  export const atualizarCategoria = async (data) => {
    const response = await axios.put(`/categorias/${data.codCategoria}`, { ...data });
    return Promise.resolve(response);
  }

  export const deletarCategoria = async (id) => {
    const response = await axios.delete(`/categorias/${id}`);
    return Promise.resolve(response);
  }

  export const getFornecedores = async () => {
    const response = await axios.get('/fornecedores');
    return Promise.resolve(response);
  }

  export const criarFornecedor = async (data) => {
    const response = await axios.post('/fornecedores', { ...data });
    return Promise.resolve(response);
  }

  export const atualizarFornecedor = async (data) => {
    const response = await axios.put(`/fornecedores/${data.codFornecedor}`, { ...data });
    return Promise.resolve(response);
  }

  export const deletarFornecedor = async (id) => {
    const response = await axios.delete(`/fornecedores/${id}`);
    return Promise.resolve(response);
  }

  export const getProdutos = async () => {
    const response = await axios.get('/produtos');
    return Promise.resolve(response);
  }

  export const criarProduto = async (data) => {
    const response = await axios.post('/produtos', { ...data });
    return Promise.resolve(response);
  }

  export const atualizarProduto = async (data) => {
    const response = await axios.put(`/produtos/${data.codProduto}`, { ...data });
    return Promise.resolve(response);
  }

  export const deletarProduto = async (id) => {
    const response = await axios.delete(`/produtos/${id}`);
    return Promise.resolve(response);
  }

  // venda

  export const criarVenda = async (data) => {
    const response = await axios.post('/vendas', { ...data });
    return Promise.resolve(response);
  }

  export const getVendas = async () => {
    const response = await axios.get('/vendas');
    return Promise.resolve(response);
  }

  export const atualizarVenda = async (data) => {
    const response = await axios.put(`/vendas/${data.seq}`, { ...data });
    return Promise.resolve(response);
  }

  export const deletarVenda = async (seq) => {
    const response = await axios.delete(`/vendas/${seq}`);
    return Promise.resolve(response);
  }

  //item venda

  export const criarItemVenda = async (data) => {
    const response = await axios.post('/item-venda', { ...data });
    return Promise.resolve(response);
  }

  export const getItensVenda = async (data) => {
    const response = await axios.get(`/item-venda?vendaSeq=${data.vendaSeq}`);
    return Promise.resolve(response);
  }

  export const atualizarItemVenda = async (data) => {
    const response = await axios.put(`/item-venda/${data.id}`, { ...data });
    return Promise.resolve(response);
  }

  export const deletarItemVenda = async (id) => {
    const response = await axios.delete(`/item-venda/${id}`);
    return Promise.resolve(response);
  }

  export const logout = async () => {
    const response = await axios.post('/logout');
    return Promise.resolve(response);
  }
