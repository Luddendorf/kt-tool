export const regs = {
  regName: /^[a-zа-яА-ЯA-Z0-9 ]*$/,
  regDigits: /(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$| )/gi
};