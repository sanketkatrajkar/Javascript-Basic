
const student = {

    name: "Sanket",
    age : 23,
    eng : 45,
    math: 88,
    phy : 77,

    getAvg()
    {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
        console.log(`${this.name} avg mark is ${this.avg}`);
    }
}


console.log(student.getAvg());