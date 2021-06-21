// snack1

const gatti = [
    {nome:'alemanno', colore: 'nero', età: 2, sesso:'maschio'},
    {nome:'lala', colore: 'bianco', età: 7, sesso:'femmina'},
    {nome:'oslo', colore: 'nero', età: 4, sesso:'maschio'},
    {nome:'eva', colore: 'marrone', età: 5, sesso:'femmina'}
];
gatti.forEach((element) => {
document.getElementById('container').innerHTML += (`${element.nome} :<i class="fas fa-cat" style ="color:${element.colore}"></i> ${element.età} ${element.sesso}`);
});

// snack2

const gattimaschi =[];
const gattifemmina =[];

const pink = '#EEA7B3'
const blue = '#211CBB'

const newcats = gatti.map((element) =>{
  const nome =  element.nome;
  const età = element.età;
  const colore = element.colore;
  const sesso = element.sesso;

  let ribboncolor = blue;
  if(sesso == 'femmina'){
      ribboncolor = pink
  }
  
  const opacity = element.età / 7;

  return {
      nome,
      età,
      colore,
      sesso,
      ribbon : {
          color: ribboncolor, 
          opacity : opacity      
      }
  }
});


const printCatsRibbon = (array) => {
    array.forEach((element) => {
        document.getElementById("container").innerHTML += `<br/><br/>
            ${element.nome} : <i class="fas fa-cat" style="color:${element.colore}"></i> 
            <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
        
        `;
    });
} 



// snack3
let catsmalefemale = [...gattifemmina,...gattimaschi];

const catsmalefemaledeh = catsmalefemale.map((element)=>{
    const{nome,colore,ribbon} = element;

    return {
        nome,
        colore,
        ribbon
    }
});
console.log(catsmalefemaledeh);