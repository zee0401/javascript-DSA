// Solution 1
function formatPhoneNumber(numbers) {
  // Get the first 3 numbers and join them together
  const areaCode = numbers.slice(0, 3).join("");
  // Get the next 3 numbers and join them together
  const prefix = numbers.slice(3, 6).join("");
  // Get the last 4 numbers and join them together
  const lineNumber = numbers.slice(6).join("");

  // Return the formatted phone number
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
