FROM debian:stretch

RUN apt update \
  && apt install -y postgresql-client-9.6 sqitch

ADD . /src
VOLUME /src
WORKDIR /src

ENTRYPOINT ["./sedscript.sh"]
