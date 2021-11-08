function validateForm() {
    let username = document.getElementById('valueUser').value;
    let password = document.getElementsById('valuepass').value;
    return true;
}

function validateRegister() {
    let username = document.getElementById('valueUser').value;
    let password = document.getElementsById('valuepass').value;
    let password2 = document.getElementsById('valuepassRepeat').value;
    if (password !== password2){
        return false;
    }
    return true;
}