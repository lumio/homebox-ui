#!/bin/bash

npx --no c8 \
  node --import tsx --test $(find . -name '*.test.ts' -not -path './node_modules/*')
