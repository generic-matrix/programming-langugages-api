# programming-langugages-api
https://blog.logrocket.com/node-js-express-js-mysql-rest-api-example/

Connect to SQL:

```
mysql -h <hostname> -u <Username> -p
create database <name>
CREATE TABLE `programming_languages`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `name`          VARCHAR(255) NOT NULL ,
  `released_year` INT NOT NULL ,
  `githut_rank`   INT NULL ,
  `pypl_rank`     INT NULL ,
  `tiobe_rank`    INT NULL ,
  `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  `updated_at`    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`name`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;

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
