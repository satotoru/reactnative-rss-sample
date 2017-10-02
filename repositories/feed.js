import { parseString } from "react-native-xml2js";

export function getPopularFeeds() {
  return fetch("http://feeds.journal.mycom.co.jp/rss/mycom/career/tenshoku?rss")
    .then(res => res.text())
    .then(d => {
      return new Promise((resolve, reject) => {
        parseString(d, (e, r) => {
          if (e) {
            reject(e);
          } else {
            resolve(r);
          }
        });
      });
    });
}