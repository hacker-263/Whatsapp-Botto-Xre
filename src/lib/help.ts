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
┃□││❏PREFIX : 「 ${client._config.prefix} 」
╰─────────---────────┈ ❁ཻུ۪۪⸙͎	
	
	
	║█║▌║█║▌│║▌║▌█║
	${client._config.name}║█║▌║█║▌│║▌║▌█║  Commands\n\n💡 *Prefix:* ${client._config.prefix}\n\n`
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
	
	return `	
	
	┃□│✎┊ *Team-263-Bot*
┃□│╭────────╯   
┃□││❏*Hxcker_263*
┃□││❏R3tr0_263
┃□││❏BL4Z3_263
╰─────────────────┈ ❁ཻུ۪۪⸙͎
║█║▌║█║▌│║▌║▌█║
║█║▌║█║▌│║▌║▌█║
*_ZIM-D4RK-4RMY*`
}
