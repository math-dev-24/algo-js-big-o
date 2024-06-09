const arr = [7, 5, 3, 9, 2, 5];

export function get_max(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

export function get_min(arr){
    let min = 100000000;
    for(let i = arr.length; i >= 0 ; i--){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

export function counting_sort(arr) {
    const max = get_max(arr);
    const min = get_min(arr);
    const k = max - min;
    const count = new Array(k + 1);
    const sorted_array = new Array(arr.length);
    for (let i = 0; i < count.length; i++){
        count[i] = 0;
    }
    // console.log(count);
    for (let i = 0; i < arr.length; i++){
        count[arr[i] - min]++;
    }
    // console.log(count);
    for(let i = 1; i < count.length; i++){
        count[i] += count[i -1];
    }
    // console.log(count);
    for(let i = arr.length - 1 ; i >= 0; i--){
        const value = arr[i];
        const position = count[value - min];
        sorted_array[position - 1] = value;
        count[value - min]--;
    }
    return sorted_array;
}

// const sorted_Array = counting_sort(arr)
// console.log(sorted_Array)