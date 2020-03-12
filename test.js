const ostat = require('./')

ostat.getInfo('아무거나#33898').then(items =>  {
    items.forEach(i=>{
        
        console.log('BattleTag : ' + 
        i.name + 
        '\nLevel : ' + i.level
        +'\nplatform : ' + i.platform
        +'\nispublic : ' + i.isPublic

        )
    })
ostat.getPlaytime('Eazyhoon-11402' ,'asia', 'pc')
.then(a=>console.log(a))
})

