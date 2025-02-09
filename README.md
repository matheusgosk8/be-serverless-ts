# Projeto Serverless com Serverless Framework

Este projeto utiliza o **Serverless Framework v4** para o desenvolvimento e execução de funções serverless. Ele permite a execução local utilizando o **serverless-offline** e requer autenticação na AWS para implantação.

## 🚀 Como Iniciar o Projeto

### 1️⃣ Pré-requisitos

- Node.js instalado
- Serverless Framework versão 4
- AWS CLI configurado (ou fornecer credenciais manualmente)

### 2️⃣ Instalar Dependências

```sh
npm install
```

### 3️⃣ Executar Localmente com Serverless Offline

```sh
serverless offline
```

### 4️⃣ Autenticação AWS

Ao implantar funções na AWS, o Serverless Framework pedirá para realizar login. Você pode:

- Fazer login manualmente com `serverless login`
- Configurar credenciais no AWS CLI:
  ```sh
  aws configure
  ```
- Definir variáveis de ambiente:
  ```sh
  export AWS_ACCESS_KEY_ID=your-access-key
  export AWS_SECRET_ACCESS_KEY=your-secret-key
  ```

## 🌍 Implantação na AWS

Para implantar as funções serverless:

```sh
serverless deploy
```

Isso criará os recursos necessários na AWS e disponibilizará os endpoints e funções configurados.

## 📌 Notas

- Certifique-se de estar usando a versão correta do Serverless Framework (`serverless -v`).
- Caso tenha problemas de autenticação, verifique as credenciais fornecidas e as permissões da AWS.

## 🏗️ Ponto de Partida

Este ponto de partida fornece uma base para aplicações serverless back-end, com:

- **TypeScript**
- **Jest** para testes
- **ESLint** e **Prettier** configurados
- **Serverless Framework**
- **Serverless Offline** como plugin

---

Agora você está pronto para desenvolver e testar seu projeto serverless! 🚀
