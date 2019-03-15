const teams= [
    {name:'Nacional', city:'Medellin', leagues:16, libertadores: 2},
    {name:'Medellin', city:'Medellin', leagues:6, libertadores: 0},
    {name:'Once Caldas', city:'Manizales', leagues:2, libertadores: 1},
    {name:'Millonarios', city:'Bogota', leagues:15, libertadores: 0},
    {name:'America', city:'Cali', leagues:14, libertadores: 0}
]
//map
const names = teams.map(team => team.name)
console.log(names)
//Filter
const cityTeams = teams.filter(team => team.city === 'Medellin')
console.log(cityTeams)
const namesChamps = teams.filter(team => team.libertadores > 0).map(name => name.name)
console.log(namesChamps)
//every
console.log(teams.every(team => team.libertadores > 0))
console.log(teams.every(team => team.leagues > 0))
// Reduce
const CountLeagues = teams.filter(team => team.leagues).reduce((count, team) => count + team.leagues,0)
console.log(CountLeagues)