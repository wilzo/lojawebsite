#!/bin/bash

# Script de build otimizado para produção
echo "🚀 Iniciando build de produção..."

# Limpar build anterior
rm -rf dist

# Build com configuração otimizada
npm run build

echo "✅ Build concluído!"
echo "📁 Arquivos gerados na pasta 'dist'"
echo ""
echo "🌐 Para fazer upload:"
echo "1. Faça upload de todos os arquivos da pasta 'dist' para o servidor"
echo "2. Configure o servidor para servir arquivos estáticos"
echo "3. Certifique-se que o domínio está apontando para a pasta correta"
echo ""
echo "🔧 Se as imagens não carregarem:"
echo "1. Verifique se a pasta 'assets' foi copiada corretamente"
echo "2. Confira as permissões dos arquivos no servidor"
echo "3. Teste o site localmente com: npm run preview"
