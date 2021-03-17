#!/bin/bash
yarn
yarn rw prisma migrate deploy
yarn rw build api
