
const logout= async ()=>{
    const response = await fetch('/api/users/logout',{
        method: Post,
        headers: { 'content-type':'application/json'}
    });
    if (response.ok){
        document.location.replace('/');
    } else{
        alert(response.statusText);
    }
};
document.querySelector('#logout').addEventListener('click',logout);