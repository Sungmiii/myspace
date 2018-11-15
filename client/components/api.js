import request from "superagent";

const urbanUrl = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=wolf+juice' 

export function getUD() {
  console.log("request");
  return request.get(urbanUrl).then(res => {
    return res.body;
  });
}