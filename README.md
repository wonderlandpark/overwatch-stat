
# Overwatch-Stat

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/overwatch-stat)
[![NPM version](https://badge.fury.io/js/overwatch-stat.svg)](https://www.npmjs.com/package/overwatch-stat)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)
[![ad](https://img.shields.io/npm/dt/overwatch-stat.svg)](https://www.npmjs.com/package/wonderlangpark)
[![Discord](https://discordapp.com/api/guilds/512553485766492171/embed.png)](https://invite.gg/wonderbot)


## Install

```
npm install --save overwatch-stat
```

Example Usage:
```js
const ostat = require('overwatch-stat')

ostat.getInfo('아무거나#33898').then(items =>  {
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


```

## Developer, Support Server, Useful Link
| Discord : `wonderlandpark#0001`<br><br>![wonderlandpark](https://images-ext-1.discordapp.net/external/4frDYmyzoZMuV--zY7Q0k03_ivPJDLq0PnYBxX9B6WI/https/cdn.discordapp.com/avatars/285185716240252929/a_1f46428b3b326727fbf5fcd5d87c9482.gif?size=256) | Team Wonder_Bot Support<br><br>[![wonderbotsupport](https://discordapp.com/api/guilds/470028725287780352/embed.png?style=banner2)](https://discord.wonderbot.xyz)
|---|---|
<br>

|원더랜드 WonderLand (Discord)<br><br>환상의 나라 원더랜드<br><br>[원더랜드](https://discord.gg/y6Yqeav)  | 원더(개발자) 의 개인 홈페이지<br><br>[바로가기](https://dev.wonderbot.xyz)
|---|---|


