FROM node:slim


#Create Work directory
RUN mkdir -p /usr/src/app
WORKDIR  /usr/src/app

#Instal dependecies
COPY ./ ./

RUN yarn

#copy soruce file

#build app
RUN yarn run build

EXPOSE 3000

#Run the app

CMD "yarn" "dev"