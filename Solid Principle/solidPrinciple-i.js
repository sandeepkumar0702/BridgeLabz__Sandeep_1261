class machine{
    print(){};
    scan(){};
    fax(){};
}

class Printer extends machine{
    print(){
        console.log("printing")
    }
}

class Scanner  extends machine{
    scan(){
        console.log("scanning")
    }
}

class Fax extends machine{
    fax(){
        console.log(" faxing")
    }
}

let printer=new Printer();
printer.print();

let scanner=new Scanner();
scanner.scan();



let fax=new Fax();
fax.fax();