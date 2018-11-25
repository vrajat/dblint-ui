#!/bin/bash

set -ex

docker build -t us.gcr.io/${PROJECT_ID_PROD}/${DOCKER_IMAGE_NAME}:$TRAVIS_TAG .

gcloud auth activate-service-account --key-file ops/auth.json

gcloud --quiet config set project $PROJECT_ID_PROD
gcloud --quiet config set container/cluster $CLUSTER_NAME_PROD
gcloud --quiet config set compute/zone ${CLOUDSDK_COMPUTE_ZONE}
gcloud --quiet config set container/use_application_default_credentials true
gcloud --quiet container clusters get-credentials $CLUSTER_NAME_PROD

gcloud auth configure-docker
docker push us.gcr.io/${PROJECT_ID_PROD}/${DOCKER_IMAGE_NAME}:$TRAVIS_TAG

kubectl set image deployment/${KUBE_DEPLOYMENT_NAME} ${KUBE_DEPLOYMENT_CONTAINER_NAME}=us.gcr.io/${PROJECT_ID_PROD}/${DOCKER_IMAGE_NAME}:$TRAVIS_TAG
