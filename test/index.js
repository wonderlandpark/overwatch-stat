const ostat = require('../')

ostat.getInfo('호날두랑일본여행').then(items =>  {
    items.forEach(i=>{
        
        console.log('BattleTag : ' + 
        i.name + 
        '\nLevel : ' + i.level
        +'\nplatform : ' + i.platform
        +'\nispublic : ' + i.isPublic

        )
    })
ostat.getPlaytime('Eazyhoon-11402' , 'pc', 'asia')
.then(a=>console.log(a))
})

