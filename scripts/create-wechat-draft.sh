#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ "${1:-}" == "--help" || "${1:-}" == "-h" ]]; then
  echo "用法：npm run wechat:draft:local -- [article-slug]"
  echo "示例：npm run wechat:draft:local -- riboseek-fast-nucleotide-alignment"
  exit 0
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "找不到 npm，请先安装 Node.js 22 或更高版本。" >&2
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "找不到 curl，无法检查当前公网 IP。" >&2
  exit 1
fi

SLUG="${1:-}"
if [[ -z "$SLUG" ]]; then
  read -r -p "文章 slug: " SLUG
fi

if [[ -z "$SLUG" ]]; then
  echo "文章 slug 不能为空。" >&2
  exit 1
fi

PUBLIC_IP="$(curl -fsS --max-time 10 https://api.ipify.org)"
echo "当前公网 IP：$PUBLIC_IP"
echo "请确认这个 IP 已加入微信公众号 IP 白名单。"
echo

read -r -p "微信公众号 AppID: " WECHAT_APP_ID
if [[ -z "$WECHAT_APP_ID" ]]; then
  echo "AppID 不能为空。" >&2
  exit 1
fi

read -r -s -p "微信公众号 AppSecret（输入时不会显示）: " WECHAT_APP_SECRET
printf '\n'
if [[ -z "$WECHAT_APP_SECRET" ]]; then
  echo "AppSecret 不能为空。" >&2
  exit 1
fi

export WECHAT_APP_ID WECHAT_APP_SECRET
trap 'unset WECHAT_APP_ID WECHAT_APP_SECRET' EXIT

cd "$PROJECT_ROOT"
npm run wechat:draft -- --slug "$SLUG"
