export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;
  let numbersString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
    numbersString = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = numbersString.split(delimiter);
  let sum = 0;

  for (const numberStr of numberArray) {
    const number = Number(numberStr);
    if (Number.isNaN(number)) {
      throw new Error(`Invalid input: non-numeric value '${numberStr}' found.`);
    }
    sum += number;
  }

  return sum;
}
