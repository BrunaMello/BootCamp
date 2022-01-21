function beer(){

    var bottle = 99;

    while (bottle >= 0 && bottle < 100) {
        if (bottle === 0){
            console.log("No more bottles of beer on the wall, no more bottles of beer. " +
                "Go to the store and buy some more, 99 bootles on the wall.")
        } else {
            console.log(+ bottle + " bottles of beer on the wall, " + bottle + ". Take one down ans pass" +
                " it around, " + bottle + " bottles of beer on the wall, ");
        }
        bottle --;
    }

}
