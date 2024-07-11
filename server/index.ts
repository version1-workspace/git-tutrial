function add(a: number, b: number): number {
  return a + b;
}

async function main() {
  let a = 10;
  let b = 20;

  const ans = add(a, b);
  console.log("ANSWER:", ans);
}

main();
