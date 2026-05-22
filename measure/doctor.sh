#!/bin/bash
set -e

echo "=== Measure Doctor ==="
echo "Running architectural linting and structural checks..."
echo ""

# 1. Linting
echo "[1/3] Running ESLint..."
npm run lint
echo "✓ Linting passed"
echo ""

# 2. Type checking
echo "[2/3] Running TypeScript type check..."
npx tsc --noEmit
echo "✓ Type check passed"
echo ""

# 3. Generated docs freshness
echo "[3/3] Checking generated docs freshness..."
if ! git diff --exit-code measure/generated/ > /dev/null 2>&1; then
  echo "✗ Generated docs are stale. Run ./measure/generate.sh and commit the results."
  exit 1
fi
echo "✓ Generated docs are up to date"
echo ""

echo "=== All checks passed ==="
