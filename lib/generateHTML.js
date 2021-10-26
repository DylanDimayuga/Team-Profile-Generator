const user = employeeData => {
    if (employeeData.officeNumber) {
        return `Office Number: ${employeeData.officeNumber}`
    }
    if (employeeData.school) {
        return `School: ${employeeData.school}`
    }
    if (employeeData.github) {
        return `<p>Github: <a href="https://github.com/${employeeData.github}">${employeeData.github}</a></p>`
    }
};

const generateCards = templateData => {
    return `
        <body>
        <div class="header">
            <h1 class="text">My Team</h1>
        </div>
        <div class="d-flex justify-content-evenly">
                ${templateData.map((employeeData) => {
        return `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Name: ${employeeData.getName()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Role: ${employeeData.getRole()}</li>
                    <li class="list-group-item">ID: ${employeeData.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:https://${employeeData.getEmail()}">${employeeData.getEmail()}</a></li>
                    <li class="list-group-item">${user(employeeData)}</li>
                </ul>
            </div>
        </div>
    `
    }).join('')}
                </div>
            </body>`
}


module.exports = templateData => {

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="style.css" rel="stylesheet">
        </head>   
            ${generateCards(templateData)}                   
        </html>
        `
}