let doggos = document.getElementsByClassName("doggos");
let quote = document.getElementById("quote");
let name = document.getElementById("name");
let doggosName = [
    'doggo1',
    'doggo2',
    'doggo3',
    'doggo4',
    'doggo5',
    'doggo6',
    'doggo7',
    'doggo8',
    'doggo9',
    'doggo10',
    'doggo11',
    'doggo12',
    'doggo13',
    'doggo14',
    'doggo15',
    'doggo16',
    'doggo17',
    'doggo18',
    'doggo19',
    'doggo20',
]
let doggosQuote = [
    'wow, iama doggo 1',
    'wow, iama doggo 2',
    'wow, iama doggo 3',
    'wow, iama doggo 4',
    'wow, iama doggo 5',
    'wow, iama doggo 6',
    'wow, iama doggo 7',
    'wow, iama doggo 8',
    'wow, iama doggo 9',
    'wow, iama doggo 10',    
    'wow, iama doggo 11',
    'wow, iama doggo 12',
    'wow, iama doggo 13',
    'wow, iama doggo 14',
    'wow, iama doggo 15',
    'wow, iama doggo 16',
    'wow, iama doggo 17',
    'wow, iama doggo 18',
    'wow, iama doggo 19',
    'wow, iama doggo 20',
]
let defaultQuote = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolorum unde, minus non fugiat explicabo consequuntur nam repellat aperiam alias in eum ea quis voluptate ex eveniet! Fugiat, illum voluptates!";
let defaultName = "Depoiments";

for (let i = 0; i < doggos.length; i++){
    doggos[i].onmouseenter = function(){
        name.innerHTML = doggosName[i];
        quote.innerHTML = doggosQuote[i];
    }

    doggos[i].onmouseleave = function(){
        name.innerHTML = defaultName;
        quote.innerHTML = defaultQuote;
    }
}
