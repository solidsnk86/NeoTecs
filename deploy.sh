#!/bin/bash

rm -rf .next

npm install --no-frozen-lockfile

npm run build

vercel