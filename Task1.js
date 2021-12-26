class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    print() {
        console.log(this.real + " , " + this.imaginary + "i");
    }
    add(otherComplexNumber) {
        let newReal = this.real + otherComplexNumber.real;
        let newImag = this.imaginary + otherComplexNumber.imaginary;
        let result = new ComplexNumber(newReal, newImag);
        return result;
    }
    sub(otherComplexNumber) {
        let newReal = this.real - otherComplexNumber.real;
        let newImag = this.imaginary - otherComplexNumber.imaginary;
        let result = new ComplexNumber(newReal, newImag);
        return result;
    }
    multiply(otherComplexNumber) {
        let newReal = this.real * otherComplexNumber.real;
        let newImag = this.imaginary * otherComplexNumber.imaginary;
        let result = new ComplexNumber(newReal, newImag);
        return result;
    }
    divide(otherComplexNumber) {
        let newReal = this.real / otherComplexNumber.real;
        let newImag = this.imaginary / otherComplexNumber.imaginary;
        let result = new ComplexNumber(newReal, newImag);
        return result;
    }
    get formattedNumber() {
        return this.real + " , " + this.imaginary + "i";
    }
    set formattedNumber(num) {
        let components = num.split(",");
        let realComp = Number(components[0].trim());
        let imagComp = components[1].trim();
        imagComp = imagComp.substring(0,imagComp.length-1);
        imagComp = Number(imagComp);

        if (realComp && imagComp) {
            this.real = realComp;
            this.imaginary = imagComp;
        } else {
            console.log("The given number is not formatted properly");
        }
    }

    static equals(comp1, comp2) {
        return ((comp1.real == comp2.real) && (comp1.imaginary == comp2.imaginary));
    }
}

let c1 = new ComplexNumber();
c1.formattedNumber = "1 , 60i";
console.log(c1.formattedNumber);

let c2 = new ComplexNumber();
c2.formattedNumber = "1 , 43i";
console.log(c2.formattedNumber);

console.log(ComplexNumber.equals(c1, c2));
