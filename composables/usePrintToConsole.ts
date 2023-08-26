export const usePrintToConsole = () => {
  return useState('PrintToConsole', () => {
    (console.log('~/composables/usePrintToConsole.ts was activated'));
  })
}