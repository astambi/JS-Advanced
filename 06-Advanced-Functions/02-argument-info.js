function argumentInfo(input) {
    let typeCounts = {}; // type, count
    for (let argument of arguments) {
        let type = typeof argument;
        if (!typeCounts[type])
            typeCounts[type] = 0;
        typeCounts[type]++;
        console.log(`${type}: ${argument}`);
    }
    let sortedTypes = [...Object.keys(typeCounts)]
        .sort((a, b) => typeCounts[b] - typeCounts[a]);
    for (let type of sortedTypes)
        console.log(`${type} = ${typeCounts[type]}`);
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });