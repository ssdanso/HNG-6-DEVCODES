function getUser() {
    const user = getObject('currentUserName');
    console.log('the user is ', user)
    if (!user) {
        goToLoginPage();
    } else {
        displayUserInformation(user.username);
    }
}

function displayUserInformation(userName) {
    let userInfoDiv = document.getElementById('userInfo')// .value;
    userInfoDiv.innerText = userName

}

function goToLoginPage() {
    window.location.href = window.location.href.replace('welcome', 'index');
}

window.onload = function () { getUser() }