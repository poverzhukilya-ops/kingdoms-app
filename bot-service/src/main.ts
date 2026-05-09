import { Bot } from 'grammy'
const token = process.env.BOT_TOKEN
if (!token) throw new Error('BOT_TOKEN is required')
const bot = new Bot(token)

bot.command('start', (ctx) => ctx.reply('Добро пожаловать в Kingdoms World!'))

bot.start()
console.log('Bot is running')
