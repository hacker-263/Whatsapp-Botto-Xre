import { Client } from '../Client'
import commands from './commands.json'
import Utils from '../Utils'
import responses from './responses.json'
import { ICommandList } from '../Typings'

export const help = (client: Client, command?: string): string => {
    if (command) {
        for (const category in commands) {
            for (const index of (commands as ICommandList)[category]) {
                if (index.command === command) {
                    return `*📗 Command:* ${index.command}\n📙 *Description:* ${index.description}\n📘 *Usage:* ${client._config.prefix}${index.usage}`
                }
            }
        }
        return responses['invalid-command-short'].replace('{C}', command)
    }
    let base = `╭────┈ ↷
┃□│✎┊ *ZeD-Bot*
┃□│╭────────╯
┃□││❏OWNER : @Hxcker_263
┃□││❏NAMA : ${client._config.name}
┃□││❏Team : Team_263  
┃□││❏GROUP : *${group.metadata.subject}*
┃□││❏PREFIX : 「 ${client._config.prefix} 」
╰─────────---────────┈ ❁ཻུ۪۪⸙͎	


|-------------------------|
─────────────────┈ ❁۪۪
❏ *Support-Owner* 」 
> *Folow IG Bot: @hxcker_263*
╰─────────────────┈ ❁ཻུུ۪۪۪۪
|-------------------------|


─────────────────┈ ❁۪۪
❏ *General-Commands* 」
╰─❁۪۪
> *${client._config.prefix}help*
> *${client._config.prefix}admins*
> *${client._config.prefix}everyone*
> *${client._config.prefix}profile*
> *${client._config.prefix}xp*
> *${client._config.prefix}delete*
╰─────────────────┈ ❁ཻཻུུ۪۪۪۪⸙͎

❏ *Media-Commands* 」
╰─❁۪۪
> *${client._config.prefix}play*
> *${client._config.prefix}yts*
> *${client._config.prefix}yta*
> *${client._config.prefix}ytv*
> *${client._config.prefix}spotify*
> *${client._config.prefix}sticker*
> *${client._config.prefix}subred*
> *${client._config.prefix}blur*
╰─────────────────┈ ❁ཻུ۪۪⸙͎

❏ *Moderation* 」
╰─❁۪۪
> *${client._config.prefix}activate*
> *${client._config.prefix}deacticate*
> *${client._config.prefix}demote*
> *${client._config.prefix}promote*
> *${client._config.prefix}remove*
> *${client._config.prefix}purge*
╰─────────────────┈ ❁ཻཻུུ۪۪۪۪⸙͎

┃□│✎┊ *${client._config.name}*
┃□│╭────────╯   
┃□││❏*Hxcker_263*
┃□││❏R3tr0_263
┃□││❏BL4Z3_263
╰─────────────────┈ ❁ཻུ۪۪⸙͎
║█║▌║█║▌│║▌║▌█║
║█║▌║█║▌│║▌║▌█║
*_ZIM-D4RK-4RMY*
	
	
	${client._config.name} Commands\n\n💡 *Prefix:* ${client._config.prefix}\n\n`
    const cmds = commands as ICommandList
    const cats = Object.keys(cmds)
    for (const cat in cmds) {
        base += `*${Utils.capitalize(cat)}* ${Utils.emojis[cats.indexOf(cat)]}\n\`\`\``
        cmds[cat].forEach((cmd) => {
            base += `${cmd.command}${cmds[cat][cmds[cat].length - 4] === cmd ? '' : ', '}`
        })
        base += '```\n\n'
    }
    return `${base}📚 Use ${client._config.prefix}help <command_name> to view the full info. \n🔖 _Eg: ${client._config.prefix}help promote_`\n\n'
	
}
