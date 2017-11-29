// A hook that logs service method before, after and error
const dauria = require('dauria');

module.exports = {
  hooks: function(hook) {
    if (!hook.data.picture && hook.params.picture){
      const file = hook.params.picture;
      const uri = dauria.getBase64DataURI(file.buffer, file.mimetype);
      hook.data = {uri: uri};
    }
  }
}
