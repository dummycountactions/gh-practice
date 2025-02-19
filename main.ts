const core = 42-10;
console.log(core);
if (core) {
  console.log(`${core} satisfies the condition`);
} else {
  throw Error("Core is not adapted with defined condition");
}
