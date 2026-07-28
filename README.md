## Requisitos

* Conferir a versão do Node.js 22 ou superior: node -v
* Conferir se está instalado o npx: npx -v

## Como rodar o projeto baixado

Baixar os arquivos do GitHub.
```
git clone <repositorio_url> .
```
```
git clone https://github.com/celkecursos/lista-aula-curso-react19-typescript.git .
```

Instalar todas as dependências indicadas pelo package.json.
```
npm install
```

Rodar o projeto React.
```
npm run dev
```

Acessar no navegador a URL.
```
http://localhost:3000
```

## Sequencia para criar o projeto

Criar o projeto com React e Next.js. O ponto "." indica que deve ser criado no próprio diretório. 
```
npx create-next-app@latest .
```

Rodar o projeto React.
```
npm run dev
```

Acessar no navegador a URL.
```
http://localhost:3000
```
## Como enviar o projeto para o git hub
inicializar o novo repositório git 
```
git init
```
adicionar todos os arquivos modificados ao staging area - area de preparação
```
git add .
```
commit que representa um conjunto de alterações
```
git commit -m "base do projeto"
```
verificar em qual branch esta
```
git branch
```
renomear a branch atual do git para main
```
git branch -m main
```
conectar ao repositório remoto
```
git remote add origin https://github.com/
```

enviar os commits locais para o remoto
```
git push -u origin main
```

