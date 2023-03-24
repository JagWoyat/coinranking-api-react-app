export default function dynamicRound(price: number, size: number) {
    let floatingPoint: number = 0;
    let tempPrice: number = price;
    if (price > 1){
        while(Math.floor(tempPrice) != 0){
            floatingPoint = floatingPoint + 1;
            tempPrice = tempPrice / 10;
        }
        size = size - floatingPoint;
        if(size>0){
            return Math.round(price * (10**size))/(10**size);
        }else{
            return Math.round(price); 
        }
    } else {
        while(Math.floor(tempPrice) === 0){
            floatingPoint = floatingPoint + 1;
            tempPrice = tempPrice * 10;
        }
        size = size - floatingPoint;
        if(size>0){
            return Math.round(price * (10**size))/(10**size);
        }else{
            return price;
        }
    }
}