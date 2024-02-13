docker-web-server
==

## Related Article:

* [How to Build a Docker Container](https://scriptable.com/docker/how-to-build-a-docker-container/)

## Usage

### Run locally

```sh
node server.js
```

### Build docker container

```sh
docker build . -t my-web-server
```

### Create a run the container

```sh
docker run -p 3000:3000 --name test-server my-web-server
```

### Cleanup

```sh
docker stop test-server
docker rm test-server
docker rmi my-web-server
```

## Single line commands

### Create

```sh
docker build . -t my-web-server && docker run -p 3000:3000 --name test-server my-web-server
```

### Remove

```sh
docker stop test-server && docker rm test-server && docker rmi my-web-server
```