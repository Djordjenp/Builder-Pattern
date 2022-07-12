// We can also use reduce to implement step-by-step
// assignment of properties



const isNameLong = name => name.length > 8;

const readCSV = (csv) => {
    //Read CSV
}

const extractInfo = (csv) => {
    const data = readCSV(csv)

   return data.reduce((acc, name) => { // Building of object step-by-step
        acc[name] = isNameLong(name)
        return acc
    }, {})
}