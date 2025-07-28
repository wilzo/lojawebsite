# 🚨 PROBLEMA COM IMAGENS EM PRODUÇÃO - SOLUÇÕES

## 📋 Checklist de Verificação

### 1. ✅ Estrutura dos Arquivos
- [ ] Pasta `dist` foi criada após o build
- [ ] Pasta `assets` existe dentro de `dist`
- [ ] Todas as imagens estão em `dist/assets`

### 2. 🌐 Configuração do Servidor
- [ ] Todos os arquivos da pasta `dist` foram enviados para o servidor
- [ ] Servidor está configurado para servir arquivos estáticos
- [ ] Permissões dos arquivos estão corretas (644 para arquivos, 755 para pastas)

### 3. 🔧 Configuração do Domínio
- [ ] DNS está apontando corretamente para o servidor
- [ ] Certificado SSL está ativo
- [ ] Cache do navegador foi limpo

## 🛠️ Soluções Rápidas

### Solução 1: Recriar Build
```bash
# Deletar build anterior
rm -rf dist

# Novo build
npm run build

# Verificar se assets foram gerados
ls -la dist/assets/
```

### Solução 2: Verificar Paths
- Verifique se as imagens estão acessíveis em: `https://megatintasvg.com.br/assets/images/`
- Teste uma imagem diretamente no navegador

### Solução 3: Configuração do Servidor
Se usar Apache, adicione no `.htaccess`:
```apache
# Força todos os recursos a serem servidos corretamente
<FilesMatch "\.(png|jpg|jpeg|gif|svg|css|js)$">
    Header set Cache-Control "public, max-age=31536000"
</FilesMatch>

# Rewrite para SPA
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Solução 4: Testar Localmente
```bash
# Testar build em produção localmente
npm run build
npm run preview
```

## 🔍 Debug
1. Abra F12 no navegador
2. Vá na aba Network
3. Recarregue a página
4. Veja quais imagens estão falhando (404)
5. Verifique se os paths estão corretos

## 📞 Se nada funcionar:
- Verifique se o servidor suporta Single Page Applications (SPA)
- Configure redirects para index.html
- Teste com um servidor diferente
