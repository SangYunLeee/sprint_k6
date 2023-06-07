# sprint_k6_test
### install k6
```shell
sudo apt update
sudo apt install snapd
sudo snap install k6
```
### run each script
```shell
run k6 basic_test.js
run k6 load_test.js 
run k6 stress_test.js
run k6 spike_test.js
run k6 soak_test.js
```

### 각각의 스크립트를 하나씩 실행시킨 후 결과를 확인하고 그다음 스크립트를 실행시키세요.
