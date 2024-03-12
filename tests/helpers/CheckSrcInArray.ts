//this function is for checking if an image src is contained in an array
export function CheckSrcInArray(imgSrc: string, arrayOfSrc: string[])
 {
    // remember that array.forEach will continue iterating, even if you return
    for(let x = 0, len = arrayOfSrc.length; x < len; x++) {
        // if the image src includes the current array element
        if(imgSrc.includes(arrayOfSrc[x])) {
            return true;
        }
    }

    return false;
 }