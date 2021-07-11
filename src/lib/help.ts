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

    return `.╭────┈ ↷
┃□│✎┊ *👾ZeD-Bot👾*
┃□│╭────────╯
┃□││❏OWNER   : @Hxcker_263
┃□││❏OWNER # : https://wa.me/+263718635356
┃□││❏NAME    : ${client._config.name}
┃□││❏Team    : Team_263  
┃□││❏GROUP   : *${group.metadata.subject}*
┃□││❏PREFIX  : 「 ${client._config.prefix} 」
╰─────────---────────┈ ❁ཻུ۪۪⸙͎	
\n\n📚 Use ${client._config.prefix}help <command_name> to view the full info. \n🔖 _Eg: ${client._config.prefix}help promote_ \n\n Hope you have a great day!

🎩🐺✌....Peace`
}
