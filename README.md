# docker-tor

Build image with node tor test:
```
sudo docker-compose build tor-test
```

Start tor proxy and tor-test containers:
```
sudo docker-compose up
```

Test if tor is working:
```
sudo docker exec -it tor-test node test.js
```

motivated by: https://dev.to/koistya/run-node-js-scripts-from-under-a-tor-http-proxy-b1
