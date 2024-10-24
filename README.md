# Template Plugin para Figma

[🇺🇸 English](#english-guide) 🌟 Help us by starring the project! 🌟

[🇧🇷 Português](#guia-em-português) 🌟 Ajude-nos dando uma estrela ao projeto! 🌟

---

##### Guia em Português

## Projeto Template Figma com Tailwind CSS

### Pré-requisitos

- [Node.js](https://nodejs.org) – versão 20 ou superior
- [Figma desktop app](https://figma.com/downloads/)

### Desenvolvendo o Plugin

Para iniciar o desenvolvimento do plugin, instale as dependências do projeto e, em seguida, execute o comando `watch`:

```bash
$ npm install
$ npm run watch
```

ou

```bash
$ yarn
$ yarn watch
```

### Instalar o Plugin

1. No aplicativo desktop do Figma, abra um documento do Figma.
2. Procure e execute `Importar plugin a partir do manifesto…` via barra de pesquisa ou pelo menu.
3. Selecione o arquivo `manifest.json` gerado pelo script `build` na raiz do projeto.
4. No aplicativo Figma, ative a opção `Mostrar/Ocultar Console` via a barra de pesquisa ou Ações Rápidas. Utilize `console.log()` para debug do plugin.

### Estrutura do Projeto

.
│[./package.json](#packagejson)
│[./tsconfig.json](#tsconfigjson)
│[./tailwind.config.js](#tailwindconfigjs)
│[./manifest.json](#manifestjson)
│./src/
├── [main.ts](#maints)
├── [ui.tsx](#uitsx)
├── components/
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── flex-container.tsx
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── label.tsx
├── css/
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── input.css
├── pages/
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── deafault.tsx
└── types/
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── size.ts

Todas as alterações no projeto devem ser realizadas na pasta `src`, exceto o `nome` e `id` que são alterados dentro de `package.json` na raiz do projeto.

### package.json

<sub>[voltar para estrutura do projeto](#estrutura-do-projeto)</sub>

Na raiz do projeto, temos o arquivo package.json responsável por gerenciar o plugin e seus arquivos. Na seção `figma-plugin` pode ser configurado:

- [`id`](https://www.figma.com/plugin-docs/manifest/#id): Código de referência do seu plugin dentro do Figma. Código gerado durante a publicação do plugin.

- [`name`](https://www.figma.com/plugin-docs/manifest/#name): Nome que será exibido na janela de plugins.

### tsconfig.json

<sub>[voltar para estrutura do projeto](#estrutura-do-projeto)</sub>

Arquivo de configuração do TypeScript.

### tailwind.config.js

<sub>[voltar para estrutura do projeto](#estrutura-do-projeto)</sub>

Arquivo de configuração do Tailwind CSS.

### manifest.json

<sub>[voltar para estrutura do projeto](#estrutura-do-projeto)</sub>

Arquivo gerado pelo build do plugin. Este é o arquivo que deve ser importado pelo Figma.

### main.ts

<sub>[voltar para estrutura do projeto](#estrutura-do-projeto)</sub>

Arquivo responsável por executar o comando `showUI()` e configurar em pixels a `width` e `height` da janela do plugin.

```typescript
import { showUI } from "@create-figma-plugin/utilities";
export default function () {
  showUI({
    height: 240,
    width: 240,
  });
}
```

### ui.tsx

<sub>[voltar para estrutura do projeto](#estrutura-do-projeto)</sub>

Principal arquivo para renderização das telas do plugin. A função `GetPage` é responsável por realizar a troca de páginas do plugin e a injeção da função de troca de tela.

```typescript
export default render(() => {
  const [pageTitle, setPageTitle] = useState<PagesName>("Home Page");

  function GetPage({ title }: { title: PagesName }): JSX.Element {
    switch (title) {
      case "Home Page":
        return <DefaultPage setPageTitle={setPageTitle} />;

      case "Page 2":
        return <OtherPage setPageTitle={setPageTitle} />;

      default:
        return <DefaultPage setPageTitle={setPageTitle} />;
    }
  }

  return <GetPage title={pageTitle} />;
});
```

### Deploy

Para finalização do plugin, execute o comando `build` para a construção (automática) do arquivo [`manifest.json`](https://figma.com/plugin-docs/manifest/) e o diretório `build/` contendo o JavaScript do plugin.

```
$ yarn build
```

---

##### English Guide

## Figma Plugin Template with Tailwind CSS

### Prerequisites

- [Node.js](https://nodejs.org) – version 20 or higher
- [Figma desktop app](https://figma.com/downloads/)

### Developing the Plugin

To start developing the plugin, install project dependencies and then run the `watch` command:

```bash
$ npm install
$ npm run watch
```

or

```bash
$ yarn
$ yarn watch
```

### Installing the Plugin

1. In the Figma desktop app, open a Figma document.
2. Search for and run `Import plugin from manifest...` via the search bar or the menu.
3. Select the `manifest.json` file generated by the `build` script at the project's root.
4. In the Figma app, activate the `Show/Hide Console` option via the search bar or Quick Actions. Use `console.log()` for plugin debugging.

### Project Structure

.
│[./package.json](#packagejson-1)
│[./tsconfig.json](#tsconfigjson-1)
│[./tailwind.config.js](#tailwindconfigjs-1)
│[./manifest.json](#manifestjson-1)
│./src/
├── [main.ts](#maints-1)
├── [ui.tsx](#uitsx-1)
├── components/
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── flex-container.tsx
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── label.tsx
├── css/
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── input.css
├── pages/
│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── deafault.tsx
└── types/
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── size.ts

All project changes should be made in the `src` folder, except for the `name` and `id` which are changed within `package.json` at the project's root.

### package.json

<sub>[back to project structure](#project-structure)</sub>

At the project's root, we have the package.json file responsible for managing the plugin and its files. In the `figma-plugin` section, you can configure:

- [`id`](https://www.figma.com/plugin-docs/manifest/#id): Reference code for your plugin within Figma. Code generated during the plugin's publication.

- [`name`](https://www.figma.com/plugin-docs/manifest/#name): Name that will be displayed in the plugins window.

### tsconfig.json

<sub>[back to project structure](#project-structure)</sub>

TypeScript configuration file.

### tailwind.config.js

<sub>[back to project structure](#project-structure)</sub>

Tailwind CSS configuration file.

### manifest.json

<sub>[back to project structure](#project-structure)</sub>

File generated by the plugin's build. This is the file to be imported by Figma.

### main.ts

<sub>[back to project structure](#project-structure)</sub>

File responsible for executing the `showUI()` command and configuring the `width` and `height` of the plugin window in pixels.

```typescript
import { showUI } from "@create-figma-plugin/utilities";
export default function () {
  showUI({
    height: 240,
    width: 240,
  });
}
```

### ui.tsx

<sub>[back to project structure](#project-structure)</sub>

Main file for rendering the plugin's screens. The `GetPage` function is responsible for switching plugin pages and injecting the screen-switching function.

```typescript
export default render(() => {
  const [pageTitle, setPageTitle] = useState<PagesName>("Home Page");

  function GetPage({ title }: { title: PagesName }): JSX.Element {
    switch (title) {
      case "Home Page":
        return <DefaultPage setPageTitle={setPageTitle} />;

      case "Page 2":
        return <OtherPage setPageTitle={setPageTitle} />;

      default:
        return <DefaultPage setPageTitle={setPageTitle} />;
    }
  }

  return <GetPage title={pageTitle} />;
});
```

### Deploy

To finalize the plugin, run the `build` command to automatically build the [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and the `build/` directory containing the plugin's JavaScript.

```bash
$ yarn build
```
