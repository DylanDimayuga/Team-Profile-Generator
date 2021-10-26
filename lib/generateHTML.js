const user = data => {
    if (data.office) {
        return `Office Number: ${d.office}`
    }
    if (data.school) {
        return `School: ${data.school}`
    }
    if (data.githubUser) {
        return `<p>Github: <a href="https://github.com/${data.githubUser}">${data.githubUser}</a></p>`
    }
};

const generateCards = templateData => {
    return `
        <body>
        <div class="header">
            <h1 class="text">My Team</h1>
        </div>
        <div class="d-flex justify-content-evenly">
                ${templateData.map((data) => {
        return `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Name: ${data.getName()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Role: ${data.getRole()}</li>
                    <li class="list-group-item">ID: ${data.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:https://${data.getEmail()}">${data.getEmail()}</a></li>
                    <li class="list-group-item">${user(data)}</li>
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