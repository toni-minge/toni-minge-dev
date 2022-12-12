const chokidar = require('chokidar');
const sharp = require('sharp');
var path = require('path')
const fs = require('fs');

// Initialize watcher.
const watcher = chokidar.watch('./public/**', {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
});

// Something to use when events are received.
const log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', _path => handleImgChanges(_path, 'add'))
  .on('change', _path => log(`File ${_path} has been changed`))
  .on('unlink', _path => handleImgChanges(_path, 'remove'));


async function handleImgChanges(_path, type){
  const filetype = path.extname(_path)
  if (filetype === '.png' || filetype === '.jpg' || filetype === '.jpeg') {
    switch (type) {
      case 'add':
        convertImgToBase64(_path)
        break;
      case 'remove':
        await removeEntry(_path)
        break;
      default:

    }
  }
}

async function convertImgToBase64(_path){
  try {
    const img_buffer = await sharp(_path).resize(50).toBuffer()
    const base64 = img_buffer.toString('base64')

    await addOrCreateFile(_path, base64)
  } catch (err){
    console.log(err)
  }
}

async function removeEntry(_path){
  const folder_path = path.dirname(_path)
  const json_path = `lib/base64/${folder_path}/base64.json`

  fs.exists(json_path, function(exists) {
    if (exists){
      fs.readFile(json_path, function readFileCallback(err, data) {
        if (err){
          return console.log(err)
        }
        obj = JSON.parse(data);
        delete obj.data[_path]

        let json = JSON.stringify(obj);
        fs.writeFile(json_path, json, function(err){
          if(err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });
      })
    }
  })
}

async function addOrCreateFile(_path, base64){
  const folder_path = path.dirname(_path)
  const dir = `lib/base64/${folder_path}`
  const json_path = `${dir}/base64.json`
  console.log(dir)

  if (!fs.existsSync(dir)){
    console.log('create folder')
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.exists(json_path, function(exists) {
    if (exists){
      console.log('already exists')
      fs.readFile(json_path, function readFileCallback(err, data) {
        if (err){
          return console.log(err)
        }
        obj = JSON.parse(data);
        obj.data[_path] = base64

        let json = JSON.stringify(obj);
        fs.writeFile(json_path, json, function(err){
          if(err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });
      })
    } else {
      let json = JSON.stringify({ data: { [`${_path}`] : base64 }});
      fs.writeFile(json_path, json, function(err){
        if(err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
    }
  })
}
