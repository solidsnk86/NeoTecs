#!/bin/bash

rm -rf .next

pnpm install --no-frozen-lockfile

pnpm run build

vercel