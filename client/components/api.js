import request from "superagent";

const urbanUrl = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=wolf+juice' 

export function getUD() {
  console.log("request");
  return request.get(urbanUrl).set('X-Mashape-Key', 'I79AaxJC8YmshFCC94gauzbuDLoYp1ARmj0jsnD676LOcHtSU5').then(res => {
    return res.body.list;
  });
}