import { exec } from "child_process";

describe("CLI Command Test", () => {
  it("should return 0 for the analyze command with specific depth", (done) => {
    const command = `npx tsx src/index.ts analyze --depth 5 "os especimes sao Cachorro e Águia, Coruja, Corvo, Salmão-do-atlântico"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        done(error);
      } else {
        console.log(`Output: ${stdout}`);
        expect(error).toBeNull(); // O comando deve retornar null para erro, o que significa retorno 0
        done();
      }
    });
  });
});

describe("Sample Test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

describe("CLI Command Test", () => {
  it("should return 0 for the analyze command with a 5000 character input", (done) => {
    const longString =
      " os especimes sao Cachorro e Águia, Coruja, Corvo, Salmão-do-atlântico".repeat(
        5000
      );

    const command = `npx tsx src/index.ts analyze --depth 3 "${longString}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        done(error);
      } else {
        console.log(`Output: ${stdout}`);
        expect(error).toBeNull(); // O comando deve retornar null para erro, o que significa retorno 0
        done();
      }
    });
  });
});
