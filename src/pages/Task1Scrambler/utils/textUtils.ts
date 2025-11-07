export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function scrambleWord(word: string): string {
  if (word.length <= 3) return word;
  const chars = Array.from(word);
  const first = chars[0];
  const last = chars[chars.length - 1];
  const middle = chars.slice(1, -1);
  const shuffled = shuffleArray(middle);
  return [first, ...shuffled, last].join("");
}

export function scrambleLine(line: string): string {
  const regex = /(\p{L}+)/gu;
  let result = "";
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    const [word] = match;
    const start = match.index;
    result += line.slice(lastIndex, start);
    result += scrambleWord(word);
    lastIndex = regex.lastIndex;
  }
  result += line.slice(lastIndex);
  return result;
}

export function scrambleText(text: string): string {
  const lines = text.split(/\r?\n/);
  return lines.map(scrambleLine).join("\n");
}
