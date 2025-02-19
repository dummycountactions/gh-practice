const core:number = 42-10+"string";
console.log(core);
if (core) {
  console.log(`${core} satisfies the condition`);
} else {
  throw Error("Core is not adapted with defined condition");
}
