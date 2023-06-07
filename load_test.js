import http from "k6/http";

import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stage: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 0 },   
    ],
    thresholds: {
        http_req_duration: ['p(99)<150'],
    }
};

export default () => {

    let respose = http.get("https://localhost:8080");

    
    sleep(1);
};