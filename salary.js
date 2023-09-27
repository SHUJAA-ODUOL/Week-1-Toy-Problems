// Input of basic salary and benefits:
function calculator(){
    const basicSalary = parseFloat(prompt("Type in the basic salary"))
    const benefits = parseFloat(prompt("Type in the Benefits"))

// Define tax rates and deductions:
 const taxRate = 0.4;
    const nhifRate = 0.3;
    const nssfRate = 0.3;

// Calculate gross salary:
    const grossSalary = taxRate + benefits;

// Calulate deductions:
    const tax = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;

// Calculate net salary:
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;


}