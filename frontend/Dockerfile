#Nginx가 제공을 해줄 build 파일들을 생성하는 단계 (정적인파일)
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

#Nginx를 가동하고 윗 단계에서 생성된 빌드 파일들을 제공하여 준다.
#그리고 default.conf에서 해준 설정을 nginx 컨테이너 안에 있는 설정이 되게 복사를 해준다.
FROM nginx
EXPOSE 3000
#컨테이너 안에 있는 nginx 설정 경로 작성해준 default.conf로 덧씌워준다.
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html