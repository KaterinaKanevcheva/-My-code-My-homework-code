function repainting(input){
   let nylon = Number(input[0]);
   let paint = Number(input[1]);
   let diluent = Number(input[2]);
   let hours = Number(input[3]);
   
   let nylonPrice = (nylon + 2) * 1.50;
   let paintPrice = (paint + (paint * 0.1)) * 14.50;
   let diluentPrice = diluent * 5.00;
   let bagPrice = 0.4;

   let sumPerMaterial = nylonPrice + paintPrice + diluentPrice + bagPrice;
   let sumPerWorker = (sumPerMaterial * 0.3) * hours;
   let sumForAll = sumPerMaterial + sumPerWorker;

   console.log(sumForAll);
    
}
repainting(["10", "11", "4", "8"])
repainting(["5", "10", "10", "1"])