# Node.js
FROM node:16

# /app 디렉토리 생성
RUN mkdir -p /app

# /app 디렉토리 WORKDIR 로 설정
WORKDIR /app

# package.json과 package-lock.json 파일 이미지로 복사
COPY package*.json ./

# yarn 의존성 설치
RUN yarn install

# 모든 파일 복사
COPY ./ ./

# 빌드
RUN yarn run build

# 실행
CMD ["yarn", "start"]
