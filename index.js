const chalk = require('chalk');
const {WAConnection, MessageType} = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsfelix () {
    const conn = new WAConnection();
    conn.logger.level = 'warn';

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Felix')}
${chalk.white.italic('FelixString Code Recipient')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('Felix QR Code: '), 
            Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')
        );
        await conn.sendMessage(conn.user.jid, Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64'), MessageType.text );
        console.log(            
            chalk.green.bold('IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!')
        );
        process.exit(0);
    });

    await conn.connect();
}

whatsfelix()
