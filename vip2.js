
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://103.85.84.48:81/gm/user/fuli.php`;
const method = `POST`;
const headers = {
'Accept' : `*/*`,
'Origin' : `http://202.189.4.2:81`,
'Accept-Encoding' : `gzip, deflate`,
'Content-Type' : `application/x-www-form-urlencoded; charset=utf-8`,
'Connection' : `keep-alive`,
'Host' : `202.189.4.2:81`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Mobile/15E148 Safari/604.1`,
'Referer' : `http://202.189.4.2:81/gm/`,
'Accept-Language' : `zh-cn`,
'X-Requested-With' : `XMLHttpRequest`
};
const body = `type=fuli&uid=15757296309&qu=1&quanvip=2`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
