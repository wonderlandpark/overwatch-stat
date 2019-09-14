/**
 * @author wonderlandpark
 * @version 0.0.6
 * @license MIT
 * @copyright Copyright (c) 2019 wonderlandpark
 * @github https://github.com/wonderlandpark/wonder-lang
 * @see https://github.com/wonderlandpark/wonder-lang/master/README.md
 */

const request = require('request')

/**
 * get Player Battletag/level/platform/protfile public setting
 * @param {String} playername Playername
 * 
 * @returns {Array} return Array of Players
 */


    exports.getInfo = async (playername) => {
        let res = null;
        return new Promise(async (resolve, reject) => {
            request( {url : encodeURI('https://playoverwatch.com/ko-kr/search/account-by-name/'+playername).replace(/\#/, '%23'),
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
              }}, (err,res,body) => {
                if(err) reject(err)
                resolve(JSON.parse(body))

            })
        })
    }

/**
 * get Player Profile by BattleTag
 * @param {String} battletag OW urlName 
 * @param {String} platform Platform Onlt pc supported
 * @param {String} region Region asia/us/eu
 * 
 * @returns {Object} return Object of Profile
 */
    exports.getProfile= async (battletag, platform, region) => {
        if(!battletag||!platform||!region) throw new Error('Required Field is empty.')
        if(!['us','asia','eu'].indexOf(platform)) throw new Error('Unsupported Region')
        if(platform !== 'pc') throw new Error('UnSupported Platfrom')
        let res = null;
        return new Promise(async (resolve, reject) => {
            request( {url : encodeURI(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`),
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
              }}, (err,res,body) => {
                if(err) reject(err)
                resolve(JSON.parse(body))

            })
        })
    }

/**
 * get Player play time
 * @param {String} battletag OW urlName 
 * @param {String} platform Platform Onlt pc supported
 * @param {String} region Region asia/us/eu
 * 
 * @returns {Object} return HH:MM:SS 
 */
exports.getPlaytime = async (battletag, platform, region) => {
    if(!battletag||!platform||!region) throw new Error('Required Field is empty.')
    if(!['us','asia','eu'].indexOf(platform)) throw new Error('Unsupported Region')
    if(platform !== 'pc') throw new Error('UnSupported Platfrom')
    let res = null;
    return new Promise(async (resolve, reject) => {
        request( {url : encodeURI(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/complete`),
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
          }}, (err,res,body) => {
            if(err) reject(err)
            const json = JSON.parse(body)
            resolve({competitive : json.competitiveStats.careerStats.allHeroes.game.timePlayed+':00',quickPlay : json.quickPlayStats.careerStats.allHeroes.game.timePlayed})

        })
    })
}