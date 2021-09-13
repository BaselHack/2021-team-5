This project consist of two small sservices:
 - Small Proxy server
 - Angular server
To let them run in the cloud, we used to different methods, but you can change them around how you like.
Important is to replace the call url in the angular service code: search.service.ts:17
As it need to be pointed to the running server.

How did we do it:
For the small proxy server, we simple used the app engine, therfore we just run:
gcloud app deploy
This will start the application in the cloud

For the angular, we wanted to try out cloud run.
Therfore we needed to build our own docker image:

docker build -t product-search-front .

This command will generate an image, which url is pointing to the docker hub.
As we would like to push it to google hub we need to retag it:

docker tag docker.io/library/product-search-front gcr.io/emerald-mission-325710.ew.r.appspot.com/product-search-front

to be able to push we need to make sure, that gcloud is configured the right way.

gcloud auth configure-docker

If it is we simple can push:

docker push gcr.io/emerald-mission-325710/product-search-front

After that we can deploy our service in cloud run and access it over the public url

emerald-mission-325710 is the project id of the google cloud project
