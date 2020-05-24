const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1231753067:AAGQ7tz_BZd4wDpXAPjAmfIntIIlHjWAFb0';
const bot =new TelegramBot(TOKEN,{polling:true});


const limit =20;

let javob='';
let goliblar = [];
let royxat='Savolga to\'g\'ri javob topa olgan obunachilarimiz:\n';
bot.on("polling_error",(err)=>{console.log(err)})
    
    bot.on('message',(msg)=>{
        

        if(msg.text&&typeof(msg.text)==='string'){
            let text=msg.text.toLowerCase();
            bot.sendMessage(msg.chat.id, 'javobningiz qabul qilindi');

            admin(msg,text);
            klient(msg,text);
        }

        else bot.sendMessage(msg.from.id,'men faqat matnli javoblarni qabul qila olaman')
        
     })


//admin buyruqlari
     function admin(msg,text){
        if(msg.from.id===548992467){
            if(text.split(' ')[0]==='javob') {
                javob = text.split(' ')[1];
                bot.sendMessage(548992467,'javob qayta yozildi javob: '+javob)
            }
            else if(text==='deletej'){
                javob = [];
                bot.sendMessage(548992467,'javob o\'chirildi'+javob)
            }
            else if(text==='deleter'){
                royxat='';
                goliblar=[];
                bot.sendMessage(548992467,'ro\'yxat o\'chirildi'+royxat)
            }
            else if(text==='getroyxat'){

                if(goliblar!==[]){
                    let s=0;
                    goliblar.forEach((i)=>{
                        ++s;
                        royxat+=s+'.'+i+'\n'
                    })
                    bot.sendMessage(548992467,'ro\'yxat:'+royxat).then(()=>royxat='avolga to\'g\'ri javob topa olgan obunachilarimiz:\n')
                }
            }

            else if(text==='getjavob'){
                bot.sendMessage(548992467,'joriy javob: '+javob)
            }

        }
     }

// klient funksiyasi
     function klient(msg,text){if(text===javob&&goliblar.includes(msg.from.first_name)===false&&goliblar.length<limit){
    goliblar.push(msg.from.first_name);
}}


