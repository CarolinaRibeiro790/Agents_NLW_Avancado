# NLW Agents 
Projeto desenvolvido durante um evento da Rocketseat utilizando tecnologias modernas para criação de uma API robusta e eficiente e também demonstrar o uso de agentes inteligentes na web (Gemini).

## 🚀 Tecnologias
* React 19.1 - Biblioteca para interfaces de usuário
* TypeScript 5.8 - Superset JavaScript com tipagem estática
* Vite 7.0 - Build tool e servidor de desenvolvimento
* TailwindCSS 4.1 - Framework CSS utility-first
* React Router Dom 7.6 - Biblioteca de roteamento
* TanStack React Query 5.8 - Gerenciamento de estado servidor e cache
* Radix UI - Componentes primitivos acessíveis
* Shadcn/ui - Sistema de componentes
* Lucide React - Biblioteca de ícones
* Node.js com TypeScript nativo (experimental strip types)
* Fastify - Framework web rápido e eficiente
* PostgreSQL com extensão pgvector para vetores
* Drizzle ORM - Type-safe database operations
* Zod - Schema validation
* Docker - Containerização do banco de dados

## 🏗️ Arquitetura (Backend)
O projeto segue uma arquitetura modular com:

* Separação de responsabilidades entre rotas, schemas e conexão com banco
* Validação de schemas com Zod para type safety
* ORM type-safe com Drizzle para operações de banco de dados
* Validação de variáveis de ambiente centralizadas

## 📂 Padrões de Projeto (Frontend)
* Component-based Architecture - Arquitetura baseada em componentes React
* File-based Routing - Roteamento baseado em arquivos com React Router
* Server State Management - Gerenciamento de estado servidor com React Query
* Variant-based Components - Componentes com variantes usando CVA
* Composition Pattern - Padrão de composição com Radix Slot
* Path Aliasing - Alias de caminhos (@/ aponta para src/)
