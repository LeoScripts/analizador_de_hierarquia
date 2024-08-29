import { Command } from "commander";
import { checkWordsInHierarchy } from "./checkWordHierarchy";
import { performance } from "perf_hooks";

import jsonHierarchy from "../dicts/hierarchy.json";

const program = new Command();

program
  .command("analyze")
  .description(
    "Analize a hierarquia da frase, obrigatorio --depth = profundidade (ex: analyze –depth 3 “Eu vi Gorilas e Papagaios”) e opcional --verbosity = performace"
  )
  .requiredOption(
    "--depth <n>",
    "por favor insira a profundidade da hierarquia que você esta buscando",
    "1"
  )
  .argument("<phrase>", "frase a ser analizada")
  .option("--verbose", "Mostra a perforce do processo")
  .action(action);

program.parse(process.argv);

function action(phrase: any, options: any) {
  const startTimeLoading = performance.now();
  const words = phrase
    .split(/[\s,;.!?]+/)
    .map((word: string) => word.trim())
    .filter((word: string) => word !== "");

  const endTimeLoading = performance.now();

  const startTimePhraseVerificatio = performance.now();
  const matches = checkWordsInHierarchy(jsonHierarchy, words, options.depth);
  const endTimePhraseVerificatio = performance.now();

  matches.forEach((item: object) => {
    const { category, count }: any = item;
    category === undefined
      ? console.log(0)
      : console.log(`${category} = ${count};`);
  });

  let performace = {
    "Tempo de carregamento dos parâmetros": endTimeLoading - startTimeLoading,
    "Tempo de verificação da frase":
      endTimePhraseVerificatio - startTimePhraseVerificatio,
  };

  if (options.verbose) {
    console.table(performace);
  }
}
