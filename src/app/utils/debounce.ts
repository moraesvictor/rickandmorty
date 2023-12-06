export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return function (...args: Parameters<T>): void {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
