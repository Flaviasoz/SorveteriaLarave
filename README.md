# Autores:

198779 - Vinicius do Carmo Loeblein
198726 - Flavia Roseane Alves de Souza

# Iniciando o Projeto

Antes de iniciar o projeto, certifique-se de instalar as dependências necessárias executando os seguintes comandos:

1. Instale as dependências do Composer:
   ```bash
   composer install
   ```

2. Instale as dependências do npm:
   ```bash
   npm install
   ```

Para iniciar o projeto, siga os passos abaixo:

1. Execute as migrações do banco de dados:
   ```bash
   php artisan migrate
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Inicie o servidor PHP:
   ```bash
   php artisan serve
   ```

4. Para limpar o cache da aplicação, utilize o comando:
   ```bash
   php artisan cache:clear
   ```

5. Para limpar as configurações em cache, utilize o comando:
   ```bash
   php artisan config:clear
   ```

6. Para limpar a view cache, utilize o comando:
   ```bash
   php artisan view:clear
   ```

