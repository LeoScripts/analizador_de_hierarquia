# analizador_de_hierarquia

- a estrutura das hierarquias exemplo esta na pasta dicts voce pode mudar a vontade(so coloca algo que faça sentido)

# Dependecias

instale todas as dependencias necessarias para o funcionamento da aplicação

```bash
npm i --save-dev @types/jest @types/node jest ts-jest tsx typescript && npm i commander
```

> comando de execução

```bash
# o --depht (obrigatorio) determina qual é a profundidade que você busca
# o --verbose (opcional) mostra os detalhes a mais , que neste caso e a performace do codigo
npx tsx src/index.ts analyze --depth 3  " os
especimes sao Cachorro e Águia, Coruja, Corvo, Salmão-do-atlântico"
```
