const WebHDFS = require('webhdfs')
const request = require('request')
const {exec} = require('child_process')
require("dotenv").config()

module.exports = {
 
    getHDFSFile: (path , res ) => {
        let hdfs  = WebHDFS.createClient({
            user: process.env.HDFS_USER,
            host: process.env.HDFS_HOST,
            port: process.env.HDFS_PORT,
        });
          
        let remoteFile = hdfs.createReadStream(path);
        let result = ''
        remoteFile.on('error', function onError (err) {
            res.status(400).json(JSON.parse(err)) 
        });
           
        remoteFile.on('data', function onChunk (chunk) {
            result += chunk.toString('utf8')
        
        });
           
        remoteFile.on('finish', function onFinish () {
            res.status(200).json(JSON.parse(result)) 
        }); 
    },

    executeCmd : (cmd) => {
        exec( cmd , (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
}