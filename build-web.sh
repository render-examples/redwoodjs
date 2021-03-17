#!/bin/bash
export API_PROXY_PATH=${API_PROXY_HOST}.onrender.com
yarn
yarn rw build web
