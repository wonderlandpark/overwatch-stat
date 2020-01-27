
# Overwatch-Stat

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/overwatch-stat)
[![NPM version](https://badge.fury.io/js/overwatch-stat.svg)](https://www.npmjs.com/package/overwatch-stat)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)
[![ad](https://img.shields.io/npm/dt/overwatch-stat.svg )](https://www.npmjs.com/package/wonderlangpark)
[![Discord](https://discordapp.com/api/guilds/512553485766492171/embed.png)](https://invite.gg/wonderbot)

## Introducing

This package is base on OVERWATCH's Official API at [here](https://playoverwatch.com/en-us/search)

## Install

```bash
npm install --save overwatch-stat
```

Example Usage:
```js
const ostat = require('overwatch-stat')

ostat.getInfo('Overwatch').then(items =>  {
    items.forEach(i=>{
        console.log('BattleTag : ' +
        i.name +
        '\nLevel : ' + i.level
        +'\nplatform : ' + i.platform
        +'\nispublic : ' + i.isPublic

        )
    })
ostat.getPlaytime('Eazyhoon-11402' ,'asia', 'pc)
.then(a=>console.log(a))
})  
```

## Methods

### .getInfo(playername)

> Search Players' Battletag/level/platform/protfile public setting

 | PARAMETER | TYPE | DESCRIPTION | EXAMPLE
 |---|---|---|---|
 |playername|String|Player's Nickname or BattleTag|`Username`, `Username#123456` |
> **Returns**: Array (of Players)

#### Example

```js
const ostat = require('overwatch-stat')
ostat.getInfo('Overwatch').then(items => console.log(items))

/* [
  {
    name: 'OVERWATCH#21123',
    urlName: 'OVERWATCH-21123',
    id: 410583793,
    level: 588,
    playerLevel: 588,
    isPublic: true,
    platform: 'pc',
    portrait: '0x025000000000435D'
  },
  {
    name: 'Overwatch#22876',
    urlName: 'Overwatch-22876',
    id: 122832419,
    level: 1606,
    playerLevel: 1606,
    isPublic: true,
    platform: 'pc',
    portrait: '0x0250000000004358'
  },
  {
    name: 'Overwatch#22745',
    urlName: 'Overwatch-22745',
    id: 451814153,
    level: 1058,
    playerLevel: 1058,
    isPublic: false,
    platform: 'pc',
    portrait: '0x0250000000003F92'
  },
  ...
  ]
*/
```

### .getProfile(battletag, region, platfrom)

> Get Player's Profile

| PARAMETER | TYPE | DESCRIPTION | EXAMPLE
|---|---|---|---|
|battletag|String|Player's Battle Tag|`Username#123456`,`Username-123456` |
| region | String | Player's Region (asia/us/eu) | `asia` |
| platform | String | Player's platform (pc etc.) | `pc` |
> **Returns**: Object
#### Example

```js
const ostat = require('overwatch-stat')
ostat.getProfile('OVERWATCH#21123','us', 'pc').then(r=>console.log(r))

/*{
  competitiveStats: {
    awards: {
      cards: 16,
      medals: 85,
      medalsBronze: 32,
      medalsSilver: 26,
      medalsGold: 27
    },
    games: { played: 43, won: 20 }
  },
  endorsement: 3,
  endorsementIcon: 'https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_3',
  gamesWon: 1663,
  icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c2ccc82113367c24618e8cd73bff7a352301df711937eb3c36a7362a6d60c96f.png',
  level: 88,
  levelIcon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8b4be1017beff0bcd1f7a48d8cdf7faf9f22c1ffd2bdeaaff2684da5cddeaa76.png',
  name: 'OVERWATCH#21123',
  prestige: 5,
  prestigeIcon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d35d380b7594b8f6af2d01040d80a5bfb6621553406c0905d4764bdc92a4ede8.png',
  private: false,
  quickPlayStats: {
    awards: {
      cards: 386,
      medals: 2728,
      medalsBronze: 841,
      medalsSilver: 934,
      medalsGold: 953
    },
    games: { played: 0, won: 616 }
  },
  rating: 2017,
  ratingIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png',
  ratings: [
    {
      level: 2098,
      role: 'tank',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-tank-8a52daaf01.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    },
    {
      level: 1874,
      role: 'damage',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-offense-6267addd52.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png'
    },
    {
      level: 2080,
      role: 'support',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-support-46311a4210.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    },
    {
      level: 2098,
      role: 'tank',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-tank-8a52daaf01.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    },
    {
      level: 1874,
      role: 'damage',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-offense-6267addd52.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png'
    },
    {
      level: 2080,
      role: 'support',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-support-46311a4210.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    }
  ]
}
*/
```


### .getPlaytime(battletag, region, platfrom)

> Get Player's PlayTime
> 
| PARAMETER | TYPE | DESCRIPTION | EXAMPLE
|---|---|---|---|
|battletag|String|Player's Battle Tag|`Username#123456`,`Username-123456` |
| region | String | Player's Region (asia/us/eu) | `asia` |
| platform | String | Player's platform (pc etc.) | `pc` |
> **Returns**: Object

#### Example

```js
const ostat = require('overwatch-stat')
ostat.getPlaytime('OVERWATCH#21123').then(items => console.log(items))

/*
{ competitive: '08:39:13:00', quickPlay: '155:27:56' }
*/

```

### .getStat(battletag, region, platfrom)

> Get Player's PlayTime
> 
| PARAMETER | TYPE | DESCRIPTION | EXAMPLE
|---|---|---|---|
|battletag|String|Player's Battle Tag|`Username#123456`,`Username-123456` |
| region | String | Player's Region (asia/us/eu) | `asia` |
| platform | String | Player's platform (pc etc.) | `pc` |
> **Returns**: Object

#### Example

```js
const ostat = require('overwatch-stat')
ostat.getStat('OVERWATCH#21123').then(items => console.log(items))

/*
{
  competitiveStats: {
    awards: {
      cards: 16,
      medals: 85,
      medalsBronze: 32,
      medalsSilver: 26,
      medalsGold: 27
    },
    careerStats: {
      allHeroes: [Object],
      baptiste: [Object],
      junkrat: [Object],
      lucio: [Object],
      mei: [Object],
      mercy: [Object],
      orisa: [Object],
      reinhardt: [Object],
      roadhog: [Object],
      winston: [Object],
      wreckingBall: [Object]
    },
    games: { played: 43, won: 20 },
    topHeroes: {
      baptiste: [Object],
      junkrat: [Object],
      lucio: [Object],
      mei: [Object],
      mercy: [Object],
      orisa: [Object],
      reinhardt: [Object],
      roadhog: [Object],
      winston: [Object],
      wreckingBall: [Object]
    }
  },
  endorsement: 3,
  endorsementIcon: 'https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_3',
  gamesWon: 1663,
  icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c2ccc82113367c24618e8cd73bff7a352301df711937eb3c36a7362a6d60c96f.png',
  level: 88,
  levelIcon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/8b4be1017beff0bcd1f7a48d8cdf7faf9f22c1ffd2bdeaaff2684da5cddeaa76.png',
  name: 'OVERWATCH#21123',
  prestige: 5,
  prestigeIcon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d35d380b7594b8f6af2d01040d80a5bfb6621553406c0905d4764bdc92a4ede8.png',
  private: false,
  quickPlayStats: {
    awards: {
      cards: 386,
      medals: 2728,
      medalsBronze: 841,
      medalsSilver: 934,
      medalsGold: 953
    },
    careerStats: {
      allHeroes: [Object],
      ana: [Object],
      ashe: [Object],
      bastion: [Object],
      brigitte: [Object],
      dVa: [Object],
      doomfist: [Object],
      genji: [Object],
      hanzo: [Object],
      junkrat: [Object],
      lucio: [Object],
      mccree: [Object],
      mei: [Object],
      mercy: [Object],
      moira: [Object],
      orisa: [Object],
      pharah: [Object],
      reaper: [Object],
      reinhardt: [Object],
      roadhog: [Object],
      soldier76: [Object],
      sombra: [Object],
      symmetra: [Object],
      torbjorn: [Object],
      tracer: [Object],
      widowmaker: [Object],
      winston: [Object],
      wreckingBall: [Object],
      zarya: [Object],
      zenyatta: [Object]
    },
    games: { played: 0, won: 616 },
    topHeroes: {
      ana: [Object],
      ashe: [Object],
      bastion: [Object],
      brigitte: [Object],
      dVa: [Object],
      doomfist: [Object],
      genji: [Object],
      hanzo: [Object],
      junkrat: [Object],
      lucio: [Object],
      mccree: [Object],
      mei: [Object],
      mercy: [Object],
      moira: [Object],
      orisa: [Object],
      pharah: [Object],
      reaper: [Object],
      reinhardt: [Object],
      roadhog: [Object],
      soldier76: [Object],
      sombra: [Object],
      symmetra: [Object],
      torbjorn: [Object],
      tracer: [Object],
      widowmaker: [Object],
      winston: [Object],
      wreckingBall: [Object],
      zarya: [Object],
      zenyatta: [Object]
    }
  },
  rating: 2017,
  ratingIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png',
  ratings: [
    {
      level: 2098,
      role: 'tank',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-tank-8a52daaf01.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    },
    {
      level: 1874,
      role: 'damage',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-offense-6267addd52.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png'
    },
    {
      level: 2080,
      role: 'support',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-support-46311a4210.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    },
    {
      level: 2098,
      role: 'tank',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-tank-8a52daaf01.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    },
    {
      level: 1874,
      role: 'damage',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-offense-6267addd52.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-SilverTier.png'
    },
    {
      level: 2080,
      role: 'support',
      roleIcon: 'https://static.playoverwatch.com/img/pages/career/icon-support-46311a4210.png',
      rankIcon: 'https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/rank-GoldTier.png'
    }
  ]
}
*/

```

[Full Returned Value](https://ow-api.com/v1/stats/pc/us/OVERWATCH-21123/complete)


## Developer, Support Server, Useful Link

| Discord : `wonderlandpark#0001`<br><br>![wonderlandpark](https://cdn.discordapp.com/avatars/285185716240252929/f50a084aaa45c57699c3dba1b7846122.png?size=256) | Team Wonder_Bot Support<br><br>[![wonderbotsupport](https://discordapp.com/api/guilds/470028725287780352/embed.png?style=banner2)](https://discord.wonderbot.xyz)
|---|---|
|원더랜드 WonderLand (Discord)<br><br>환상의 나라 원더랜드<br><br>[원더랜드](https://discord.gg/y6Yqeav)  | 원더(개발자) 의 개인 홈페이지<br><br>[바로가기](https://dev.wonderbot.xyz)|