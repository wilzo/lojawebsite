# 📧 Configuração do EmailJS - Mega Tintas

Este guia explica como configurar o envio de emails do formulário de contato.

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS

- Acesse [https://emailjs.com](https://emailjs.com)
- Crie uma conta gratuita
- Faça login no painel

### 2. Configurar Serviço de Email

- No painel, vá em **Email Services**
- Clique em **Add New Service**
- Escolha **Gmail** (ou outro provedor)
- Configure com o email: `megatintascm@gmail.com`
- Anote o **Service ID** gerado

### 3. Criar Template de Email

- Vá em **Email Templates**
- Clique em **Create New Template**
- Configure o template com:

**Assunto:**

```
Nova mensagem do site Mega Tintas - {{from_name}}
```

**Corpo do email:**

```html
<h2>Nova mensagem recebida através do site</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>

<h3>Mensagem:</h3>
<p>{{message}}</p>

<hr />
<p>
  <em
    >Esta mensagem foi enviada através do formulário de contato do site Mega
    Tintas.</em
  >
</p>
```

- Anote o **Template ID** gerado

### 4. Obter Public Key

- Vá em **Account** → **General**
- Copie a **Public Key**

### 5. Configurar no Projeto

Edite o arquivo `src/config/emailConfig.ts`:

```typescript
export const emailConfig = {
  serviceId: "SEU_SERVICE_ID_AQUI",
  templateId: "SEU_TEMPLATE_ID_AQUI",
  publicKey: "SUA_PUBLIC_KEY_AQUI",
  toEmail: "megatintascm@gmail.com",
};
```

## ✅ Teste

1. Execute o projeto: `npm run dev`
2. Acesse a página de contato
3. Preencha e envie o formulário
4. Verifique se o email chegou em `megatintascm@gmail.com`

## 🔧 Troubleshooting

### Erro 401 - Unauthorized

- Verifique se a Public Key está correta
- Certifique-se de que o domínio está autorizado no EmailJS

### Erro 400 - Bad Request

- Verifique se o Service ID e Template ID estão corretos
- Confirme se todos os campos obrigatórios estão sendo enviados

### Email não chegou

- Verifique a pasta de spam
- Confirme se o serviço de email está ativo no EmailJS
- Teste com um email pessoal primeiro

## 📝 Limitações da Conta Gratuita

- 200 emails por mês
- Para mais emails, considere um plano pago do EmailJS

## 🔐 Segurança

- A Public Key pode ser exposta no frontend
- As credenciais reais ficam seguras no EmailJS
- Configure filtros anti-spam se necessário
