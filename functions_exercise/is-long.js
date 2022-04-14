function isLong(mychaîne){

    return mychaîne.length > 5;
    }
    
    console.log(isLong("pie")) ; // false
    console.log(isLong("kite")) ; // false
    console.log(isLong("kitty")) ; // false
    console.log(isLong("telescope")) ; // true
    console.log(isLong("thermomètre")) ; // true
    console.log(isLong("restaurant")) ; // true