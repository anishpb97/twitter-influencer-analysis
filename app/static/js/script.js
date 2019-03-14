$("#search").on("click" , (e) => {
    e.preventDefault();
    let location = $('#location').val().trim();
    let topic = $('#topic').val().trim();
    if(location && topic)
        console.log(location , topic)
    else
        console.log("Error adikum")    
})
$("#get-file").on("click" , (e) => getFile());

loader = (container) => {
    container.append($(
        `<div class="w-100 text-center">
            <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>  
        </div>`
    ))
}

handleFile = (users) => {

    let resultContainer = $("#result-container");
    if(users.length <= 0)
        loader(resultContainer)
    else {
        resultContainer.empty()
        for(user of users) {
            resultContainer.append($(`
                <table class="table bg-white mt-4 rounded">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>${user.name}</td>
                        </tr>
                        <tr>
                            <th>Screen name</th>
                            <td>${user.screen_name}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>${user.location}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>${user.description}</td>
                        </tr>
                        <tr>
                            <th>Followers count</th>
                            <td>${user.followers_count}</td>
                        </tr>
                        <tr>
                            <th>Average retweet count</th>
                            <td>${user.average_retweet_count}</td>
                        </tr>
                        <tr>
                            <th>Topic</th>
                            <td>${user.topic}</td>
                        </tr>
                        <tr>
                            <th>Verified</th>
                            <td>${user.verified}</td>
                        </tr>
                        <tr>
                            <th>Statuses count</th>
                            <td>${user.statuses_count}</td>
                        </tr>
                    </tbody>
                </table>
            `
            ))
        }
    }
}

getFile = () => {
    handleFile([])
    $.ajax({
        url: "/getFile",
        method: "GET"
    })
    .then(res => handleFile(res.users))
    .catch(err => console.log("Err: ", err))
}