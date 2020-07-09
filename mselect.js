let id = Id => document.getElementById(Id)
let query = Query => document.querySelectorAll(Query)
let open = 0;

//Inyeccion del css
let ruta = query('script')[query('script').length -1].src
query('head')[0].innerHTML = `
<link rel="stylesheet" type="text/css" href="${ruta.split('.')[0]}.css"/> ${query('head')[0].innerHTML}
`;

//Cerrar los mselect abiertos
const cerrar = ()=>{
  for(let i = 0; i < query('.moptions').length; i++){

    if(Array.from(query('.moptions')[i].classList).includes('mselectOpen')){

      query('.moptions')[i].classList.toggle('mselectOpen')
    }
  }
}
const check = ()=>{
  for(let i = 0; i < query('input.v').length; i++){

    if(query('input.v')[i].checked){
      let span = document.createElement('SPAN')
      span.setAttribute('class', 'material-icons')
      span.innerHTML = 'check_circle_outline'
      query('input.v')[i].parentElement.replaceChild(span, query('input.v')[i].parentElement.children[2])
    }else{

      let span = document.createElement('SPAN')
      span.setAttribute('class', 'material-icons')
      span.innerHTML = 'radio_button_unchecked'
      query('input.v')[i].parentElement.replaceChild(span, query('input.v')[i].parentElement.children[2])
    }
  }
}
//Mostrar seleccionados
const viewSelect = ()=>{
  for(let i = 0; i < query('mselect').length; i++){
    let selections = [];
    let options = query('mselect')[i].children[0].children
    for(let a = 1; a < options.length; a++){
      if(options[a].children[0].children[0].checked){

        selections.push(options[a].children[0].children[1].innerHTML)
      }
      if(a == options.length -1){
        if(selections.length > 0){
          if(selections.length == 1){
            options[0].setAttribute('class', 'mlabel colorselec')
            options[0].innerHTML = selections[0]
          }else{
            options[0].setAttribute('class', 'mlabel colorselec')
            if(query('html')[0].getAttribute('lang') == 'es'){

              options[0].innerHTML = '<cite>' + selections.length + ' seleccionados </cite>'
            }else{

              options[0].innerHTML = '<cite>' + selections.length + ' selected </cite>'
            }
          }
        }else{
          options[0].setAttribute('class', 'mlabel')
          options[0].innerHTML = options[0].getAttribute('default')
        }
      }
    }
  }
}

//Convertir sintaxis para incluir el html
(()=>{
  //Optengo todos los mselect y los guardo en una variable
  let mselect = query('mselect')
  //Itero todos los mselect para modificarsu sintaxis
  for(let i = 0; i < mselect.length; i++){

    let html = mselect[i].innerHTML
    mselect[i].innerHTML = `<div class="moptions">${html}</div>`

    //Valido si sera select o multi select
    if(mselect[i].getAttribute('type') === 'radio'){
       var type = mselect[i].getAttribute('type')
     }else{
       var type = 'checkbox'
     }
     //Obtengo los hijos del primer hijo y los itero
    let childrens = mselect[i].children[0].children
    for(let e = 0; e < childrens.length; e++){
      //Valido que las etiquetas sean moption
      if(childrens[e].localName == 'moption'){

        //Si el moption es de tipo label este sera la cabecera
        //Y su contenido se almacena en un atributo para su posterior uso
        if(childrens[e].getAttribute('label') ==  'true'){
            childrens[e].setAttribute('class', 'mlabel')
            childrens[e].setAttribute('default', childrens[e].innerHTML)
          }else{
            let checked = '';
            if(childrens[e].getAttribute('checked')){
              checked = 'checked'
            }
            //Inyeccion del html
            childrens[e].innerHTML = `
            <label>
              <input ${checked} class="v" type="${type}" name="${mselect[i].getAttribute('name')}" value="${childrens[e].getAttribute('value')}"/>
              <span>${childrens[e].textContent}</span>
              <span class="material-icons">radio_button_unchecked</span>
            </label>
          `
        }
      }
    }
  }
})()

//manejo abrir y cerrar formulario
document.onclick = e =>{
  //Abrir y cerrar con el label select
  if(Array.from(e.target.classList).includes('mlabel')){
    if(open == 0){
      cerrar()
      e.target.parentElement.classList.toggle('mselectOpen')
      open = 1
    }else{
      cerrar()
      open = 0
    }
  }else if(Array.from(e.target.classList).includes('v')) {
    //LLamada del viewSelect para mostrar cantidad o seleccionado
    viewSelect()
    // llamar a check para marcar selects si estan o no seleccionados
    check()
  }
  //Verificar si hicieron click fuera para cerrar
  if(Array.from(e.path).find(a => a.localName == 'mselect')){}else{
    cerrar()
    open = 0
  }
}
viewSelect()
check()
