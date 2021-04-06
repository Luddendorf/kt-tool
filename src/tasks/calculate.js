export default function calc(arr, str) {
  switch (str) {
    case "sum":
      return () => arr.reduce((a, b) => a + b);
    case "subtraction":
      return () => arr.reduce((a, b) => a - b);
    case "multiplication":
      return () => arr.reduce((a, b) => a * b);
    case "division":
      return () => arr.reduce((a, b) => a / b);
  }
}
