/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-05-11 14:57:58
 * @LastEditors: bhabgs
 * @LastEditTime: 2020-05-13 15:27:08
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/public/scripts/sw1.js')
      .then(() => {
        console.log('yes');
      })
      .catch(e => {
        console.log(e);
      });
  });
}
