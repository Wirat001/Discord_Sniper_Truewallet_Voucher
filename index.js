/////////////////////////////////////////////////////////
////////By Wirat001 /////////////////////////////////////
////////ทำขึ้นเพื่อการศึกษาเท่านั้นนะอิอิ                 /////////
////////สามารถทำรับเงินออโต้ได้            ///////////////////
/////////////////////////////////////////////////////////
////////ส่วนบัญชี Discord โดนแบน ผมไม่รู้นะอิอิ//////////////////
/////////แจกฟรี โค๊ตกากๆแบบนี้อย่าเอาไปขายละ 555 /////////////////
/////////////////////////////////////////////////////////

//ตั้งค่าก่อนนนนนนนนนนนนนน

const serverId = ''; // เซิฟเวอร์ ที่ให้บอทส่งข้อความ (บอทต้องอยู่ในเซิฟด้วย)
const channelId = '';// ช่องข้อความ ที่ให้บอทส่งข้อความ (บอทต้องอยู่ในเซิฟด้วย)
const token = ""; // โทเค็นคนเท่านั้นนะครับ ของบอทใช้ไม่ได้ วิธีหาโทเค็น หาเอาเองละกัน

//////////////////////////////////////////////////////////////////////////////


/////นี่โค๊ต ลุยเลยยยยยยยยยยยยยยย

const { Client, MessageEmbed } = require('discord.js-selfbot-v13'); //ประกาศตัวแปรดึงโมดุล
const client = new Client({ // ฟังก์ชั่น client
    checkUpdate: false, // ปิดอัพเดดของ discord self bot
});


client.on('ready', async () => {
    console.log(`${client.user.username} || Id (${client.user.id}) is ready!`); // ready event
})

client.on('messageCreate', (message) => {
    if (message.author.id == client.user.id) return; //ถ้าเป็นข้อความของบอท ให้ผ่านไป กันสแปมข้อความตัวเอง
    if (message.content.includes('https://gift.truemoney.com/campaign/?v=')) { // กรองข้อความเฉพาะ ลิ้งค์ (https://gift.truemoney.com/campaign/?v=) สามารถดักอย่างอื่นได้ ใช้ message
         client.guilds.cache.get(serverId).channels.cache.get(channelId).send(`ดักอังเปา \n ลิ้งค์อังเปา ==> ***${message.content.split(' ')}***`) // ส่งข้อลิ้งค์ลงเซิฟที่ตั้งค่าไว้

       
    }

})


client.login(token); //ล็อคอิน discord 