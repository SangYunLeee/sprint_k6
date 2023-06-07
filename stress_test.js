import http from "k6/http";

import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stage: [
        { duration: '2m', target: 100 },
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 },
        { duration: '5m', target: 200 },
        { duration: '2m', target: 300 },
        { duration: '5m', target: 300 },
        { duration: '2m', target: 400 },
        { duration: '5m', target: 400 },
        { duration: '10m', target: 0 },

    ],
};

// const API_BASE_URL = 'https://localhost';
// export default () => {

//     http.batch([
//         ['GET', `${API_BASE_URL}/youtube`],
//         ['GET', `${API_BASE_URL}/github`],
//         ['GET', `${API_BASE_URL}/twitter`],

//     ]);

//     sleep(1);
// };
export default function () {
    const res = http.get('http://localhost:8080');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
  };
// export default () => {
//     http.get('http://localhost:8080')
//     sleep(1);
// };