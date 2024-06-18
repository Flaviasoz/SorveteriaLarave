-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18/06/2024 às 03:04
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sorveteria`
--
CREATE DATABASE IF NOT EXISTS `sorveteria` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sorveteria`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `codCategoria` int(10) UNSIGNED NOT NULL,
  `desCategoria` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`codCategoria`, `desCategoria`, `created_at`, `updated_at`) VALUES
(1, 'caldas', '2024-06-18 02:24:08', '2024-06-18 02:24:08'),
(2, 'comida', '2024-06-18 02:25:07', '2024-06-18 02:25:07'),
(3, 'Confetes', '2024-06-18 03:48:34', '2024-06-18 03:48:34');

-- --------------------------------------------------------

--
-- Estrutura para tabela `estados`
--

CREATE TABLE `estados` (
  `codSigla` varchar(2) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `estados`
--

INSERT INTO `estados` (`codSigla`, `nome`, `created_at`, `updated_at`) VALUES
('NY', 'New York', '2024-06-18 03:47:14', '2024-06-18 03:47:14'),
('RS', 'Rio Grande do Sul', '2024-06-18 02:20:36', '2024-06-18 03:47:29');

-- --------------------------------------------------------

--
-- Estrutura para tabela `fornecedor`
--

CREATE TABLE `fornecedor` (
  `codFornecedor` bigint(20) UNSIGNED NOT NULL,
  `desFornecedor` varchar(50) NOT NULL,
  `cnpj` varchar(16) NOT NULL,
  `numContato` varchar(20) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `fornecedor`
--

INSERT INTO `fornecedor` (`codFornecedor`, `desFornecedor`, `cnpj`, `numContato`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'KIBON', '12197755412900', '54992238486', 'RS', '2024-06-18 02:23:58', '2024-06-18 02:23:58'),
(2, 'KIRUIM', '22222222222', '190 CELA 10', 'NY', '2024-06-18 03:48:08', '2024-06-18 03:48:08');

-- --------------------------------------------------------

--
-- Estrutura para tabela `item_venda`
--

CREATE TABLE `item_venda` (
  `codProduto` bigint(20) UNSIGNED NOT NULL,
  `vendaSeq` bigint(20) UNSIGNED NOT NULL,
  `qtdProduto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `item_venda`
--

INSERT INTO `item_venda` (`codProduto`, `vendaSeq`, `qtdProduto`) VALUES
(1, 1, 1),
(5, 2, 2),
(1, 2, 1),
(7, 3, 2),
(5, 3, 2),
(1, 3, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_04_28_193920_create_estados_table', 1),
(3, '2024_04_28_224050_create_categoria_table', 1),
(4, '2024_06_09_002927_create_usuario_table', 1),
(5, '2024_06_09_185239_create_fornecedor_table', 1),
(6, '2024_06_09_190310_create_produto_table', 1),
(7, '2024_06_09_205429_create_venda_table', 1),
(8, '2024_06_09_211051_create_item_venda_table', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '770c16051b8b96b751e77f5bb3bfe7de94d2a3884138d8f69d8f8feac0db09f2', '[\"*\"]', NULL, NULL, '2024-06-18 02:16:49', '2024-06-18 02:16:49'),
(2, 'App\\Models\\User', 1, 'auth_token', '72fd26475e64414c24b89f5c777971ee9a2f13b47f4fcbd1e195ba7c6f4bdd46', '[\"*\"]', NULL, NULL, '2024-06-18 02:17:30', '2024-06-18 02:17:30'),
(3, 'App\\Models\\User', 1, 'auth_token', 'f66addac0d66e4036bc89f11f8ccb1ee299ec25725cc319e798b1cf52b3acc02', '[\"*\"]', NULL, NULL, '2024-06-18 02:18:19', '2024-06-18 02:18:19'),
(4, 'App\\Models\\User', 1, 'auth_token', '929d6940c944ee27ab260b68caf04bb5570a7bdb3cec89bfe7ce61bd80116960', '[\"*\"]', NULL, NULL, '2024-06-18 02:18:42', '2024-06-18 02:18:42'),
(5, 'App\\Models\\User', 1, 'auth_token', '73d2529df60836f55e0415ad657e023a7de726768144f1e547aa574ccbec710e', '[\"*\"]', NULL, NULL, '2024-06-18 02:20:16', '2024-06-18 02:20:16'),
(6, 'App\\Models\\User', 1, 'auth_token', '10e8a7e399e843b4f3287a800fc42d7187cc81870e2220b123fa016cb960ba7b', '[\"*\"]', NULL, NULL, '2024-06-18 02:22:28', '2024-06-18 02:22:28'),
(7, 'App\\Models\\User', 1, 'auth_token', 'cd4f4d45a23e23e4bfdcad93cc0cb8c3351f48d3d42a1824701822da441a4966', '[\"*\"]', NULL, NULL, '2024-06-18 02:29:58', '2024-06-18 02:29:58'),
(8, 'App\\Models\\User', 1, 'auth_token', '5a2e236bcf628a87b272cc9e4ead0adeb229a0d76791a01851cbe16211631ac2', '[\"*\"]', NULL, NULL, '2024-06-18 02:30:18', '2024-06-18 02:30:18'),
(9, 'App\\Models\\User', 1, 'auth_token', '1e36d16d8cd84c904183a42ae50ee23520c358d43dcd9b924106a984307269ea', '[\"*\"]', NULL, NULL, '2024-06-18 02:49:34', '2024-06-18 02:49:34'),
(10, 'App\\Models\\User', 1, 'auth_token', 'c3ba35e8bcdcc942379af08eac3a27efb8c2f0adfca349022881e89690f81600', '[\"*\"]', NULL, NULL, '2024-06-18 03:22:30', '2024-06-18 03:22:30'),
(11, 'App\\Models\\User', 2, 'auth_token', '7dd0d695ed23199a8d8cfd4efcb8b12c39e33ab4afc20058afe2b0565f38d646', '[\"*\"]', '2024-06-18 03:42:17', NULL, '2024-06-18 03:34:12', '2024-06-18 03:42:17'),
(12, 'App\\Models\\User', 3, 'auth_token', '61ff6cb52b54a59b543ef198f69fe6b1ac6dc5f0d6367b0f763c1c496d41d539', '[\"*\"]', '2024-06-18 04:01:00', NULL, '2024-06-18 03:46:59', '2024-06-18 04:01:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `codProduto` bigint(20) UNSIGNED NOT NULL,
  `desProduto` varchar(50) NOT NULL,
  `valor` decimal(8,2) NOT NULL,
  `estoque` int(11) NOT NULL,
  `estoqueMinimo` int(11) NOT NULL,
  `codFornecedor` bigint(20) UNSIGNED NOT NULL,
  `codCategoria` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`codProduto`, `desProduto`, `valor`, `estoque`, `estoqueMinimo`, `codFornecedor`, `codCategoria`, `created_at`, `updated_at`) VALUES
(1, 'Picolé', 2.50, 80, 50, 1, 2, '2024-06-18 02:24:47', '2024-06-18 02:25:13'),
(5, 'Testesss', 1.00, 1, 0, 1, 1, '2024-06-18 03:38:23', '2024-06-18 03:38:23'),
(7, 'Sorvete de baunilha', 5.00, 10000000, 0, 1, 2, '2024-06-18 03:53:40', '2024-06-18 03:53:40');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `codUsuario` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `CPF` varchar(255) NOT NULL,
  `dtaNascimento` date NOT NULL,
  `senha` varchar(255) NOT NULL,
  `indAdm` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`codUsuario`, `nome`, `sobrenome`, `CPF`, `dtaNascimento`, `senha`, `indAdm`, `created_at`, `updated_at`) VALUES
(1, 'flavia', 'souza', '12197755412', '2000-03-07', '$2y$10$OQ2KcoUSgrgAA4WAm.z1QuN9IK8VR1kbyMEFWeh7c1ho8m3OGJTi.', 0, '2024-06-18 02:16:49', '2024-06-18 02:16:49'),
(2, 'vinicius', 'loeblein', '05253462069', '2002-10-06', '$2y$10$06j0FtrXrrZtMwrIvPanTO7EK140WUYB8nJQPKa1vnEt5bWBsNRTK', 0, '2024-06-18 03:34:12', '2024-06-18 03:34:12'),
(3, 'Rafael', 'Rieder', '11111111111', '1980-01-01', '$2y$10$X/MDdk/HOGhELrm1NqS2BulA2/1wwRjxZBYNsf7xZgjP6ffZBcBgy', 0, '2024-06-18 03:46:59', '2024-06-18 03:46:59');

-- --------------------------------------------------------

--
-- Estrutura para tabela `venda`
--

CREATE TABLE `venda` (
  `seq` bigint(20) UNSIGNED NOT NULL,
  `numCupom` int(11) NOT NULL,
  `dtaVenda` date NOT NULL,
  `valorTotal` decimal(8,2) NOT NULL,
  `codUsuario` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `venda`
--

INSERT INTO `venda` (`seq`, `numCupom`, `dtaVenda`, `valorTotal`, `codUsuario`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-06-17', 2.50, 1, '2024-06-18 02:25:21', '2024-06-18 02:25:21'),
(2, 2, '2024-06-18', 4.50, 3, '2024-06-18 03:49:31', '2024-06-18 03:49:31'),
(3, 3, '2024-06-18', 17.00, 3, '2024-06-18 03:54:29', '2024-06-18 03:54:29');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`codCategoria`);

--
-- Índices de tabela `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`codSigla`);

--
-- Índices de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  ADD PRIMARY KEY (`codFornecedor`),
  ADD KEY `fornecedor_estado_foreign` (`estado`);

--
-- Índices de tabela `item_venda`
--
ALTER TABLE `item_venda`
  ADD KEY `item_venda_codproduto_foreign` (`codProduto`),
  ADD KEY `item_venda_vendaseq_foreign` (`vendaSeq`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`codProduto`),
  ADD KEY `produto_codfornecedor_foreign` (`codFornecedor`),
  ADD KEY `produto_codcategoria_foreign` (`codCategoria`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`codUsuario`),
  ADD UNIQUE KEY `usuario_cpf_unique` (`CPF`);

--
-- Índices de tabela `venda`
--
ALTER TABLE `venda`
  ADD PRIMARY KEY (`seq`),
  ADD KEY `venda_codusuario_foreign` (`codUsuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `codCategoria` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `fornecedor`
--
ALTER TABLE `fornecedor`
  MODIFY `codFornecedor` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `codProduto` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `codUsuario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `venda`
--
ALTER TABLE `venda`
  MODIFY `seq` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `fornecedor`
--
ALTER TABLE `fornecedor`
  ADD CONSTRAINT `fornecedor_estado_foreign` FOREIGN KEY (`estado`) REFERENCES `estados` (`codSigla`);

--
-- Restrições para tabelas `item_venda`
--
ALTER TABLE `item_venda`
  ADD CONSTRAINT `item_venda_codproduto_foreign` FOREIGN KEY (`codProduto`) REFERENCES `produto` (`codProduto`),
  ADD CONSTRAINT `item_venda_vendaseq_foreign` FOREIGN KEY (`vendaSeq`) REFERENCES `venda` (`seq`);

--
-- Restrições para tabelas `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `produto_codcategoria_foreign` FOREIGN KEY (`codCategoria`) REFERENCES `categoria` (`codCategoria`),
  ADD CONSTRAINT `produto_codfornecedor_foreign` FOREIGN KEY (`codFornecedor`) REFERENCES `fornecedor` (`codFornecedor`);

--
-- Restrições para tabelas `venda`
--
ALTER TABLE `venda`
  ADD CONSTRAINT `venda_codusuario_foreign` FOREIGN KEY (`codUsuario`) REFERENCES `usuario` (`codUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
