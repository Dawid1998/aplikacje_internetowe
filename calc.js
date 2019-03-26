const init = () =>{
  const c = document.getElementById('main');
  
 [...c.children].forEach(el => console.log(el));
}
window.addEventListener('DOMContentLoaded', init );