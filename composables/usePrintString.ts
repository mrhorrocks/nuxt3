export const usePrintString = () => {
  console.log('~/composables/usePrintToConsole.ts was activated');
  return useState('PrintString', () => '~/composables/usePrintString.ts was activated was activated')
}