export const usePrintString = () => {
  console.log('~/composables/usePrintString.ts was activated');
  return useState('PrintString', () => '~/composables/usePrintString.ts was activated')
}