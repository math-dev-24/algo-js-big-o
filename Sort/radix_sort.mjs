import { get_max } from "./counting_sort.mjs";

const arr = [7, 5522, 15, 9, 500, 5];

function radix_sort(arr){
    const max = get_max(arr);
    for(let i = 1; max / i >= 1; i *= 10){
        arr = counter_sort(arr, i);
    }
    return arr;
}

function counter_sort(arr, position){
    const base = 10;
    const count = new Array(base);
    const sortedArray = new Array(arr.length);
    for (let i = 0 ; i < base; i++){
        count[i] = 0;
    }
    for(let i = 0; i < arr.length; i++){
        count[Math.floor(arr[i] / position) % base]++;
    }
    for(let i = 1; i < count.length; i++){
        count[i] += count[i - 1];
    }
    for(let i = arr.length -1 ; i >= 0; i--){
        const value = arr[i];
        const positionInCount = count[Math.floor(value / position) % base];
        sortedArray[positionInCount - 1] = value;
        count[Math.floor(arr[i] / position) % base]--;

    }
    return sortedArray;
}

const sorted_array = radix_sort(arr);
console.log(sorted_array)