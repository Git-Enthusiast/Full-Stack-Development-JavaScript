const grade  = 'g';

switch(grade){
    case "a":
    console.log("a -> very good")
    break;

    case "b":
    console.log("b-> good,keep learning")
    break;
    
    case "c":
    console.log("c-> Need improvement")
    break;

    case "d":
    case "e":
    console.log("d->Not good")
    break;
        
    default:
        console.log('invalid input')
        break;
        // break is not necessary;


}
