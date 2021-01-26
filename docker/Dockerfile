FROM python:3.8-slim-buster

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN apt update

RUN apt-get update \
    && apt-get install -y \
        build-essential \
        cmake \
        git \
        wget \
        unzip \
        yasm \
        pkg-config \
        libswscale-dev \
        libtbb2 \
        libtbb-dev \
        libjpeg-dev \
        libpng-dev \
        libtiff-dev \
        libavformat-dev \
        libpq-dev \
        libgtk2.0-dev \
        pkg-config \
        libcanberra-gtk-module \
        libcanberra-gtk3-module \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --upgrade setuptools

RUN pip install -r requirements.txt

RUN pip install pylint --upgrade

RUN pip install pylint-flask

COPY . /app

ENTRYPOINT ["python"]

CMD ["server.py"]