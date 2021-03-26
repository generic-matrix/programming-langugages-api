# programming-langugages-api
https://blog.logrocket.com/node-js-express-js-mysql-rest-api-example/

Connect to SQL:

```
mysql -h <hostname> -u <Username> -p
```

Connection to GKE by gcloud and then :

```
kubectl create namespace app
kubectl get namespace 
```

Build the docker image
```
docker build -t application .
```

Tag the docker image
```
docker tag busybox gcr.io/my-project/application
```

Push the image to GCR
```
docker push gcr.io/my-project/application
```

In the YAML file 
```
kubectl apply -f deploy.yaml
```
A demo REST API with Node.js Express.js and MySQL for most popular programming languages
