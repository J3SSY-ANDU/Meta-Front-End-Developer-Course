// create your classes here
class Books {
    paper() {
        console.log("I folded the page!\n");
    }
    digital() {
        console.log("I marked the page!\n");
    }
}

class Educational extends Books {
    savePage() {
        super.paper();
    }
}

class ScienceFiction extends Books {
    savePage() {
        super.digital();
    }
}

var ReadyPlayerOne = new ScienceFiction();
var StockMarket101 = new Educational();
StockMarket101.savePage();
ReadyPlayerOne.savePage();