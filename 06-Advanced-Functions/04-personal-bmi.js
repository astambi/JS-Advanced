function personalBMI(name, age, weight, height) {
    [age, weight, height] = [age, weight, height].map(Number);
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / (height * height / 10000))
    };
    patient.status = calcStatus();
    if (patient.status == 'obese')
        patient.recommendation = 'admission required';
    return patient;

    function calcStatus() {
        if (patient.BMI >= 30)      return 'obese';
        if (patient.BMI >= 25)      return 'overweight';
        if (patient.BMI >= 18.5)    return 'normal';
        return 'underweight';
    }
}

console.log(personalBMI("Peter", 29, 75, 182));
console.log(personalBMI("Honey Boo Boo", 9, 57, 137));