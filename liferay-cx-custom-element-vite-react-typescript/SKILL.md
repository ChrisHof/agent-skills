---
name: liferay-cx-custom-element-vite-react-typescript
description: Liferay Custom Element Client Extension using Vite and React & TypeScript
compatibility: Liferay 7.4+
license: Unlicense
metadata:
  author: Christian Hofstätter
  version: "1.0"
---

## Objectives

Create a Liferay Custom Element Client Extension using _Vite_ as the build tool and _React & TypeScript_ from the template in the `/template` directory.  
To keep the context low, do not inspect the content of the files unless further instructions require it.

## Instructions

1. If not supplied in the prompt, ask the user for the name of the client extension.
2. Create a new folder with the name of the client extension in either the **_client-extensions_** subdirectory of the current workspace or - if not available - in the current directory.
3. Replace **_liferay-cx-custom-element_** in the following files of the template with the given name of the client extension:

- `client-extension.yaml`
- `client-extension.dev.yaml`
- `index.html`
- `src/index.tsx`
- `package.json`

4. Run `yarn` or - if not available - `npm i` to install the dependencies.
