/**
 * @author wonderlandpark
 * @version 0.1.3
 * @license MIT
 * @copyright Copyright (c) 2019 wonderlandpark
 * @github https://github.com/wonderlandpark/overwatch-stat
 * @see https://github.com/wonderlandpark/overwatch-stat/master/README.md
 */

const request = require('request')
const headerOption = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
  }
/**
 * Search Players Battletag/level/platform/protfile public setting
 * @param {String} playername Playername
 * 
 * @returns {Array} return Array of Players
 */


    exports.getInfo = async (playername) => {
        let res = null;
        return new Promise(async (resolve, reject) => {
            request( {url : encodeURI('https://playoverwatch.com/ko-kr/search/account-by-name/'+playername).replace(/\#/, '%23'),
            headers: headerOption}, (err,res,body) => {
                console.log(body)
                if(err) reject(err)
                console.log(body)
                resolve(JSON.parse(body))

            })
        })
    }

/**
 * get Player Profile by BattleTag
 * @param {String} battletag OW urlName 
 * @param {String} platform Platform Only pc supported
 * @param {String} region Region asia/us/eu
 * 
 * @returns {Object} return Object of Profile
 */
    exports.getProfile = async (battletag, region, platform) => {
        if(!battletag||!platform||!region) throw new Error('Required Field is empty.')
        if(!['us','asia','eu'].includes(region)) throw new Error('Unsupported Region')
        if(platform !== 'pc') throw new Error('UnSupported Platfrom')
        let res = null;
        return new Promise(async (resolve, reject) => {
            request( {url : encodeURI(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag.replace('#', '-')}/profile`),
            headers: headerOption}, (err,res,body) => {
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
 * @returns {Object} return Time values
 */
exports.getPlaytime = async (battletag, region, platform) => {
    if(!battletag||!platform||!region) throw new Error('Required Field is empty.')
    if(!['us','asia','eu'].includes(region)) throw new Error('Unsupported Region')
    if(platform !== 'pc') throw new Error('UnSupported Platfrom')
    let res = null;
    return new Promise(async (resolve, reject) => {
        request( {url : encodeURI(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag.replace('#', '-')}/complete`),
        headers: headerOption}, (err,res,body) => {
            if(err) reject(err)
            const json = JSON.parse(body)
            resolve({competitive : json.competitiveStats.careerStats.allHeroes.game.timePlayed+':00',quickPlay : json.quickPlayStats.careerStats.allHeroes.game.timePlayed})

        })
    })
}

/**
 * get Player Complete stats
 * @param {String} battletag OW urlName 
 * @param {String} platform Platform Onlt pc supported
 * @param {String} region Region asia/us/eu
 * 
 * @returns {Object} return stats
 */
exports.getStat = async (battletag, region, platform) => {
    if(!battletag||!platform||!region) throw new Error('Required Field is empty.')
    if(!['us','asia','eu'].includes(region)) throw new Error('Unsupported Region')
    if(platform !== 'pc') throw new Error('UnSupported Platfrom')
    let res = null;
    return new Promise(async (resolve, reject) => {
        request( {url : encodeURI(`https://ow-api.com/v1/stats/${platform}/${region}/${battletag.replace('#', '-')}/complete`),
        headers: headerOption}, (err,res,body) => {
            if(err) reject(err)
            resolve(JSON.parse(body))

        })
    })
}