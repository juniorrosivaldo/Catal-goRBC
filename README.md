# RBC Motores — catálogo e gestão

Catálogo público: https://rbc-motores-catalogo.mcamilla25.chatgpt.site

Área de gestão: https://rbc-motores-catalogo.mcamilla25.chatgpt.site/gestao

## O que este repositório contém

Código completo da aplicação React/TypeScript com Vinext, banco D1, arquivos R2, autenticação pelo Sites e migrações versionadas. Este é o projeto original; o link publicado sozinho não substitui estes arquivos.

- Catálogo com busca por marca, potência e polos; ordenação por preço/potência.
- Ficha, fotos reais, preço opcional e formulário com protocolo.
- Administração: cadastrar/editar motores, arquivar, marcar como vendido/reservado/disponível e enviar até oito fotos por motor.
- Pedidos: consulta privada, status comercial e notas internas; abertura manual do WhatsApp do solicitante.
- Registros antigos são preservados pelas migrações.

Os 15 modelos de referência vêm da tabela RBC de 17/10/2026. Estoque, preço, condição, garantia e especificações de placa dependem de conferência comercial. Não assumir que referência histórica representa disponibilidade atual. Motores vendidos ou arquivados não aparecem no catálogo público. Fotos ilustrativas são identificadas.

## Operação

Abra `/gestao` e entre com a mesma conta ChatGPT proprietária do Site. Somente o email configurado na variável secreta `ADMIN_EMAIL` é autorizado pelo servidor. Uma pessoa estar conectada ao ChatGPT não a torna administradora.

Em Motores, selecione Editar ou Cadastrar motor. Fotos são comprimidas no navegador, enviadas para R2 e ficam públicas. Clique em Salvar motor para confirmar as mudanças. Remover uma foto da ficha a desassocia; o arquivo armazenado não é apagado automaticamente.

Em Pedidos, consulte os dados de contato, altere a etapa, escreva notas e clique em Salvar atendimento. O botão WhatsApp abre uma conversa para envio manual; não há disparo automático.

O catálogo não processa pagamento nem reserva automática. O contato oficial é (81) 98466-6199. O botão Fale com a RBC abre o WhatsApp. Cada motor também tem um link de WhatsApp com suas especificações. O formulário continua registrando pedidos e oferece continuidade pelo WhatsApp com o protocolo. Todos os envios de mensagens são manuais.

## Instalação no Codex

1. Extraia o pacote de código na raiz do repositório escolhido. Preserve as pastas ocultas `.openai` e os arquivos `.gitignore`.
2. Mantenha o README deste projeto; não substitua o código por um diagnóstico vazio.
3. Use Node.js 22.13 ou superior e a versão de pnpm indicada em `package.json`.
4. Execute `pnpm install --frozen-lockfile`.
5. Execute `pnpm exec tsc --noEmit` e `pnpm run build`.
6. Aplique as migrações locais em ordem. A primeira precisa ser aplicada antes da segunda:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_flawless_sharon_carter.sql
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0001_boring_zuras.sql
```

7. Execute `pnpm run dev` e use o endereço retornado. No ambiente gerenciado Sites, use `sites-preview start <caminho-do-projeto>` em vez de iniciar outro servidor.

O projeto usa o perfil portátil quando não há configuração local do Sites. O banco local e o de produção são independentes. Não execute novamente migrações já aplicadas e não edite migrações existentes.

## Configuração

`.openai/hosting.json` identifica o Site existente e declara `d1: DB` e `r2: BUCKET`. Preserve a identidade do Site. Não crie outro projeto para corrigir problemas deste.

A variável `ADMIN_EMAIL` precisa existir no ambiente de produção como segredo, configurada via Sites. O valor já está configurado no Site atual. Uma exportação de código não inclui variáveis, fotos, banco, credenciais ou clientes.

Para desenvolvimento local, crie `.dev.vars` (ignorado pelo Git) com `ADMIN_EMAIL` definido para uma identidade de teste. O login hospedado depende do Sites; uma página local não simula automaticamente o login real. Testes com cabeçalhos de identidade devem ser limitados ao servidor local, nunca à produção.

## Publicação

Usar a skill Sites e os helpers oficiais. Abrir o projeto existente, obter credencial de escrita, executar os checks/build, sincronizar o código, salvar e publicar a versão. O catálogo está público por autorização do proprietário; preserve esse acesso. Gestão e APIs administrativas continuam verificando identidade e autorização no servidor.

Não publicar código ou dados de clientes em outro provedor sem configurar os serviços equivalentes e revisar autenticação. Não enviar `.dev.vars`, `.env`, `node_modules`, `dist`, `.wrangler`, tokens ou dados locais para o GitHub.

## Custos e continuidade

Nenhum novo serviço pago foi contratado nesta entrega. Hospedagem e recursos usam o Sites disponível na conta. Disponibilidade, limites e condições do provedor podem mudar; não há garantia de gratuidade ilimitada. Não ativar planos pagos nem APIs de IA para o funcionamento deste catálogo.

A aplicação não precisa de uma API de IA para cadastrar motores ou receber pedidos. Domínio próprio, WhatsApp automatizado e integrações adicionais ficam fora desta entrega.

Faça exportações periódicas dos pedidos e registros no ambiente de hospedagem antes de mudanças relevantes. O histórico Git preserva o código, não o banco ou as fotos.

## Verificações de integração

Execute `node --experimental-vm-modules scripts/test-api.mjs` em Node 22.13+ com `node:sqlite` disponível. Os testes executam os handlers reais e as migrações em SQLite em memória, com adaptadores locais D1/R2 e identidades fictícias. Verificam bloqueio de visitantes e usuários não autorizados, origem de alterações administrativas, cadastro de motor, retirada de vendido do catálogo, consentimento, persistência de pedidos, alteração de atendimento e validação de fotos. Não substituem a conferência do login e dos recursos na hospedagem real.
