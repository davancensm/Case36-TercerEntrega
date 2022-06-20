let loginForm = document.getElementById('loginForm')

const handleSubmit = (e,form,route)=>{
    e.preventDefault()
    let formData = new FormData(form)
    fetch(route,{
        method:'POST',
        redirect: 'follow',
        body: formData
    }).then(r=>{
        if (r.redirected) {
            window.location.href = r.url;
        }
    })
    form.reset()
}

loginForm.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/login'))