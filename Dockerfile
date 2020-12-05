FROM raulzarza/rz:v2.1

ENV PORT 3000

#Create Work directory
WORKDIR /usr/src/app

#Instal dependecies

RUN yarn

#copy soruce file

#build app
RUN yarn run build
EXPOSE 3000

#Run the app

CMD "yarn" "run" "start"