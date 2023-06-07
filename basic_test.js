import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 100,
    duration: '10m'
};

export default () => {
    http.get('http://54.180.113.122:8080')
    sleep(0.2);
};
