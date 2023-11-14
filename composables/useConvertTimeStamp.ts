export const useConvertTimeStamp = () => {
    const timestamp = 1677679162168; // Replace this with your timestamp
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDate);

    console.log('~/composables/useConvertTimeStamp.ts was activated');
}