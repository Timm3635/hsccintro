module.exports={

// Create decimal to binary conversion function
convertDecTobin:function(decimal){
    if (process.env.CONSOLE_DECIMAL=="true"){
        console.log(decimal)
    } //End if console.debug

var runningdec=decimal;
var binstring='';

while (runningdec > 0){
var newBit=runningdec % 2
binstring=newBit.toString()+binString
runningdec = Math.floor(runningdec/2)
} //End while loop
return binString;    
   }   // End ConvertDecToBin function





} //End module.export