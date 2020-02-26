FROM vibioh/viws

ENV VIWS_CSP "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
ENV VIWS_HEADERS X-UA-Compatible:ie=edge~content-language:fr

ARG VERSION
ENV VERSION=${VERSION}

COPY dist/ /www/
