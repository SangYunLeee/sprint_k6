import http from "k6/http";

import { sleep, check } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '10s', target: 100 },
        { duration: '1m', target: 400 },
        { duration: '10s', target: 1400 },
        { duration: '3m', target: 2000 },
        { duration: '3m', target: 3000 },
        { duration: '20s', target: 100 },
        { duration: '10s', target: 0 },        
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
    const res = http.get('http://test-1:8080');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
  };
// export default () => {
//     http.get('http://localhost:8080')
//     sleep(1);
// };
