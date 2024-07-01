let basicSalary = parseFloat(prompt('Enter basic salary: '));
let benefits = parseFloat (prompt("Enter your benefits: "));
const grossSalary = Math.floor (basicSalary + benefits);
const taxableIncome = Math.floor (grossSalary - benefits);
const totalDeductions = Math.floor (payeeRate() + nhifRates() + nssfRates());

//calculates PAYE
function payeeRate(){
    if(taxableIncome >=0 && taxableIncome <=24000){
        return taxableIncome * 0.1;
    }else if(taxableIncome >=24001 && taxableIncome <=32333){
        return taxableIncome * 0.25;
    }else if(taxableIncome >=32334 && taxableIncome <=500000){
        return taxableIncome * 0.3;
    }else if(taxableIncome >=500001 && taxableIncome <=800000){
        return taxableIncome * 0.325;
    }else {
        taxableIncome * 0.35;
    }
    
}

//NHIF Deductions
function nhifRates(){
    if(grossSalary >0 && grossSalary<= 5999){
        return  150;
    }else if (grossSalary >= 6000 && grossSalary <= 7999){
        return  300;
    }else if (grossSalary >= 8000 && grossSalary <= 11999){
        return  400;
    }else if (grossSalary >= 12000 && grossSalary <= 14999){
        return 500;
    }else if (grossSalary >= 15000 && grossSalary <= 19999){
        return 600;
    }else if (grossSalary >= 20000 && grossSalary <= 24999){
        return 750;
    }else if (grossSalary >= 25000 && grossSalary <= 29999){
        return 850;
    }else if (grossSalary >= 30000 && grossSalary <= 34999){
        return 900;
    }else if (grossSalary >= 35000 && grossSalary <= 39999){
        return 950;
    }else if (grossSalary >= 40000 && grossSalary <= 44999){
        return 1000;
    }else if (grossSalary >= 45000 && grossSalary <= 49999){
        return  1100;
    }else if (grossSalary >= 50000 && grossSalary <= 59999){
        return 1200;
    }else if (grossSalary >= 60000 && grossSalary <= 69999){
        return 1300;
    }else if (grossSalary >= 70000 && grossSalary <= 79999){
        return 1400;
    }else if (grossSalary >= 80000 && grossSalary <= 89999){
        return  1500;
    }else if (grossSalary >= 90000 && grossSalary <= 99999){
        return 1600;
    }else {
        return 1700;
    }
}

//NSSF Deductions
function nssfRates (){
    if(grossSalary >=7000){
        return grossSalary * 0.06
    }else if (grossSalary >=7001 && grossSalary <=36000){
        return grossSalary * 0.06
    }else {
        return 0
    }
}

//Net salary
function netSalary (){
    return grossSalary - totalDeductions;
}
console.log ("Your net salary` is:", netSalary());

netSalary();
