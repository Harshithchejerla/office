console.log("start operation");
function sleep(milliseconds){
   
    console.log("operation is running");
           setTimeout(() => {
            console.log("opertion is done!");
           },milliseconds);

}
sleep(1000);
console.log("do something else..");