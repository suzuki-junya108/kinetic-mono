# KINETIC MONO v2.0
## Design System Specification

> **"変えてはいけないものと、変えてよいものが明確に分離されている"**
> 
> The Clinical Curator — ブルータリズム × ラグジュアリー精密さ

---

## 目次

1. [コンセプト](#1-コンセプト)
2. [カラーシステム](#2-カラーシステム)
3. [タイポグラフィ](#3-タイポグラフィ)
4. [スペーシング](#4-スペーシング)
5. [モーション](#5-モーション)
6. [レイアウト](#6-レイアウト)
7. [Elevationとシャドウ](#7-elevationとシャドウ)
8. [コンポーネント](#8-コンポーネント)
9. [アクセントモードシステム](#9-アクセントモードシステム)
9.5. [国際化（i18n）システム](#95-国際化i18nシステム)
10. [アクセシビリティルール](#10-アクセシビリティルール)
11. [ページ構成](#11-ページ構成)
12. [DO / DON'T](#12-do--dont)
13. [実装仕様](#13-実装仕様)
14. [アイコンシステム](#14-アイコンシステム)

---

## 1. コンセプト

### 名前の意味

```
KINETIC  ×  MONO
  ↓            ↓
運動・力学     単一・純粋
```

- **KINETIC** — 動くべきものが、力学的に動く。慣性と制動の感覚。ふわっとではなく、重さのある物体が動いて止まる感覚。
- **MONO** — フォント1種、Yellow起点のアクセント構造、等幅による情報分離。変化しない原則の宣言。

### The Clinical Curator（副題）

| 語 | 意味 |
|---|---|
| **Clinical** | 感情を排した精密さ、白衣の清潔感、診断の客観性 |
| **Curator** | 選択する主観、美的判断、編集の意志 |

この逆説的な組み合わせが、ブルータリズム（構造の露出）とラグジュアリー（洗練された選択）の共存を支える。

### 変えてはいけないもの vs 変えてよいもの

| 変化しない（Mono） | 変化する（Kinetic） |
|---|---|
| `border-radius: 0px` （絶対） | アクセントカラー |
| Plus Jakarta Sans 一種のみ | ホバー時の色・位置 |
| 8px スペーシンググリッド | Accent Mode（4種） |
| √2 タイプスケール | セクションの背景 |
| 白ベース Surface 構造 | タグ・ボーダーの色 |

---

## 2. カラーシステム

### Layer 1 — 原色パレット（変更不可）

| 名前 | HEX | CSS変数 | 役割 |
|---|---|---|---|
| Kinetic Yellow | `#FFEA00` | `--palette-yellow` | 主軸アクセント。常に起点。 |
| Kinetic Blue | `#0057FF` | `--palette-blue` | 情報・セカンダリ |
| Kinetic Red | `#FF2D2D` | `--palette-red` | 警告・アラート |
| Kinetic Green | `#00C853` | `--palette-green` | 成功・オーガニック |
| Kinetic Purple | `#8B00FF` | `--palette-purple` | タイポグラフィック系 |
| Kinetic Orange | `#FF6B00` | `--palette-orange` | ランドスケープ・エネルギー |
| Black | `#000000` | `--palette-black` | 最高優先度テキスト・UI |
| White | `#FFFFFF` | `--palette-white` | カード・最前面 |

### Layer 2 — Surface Scale（白ベース奥行き構造）

```
深い ←────────────────────────────────→ 浅い（手前）

#0A0A0A   #EBEBEB   #F3F3F3   #F9F9F9   #FFFFFF
DARK      SURFACE-3  SURFACE-2  SURFACE-1  SURFACE-0
反転セクション  入力フィールド  Nav・サイドバー  メインCanvas  カード・コンテンツ
```

| 変数 | HEX | 用途 |
|---|---|---|
| `--surface-0` | `#FFFFFF` | カード、コンテンツ面（最前面） |
| `--surface-1` | `#F9F9F9` | メインキャンバス（`<body>` 背景） |
| `--surface-2` | `#F3F3F3` | ナビゲーション、サイドバー |
| `--surface-3` | `#EBEBEB` | 入力フィールド、sunken要素 |
| `--surface-4` | `#DEDEDE` | 区切り線、最小限のライン |
| `--surface-dark` | `#0A0A0A` | 反転セクション（Manifestoなど） |

**原則**: 奥行きはBackground Shiftで表現する。1pxボーダーによるレイアウト区切りは禁止。

### Layer 3 — テキストスケール

| 変数 | HEX | 用途 |
|---|---|---|
| `--text-1` | `#000000` | Primary text |
| `--text-2` | `#3A3A3A` | Secondary text |
| `--text-3` | `#777777` | Metadata, tertiary |
| `--text-4` | `#BBBBBB` | Disabled, placeholder |
| `--text-inv` | `#FFFFFF` | 暗い背景上のテキスト |

### Layer 4 — セマンティックアクセントトークン

コンポーネントはこのトークンだけを参照する。パレットを直接参照しない。

```css
--a1 〜 --a6   : アクセントカラー本体
--on-a1 〜 --on-a6 : そのアクセント上のテキスト色（黒 or 白）
```

---

## 3. タイポグラフィ

### フォントファミリー

```
Display / UI: Plus Jakarta Sans（Google Fonts）
             weights: 300, 400, 500, 600, 700, 800
             
Data / Code:  JetBrains Mono（Google Fonts）
             weights: 400, 700
```

**原則**: フォントは2種のみ。フォントの種類で情報の種類（UIコピー vs 技術データ）を区別する。

### タイプスケール — √2比（1.414）

A判用紙の比率（√2）に由来。日本的な起源を持つ独自スケール。

| 変数 | サイズ | weight | tracking | leading | 用途 |
|---|---|---|---|---|---|
| `--t-hero` | `80px` | 800 | `-0.05em` | `0.9` | ヒーロー表示 |
| `--t-3xl` | `57px` | 800 | `-0.04em` | `1.0` | H1 / Display |
| `--t-2xl` | `40px` | 800 | `-0.03em` | `1.05` | H2 / セクション見出し |
| `--t-xl` | `28px` | 700–800 | `-0.02em` | `1.1` | H3 / カードタイトル |
| `--t-lg` | `20px` | 600 | `0` | `1.4` | Subtitle / Callout |
| `--t-base` | `16px` | 400 | `0` | `1.6` | Body copy |
| `--t-sm` | `14px` | 400–500 | `0` | `1.6` | Caption, metadata |
| `--t-xs` | `10px` | 700 | `+0.2em` | — | **Micro-Label**（必ずUPPERCASE） |

### Micro-Label（署名的要素）

このシステムの最も特徴的な単位。

```
- サイズ: 10px
- weight: 700（Bold）
- tracking: +0.2em
- 表示: 必ずUPPERCASE
- 色: --text-3（#777777）が基本
- アクセント版: background: --a1; color: --on-a1; padding: 2px 6px;
```

### 等幅テキストのルール

数値データ・コード・ID・タイムスタンプはすべて JetBrains Mono で表示。

```
OK:  <span style="font-family:var(--font-mono)">KM-4291</span>
OK:  <span style="font-family:var(--font-mono)">09:14:02</span>
NG:  IDや数値をPlus Jakarta Sansで表示する
```

---

## 4. スペーシング

8pxを基準とした倍数スケール。端数は使わない。

| 変数 | 値 | 主な用途 |
|---|---|---|
| `--sp-1` | `8px` | アイコンと文字の間、tag内padding |
| `--sp-2` | `16px` | 要素間の標準余白、button padding |
| `--sp-3` | `24px` | カード内padding、セクション内gap |
| `--sp-4` | `32px` | カード間、ページヘッダーpadding |
| `--sp-5` | `48px` | セクション左右padding |
| `--sp-6` | `64px` | セクション上下padding |
| `--sp-7` | `96px` | 大セクション（Manifestoなど） |
| `--sp-8` | `128px` | 最大余白 |

---

## 5. モーション

### 3つの名前付きイージングカーブ

| 名前 | CSS値 | 感触 | 主な用途 |
|---|---|---|---|
| **Kinetic** | `cubic-bezier(0.22, 1, 0.36, 1)` | 急加速→スッと着地 | ホバー、Active状態切替 |
| **Editorial** | `cubic-bezier(0.76, 0, 0.24, 1)` | 重く→急停止 | モーダル、大きな遷移 |
| **Snap** | `cubic-bezier(1, 0, 0.5, 1.5)` | オーバーシュート→弾む | ポップアップ、通知 |

### デュレーション

| 変数 | 値 | 用途 |
|---|---|---|
| `--dur-instant` | `80ms` | 色の切替、即時フィードバック |
| `--dur-quick` | `200ms` | ホバーのtranslate、通常遷移 |
| `--dur-moderate` | `400ms` | パネル開閉、フィルター切替 |
| `--dur-slow` | `700ms` | ページイン、大きなレイアウト変化 |

### Kinetic Hover — システムの署名的インタラクション

すべてのインタラクティブ要素に適用される統一則。

```
静止状態:
  background: --palette-black
  color: --palette-white
  transform: translateX(0)

ホバー時（80ms, ease-kinetic）:
  background: --a1        ← アクセントカラーに即座に切替
  color: --on-a1          ← 上のテキスト色
  transform: translateX(4px)  ← 右に4px移動

アニメーション: transition 80ms cubic-bezier(0.22, 1, 0.36, 1)
```

### ナビゲーションリンクのKinetic Line

```
静止状態:
  ::before { width: 3px; height: 100%; scaleY(0); background: --a1 }
  color: --text-3

ホバー時:
  ::before { scaleY(1) }   ← 左端に縦ラインが現れる
  translateX(4px)
  color: --text-1

Active状態:
  background: --a1
  color: --on-a1
  ::before は非表示
```

---

## 6. レイアウト

### シェル構造

```
┌──────────────────────────────────────────────────┐
│  .km-nav (240px, fixed, left)                     │
│  ┌──────────────────────────────────────────────┐ │
│  │ Header: Logo Mark (36×36 black) + Brand Name │ │
│  │ ─────────────────────────────────────────── │ │
│  │ Section: PAGES (01–04)                       │ │
│  │ Section: SYSTEM (05–06)                      │ │
│  │ ─────────────────────────────────────────── │ │
│  │ Accent Panel (下部固定): Mode Switcher       │ │
│  │ Footer: "THE CLINICAL CURATOR"               │ │
│  └──────────────────────────────────────────────┘ │
│                                                   │
│  .km-main (margin-left: 240px, flex: 1)           │
│  ┌──────────────────────────────────────────────┐ │
│  │ Page content                                  │ │
│  └──────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

| 変数 | 値 |
|---|---|
| `--nav-w` | `240px` |
| `--radius` | `0px`（全要素共通） |

### Bento Grid

ページコンテンツの基本組み方。

```css
/* 基本設定 */
.km-bento {
  display: grid;
  gap: 24px; /* --sp-3 */
}

/* バリエーション */
.km-bento--2col { grid-template-columns: repeat(2, 1fr); }
.km-bento--3col { grid-template-columns: repeat(3, 1fr); }
.km-bento--4col { grid-template-columns: repeat(4, 1fr); }

/* セルのspan */
.km-cell--wide { grid-column: span 2; }
.km-cell--full { grid-column: 1 / -1; }
```

**ゼロラジアス厳守**: すべてのセル・カードは `border-radius: 0`。

### ダッシュボードレイアウト

```
┌────────────────────────────────┐
│  Stats Row  (4列均等)           │
├──────────────────┬─────────────┤
│  Chart (2/3幅)   │ Status      │
│                  │ Panel       │
├──────────────────┤ (1/3幅,     │
│  Data Table      │  2行span)   │
│  (2/3幅)         │             │
└──────────────────┴─────────────┘
```

実装: `grid-template-columns: 1fr 1fr 320px`

### ギャラリーレイアウト

- PC（1200px+）: 4列
- タブレット（900–1199px）: 3列
- 小タブレット（600–899px）: 2列
- モバイル（〜599px）: 1列

### 詳細ページレイアウト

```
┌───────────────────────┬──────────────┐
│  Artwork (square,     │ Sidebar      │
│  sticky top,          │ (320px固定)  │
│  black bg)            │              │
└───────────────────────┴──────────────┘
grid-template-columns: 1fr 320px
```

---

## 7. Elevationとシャドウ

影なし原則。ただし**浮遊要素だけに最小限のシャドウ**を使う。

| 変数 | 値 | 用途 |
|---|---|---|
| `--shadow-card` | `0px 2px 8px rgba(0,0,0,0.04)` | カード（最小） |
| `--shadow-raised` | `0px 8px 24px rgba(0,0,0,0.06)` | ホバー時の浮き上がり |
| `--shadow-float` | `0px 24px 48px rgba(0,0,0,0.04)` | Sticky topbar |

**禁止**: グラデーションシャドウ、color shadowなど。奥行き表現はsurface colorの変化で行う。

---

## 8. コンポーネント

### Button（3バリエーション）

```
Primary Button:
  静止: bg #000 / color #fff / border #000
  ホバー: bg --a1 / color --on-a1 / border --a1 / translateX(4px)

Outline Button:
  静止: bg transparent / color #000 / border #000
  ホバー: bg #000 / color #fff / translateX(4px)

Accent Button:
  静止: bg --a1 / color --on-a1
  ホバー: bg #000 / color #fff / translateX(4px)

共通:
  font-size: 10px / weight: 700 / tracking: +0.2em / UPPERCASE
  padding: 16px 24px (Standard) / 6px 16px (Small)
  border-radius: 0px
  transition: 80ms ease-kinetic
```

### Tag / Badge

```
size: 9px / weight: 700 / tracking: +0.15em / UPPERCASE
padding: 3px 8px
border-radius: 0px
ホバー: translateX(2px)

種類:
  .km-tag--a1〜a6  : 各アクセントカラー背景
  .km-tag--outline : transparent bg / surface-4 border
```

### Bento Cell

```
background: --surface-0 (#FFFFFF)
padding: 24px (--sp-3)
box-shadow: --shadow-card
border-radius: 0px

バリエーション:
  .km-cell--accent : bg #000 / color #fff
  .km-cell--a1     : bg --a1 / color --on-a1
  .km-cell--a2     : bg --a2 / color --on-a2
  .km-cell--a3     : bg --a3 / color --on-a3

Kinetic Line（インタラクティブセル）:
  ::before { left:0; width:0; height:100%; bg:--a1 }
  ホバー時: width → 4px (即時)
  + translateY(-2px)
```

### Stat Card

```
layout: flex column
padding: 24px 32px
bottom accent line: 3px solid --a1 (position: absolute, bottom:0)

label:  9px / weight:700 / tracking:+0.2em / #777 / UPPERCASE
value:  40px / weight:800 / tracking:-0.04em
delta:  10px / weight:700
  - up:   color #00C853 (palette-green)
  - down: color #FF2D2D (palette-red)
```

### 横棒チャート

```
row layout: grid-template-columns: 100px 1fr 60px

label:  9px / weight:700 / text-align:right / #3A3A3A
track:  height 8px / bg --surface-3
bar:    bg --a1 (または --a2〜--a6) / transition: width 0.8s ease-kinetic
value:  JetBrains Mono / 11px / weight:700
```

### Progress Bar

```
header: label(9px/700/+0.15em) + pct(JetBrains Mono/11px/700)
track:  height 6px / bg --surface-3
fill:   bg --a1 / transition: width 1s ease-kinetic
```

### Activity Feed

```
row: grid-template-columns: 4px 1fr auto
  dot: 4×4px square / bg --a1 (またはa2,a3)
  title: 14px / weight:600
  desc:  12px / color --text-3
  time:  JetBrains Mono / 9px / --text-4
  separator: border-bottom 1px --surface-3
```

### Data Table

```
header: bg --surface-2 / 9px / weight:700 / +0.2em / UPPERCASE / #777
        border-bottom: 2px solid --surface-3
row:    border-bottom: 1px solid --surface-3 / padding: 16px
        ホバー: bg --surface-2
td:     14px / color --text-2

status dot: 6×6px square
  - active:  bg #00C853
  - pending: bg #FFEA00
  - error:   bg #FF2D2D
```

### Gallery Card

```
hover: translateY(-4px) + --shadow-raised
thumb: aspect-ratio 1:1 / CSS Artで表現
meta:  border-top: 3px solid --a{n} (カテゴリ対応色)
id:    JetBrains Mono / 9px / --text-4
name:  14px / weight:700
cat:   9px tag / 対応アクセントカラー背景
```

### Kinetic Line（シグネチャーマーカー）

縦4pxの線。セクション区切り、ヒーローの右端装飾に使用。

```css
.km-kinetic-line {
  width: 4px;
  background: var(--a1);
  transition: background var(--dur-quick);
}
```

---

## 9. アクセントモードシステム

### アーキテクチャ

```
html[data-accent="single|dual|tri|full"]
  ↓
CSS variables: --a1〜--a6, --on-a1〜--on-a6 が上書き
  ↓
全コンポーネントが自動反映（var()参照のため）
```

### 4つのモード定義

#### SINGLE（デフォルト）
権威、統一感、ブランド主張最大。

```
--a1〜--a6: すべて #FFEA00 / --on-a1〜6: #000
```

#### DUAL
Primary（アクション）vs Secondary（情報）の機能分化。

```
--a1, a3, a5: #FFEA00 / --on: #000
--a2, a4, a6: #0057FF / --on: #fff
```

#### TRI
アクション / 情報 / 警告の三色意味付け。ダッシュボード向き。

```
--a1, a4: #FFEA00 / --on: #000   → アクション
--a2, a5: #0057FF / --on: #fff   → 情報
--a3, a6: #FF2D2D / --on: #fff   → 警告
```

#### FULL
全6色。エディトリアル、ギャラリー、カテゴリ分類向き。

```
--a1: #FFEA00 / --on: #000   Yellow
--a2: #0057FF / --on: #fff   Blue
--a3: #FF2D2D / --on: #fff   Red
--a4: #00C853 / --on: #000   Green
--a5: #8B00FF / --on: #fff   Purple
--a6: #FF6B00 / --on: #000   Orange
```

### JavaScript API

`nav.js` が自動注入。`localStorage` に永続化。

```javascript
// アクセントモード切替
window.KineticMono.setAccent('dual')
window.KineticMono.getAccent()  // 'single' | 'dual' | 'tri' | 'full'

// 言語切替（i18n.js）
window.KineticMono.setLang('en')
window.KineticMono.getLang()    // 'ja' | 'en'
window.KineticMono.t('nav.gallery')  // 翻訳キーから値を取得

// アイコン生成（icons.js）
window.KineticMono.icon('arrow-right', { size: 'lg', cls: 'km-icon--a1' })
```

### 切替UIの仕様

左ナビゲーション下部に固定配置。

**LANGUAGE パネル**
```
- ボタン: 2つ（JA 日本語 / EN English）
- アクティブ状態: border-left: 2px solid --a1; bg --surface-0
- ラベル: JetBrains Mono 10px / weight:800
- 永続化: localStorage('km-lang')
```

**ACCENT MODE パネル**
```
- ボタン: 4つ（Single / Dual / Tri / Full）
- アクティブ状態: border-left: 2px solid --a1; bg --surface-0
- スウォッチ: 10×10px square × 色数分
- ラベル: 9px / weight:700 / +0.15em / UPPERCASE
- 永続化: localStorage('km-accent')
```

---

## 9.5. 国際化（i18n）システム

### アーキテクチャ

```
html[lang="ja|en"]
  ↓
i18n.js が lang/{lang}.json をfetch
  ↓
[data-i18n="key"] を持つ全要素のテキストが自動置換
  ↓
[data-i18n-placeholder="key"] のplaceholderも置換
```

### 翻訳ファイル構造

```
lang/
├── ja.json    (737キー)
└── en.json    (737キー)
```

各JSONは以下の構造:
```json
{
  "lang": "ja",
  "meta": { "label": "日本語", "code": "JA" },
  "nav": { "pages": "ページ", "dashboard": "ダッシュボード", ... },
  "common": { "refresh": "更新", "settings": "設定", ... },
  "dashboard": { "title": "オーバービュー", ... },
  ...
}
```

### 使い方

```html
<!-- テキスト翻訳 -->
<h1 data-i18n="dashboard.title">OVERVIEW</h1>

<!-- プレースホルダー翻訳 -->
<input placeholder="you@company.com" data-i18n-placeholder="login.EMAIL_PLACEHOLDER">

<!-- HTML含むテキスト（<br>等） -->
<p data-i18n="index.hero_desc">A high-end editorial design system...</p>
```

**原則**: HTMLにはデフォルト言語（英語）のテキストを記述し、`data-i18n` 属性で翻訳キーを指定する。i18n.js が言語設定に応じてテキストを動的に置換する。

---

## 10. アクセシビリティルール

### 白背景における色の使い方

コントラスト比の実測値（WCAG AA: テキスト4.5:1以上）。

| カラー | on White コントラスト | テキストとして使用 |
|---|---|---|
| Yellow `#FFEA00` | 1.07:1 | **禁止**（色面専用） |
| Green `#00C853` | 2.9:1 | **禁止**（色面専用） |
| Orange `#FF6B00` | 3.0:1 | **禁止**（色面専用） |
| Red `#FF2D2D` | 4.8:1 | ✅ 可（大文字推奨） |
| Blue `#0057FF` | 8.2:1 | ✅ 可 |
| Purple `#8B00FF` | 7.5:1 | ✅ 可 |

### Yellow・Green・Orangeの正しい使い方

```
✅ 正:  Yellow背景 + 黒テキスト → 17.1:1
✅ 正:  黒背景 + Yellowテキスト → 17.1:1
✅ 正:  Yellowをボーダー・ライン（4px以上）として使う
❌ 誤:  白/グレー背景上のYellowテキスト
❌ 誤:  Yellowアイコン単体（文字扱いになる）
```

### フォーカス管理

```css
/* すべてのインタラクティブ要素に適用 */
:focus-visible {
  outline: 2px solid var(--a1);
  outline-offset: 2px;
}
```

### ARIAとセマンティクス

- ナビゲーションに `role="navigation"` `aria-label="Main navigation"`
- アクティブページに `aria-current="page"`
- Accent Mode切替に `role="group"` `aria-label="Accent color mode"`
- 各ボタンに `aria-pressed` でアクティブ状態を表明
- CSS Art（装飾的サムネイル）に `aria-hidden="true"`

---

## 11. ページ構成

### サイト構造

```
index.html              01 Landing
├── dashboard.html      02 Dashboard
├── gallery.html        03 Gallery
│   └── gallery-detail.html?id=KM-XXXX  04 Item Detail
├── icons.html          05 Icons Gallery
├── docs.html           06 Design Docs
├── settings.html       07 Settings
├── generator.html      08 Generator
├── product.html        08 Product (Sample)
├── login.html          09 Login (Sample)
├── register.html       10 Register (Sample)
├── contact.html        11 Contact (Sample)
├── pricing.html        12 Pricing (Sample)
├── profile.html        13 Profile (Sample)
├── blog.html           14 Blog (Sample)
├── analytics.html      15 Analytics (Sample)
├── inbox.html          16 Inbox (Sample)
├── errors.html         17 Error States (Sample)
└── 404.html            Error Page
```

### 各ページの役割

| ページ | 主な要素 | 特記事項 |
|---|---|---|
| **index.html** | Ticker Bar / Hero(80px) / Bento(5セル) / Accent Showcase / Manifesto | ランディング。ヒーロータイトルmax-width: 70% |
| **dashboard.html** | Stats(4枚) / 横棒チャート / Status Panel / Data Table | Sticky Topbar / ライブクロック |
| **gallery.html** | フィルターバー(7種) / 4列グリッド(100作品) | JSフィルタリング / カウンター更新 |
| **gallery-detail.html** | Artwork(square/sticky) / Metadata / Log Stream / Related(3点) | URLパラメータ?id= でID切替 |
| **icons.html** | 40アイコン全表示 / 6カテゴリ / サイズ一覧 / 使用方法 / 構成ルール | クリックでアイコン名コピー |
| **docs.html** | カラーパレット / Surface Scale / √2スケール / Motion Demo / Components | インタラクティブモーションデモ |
| **settings.html** | Accent Mode 4カード / Live Preview Panel / System Info | カード選択→即座にプレビュー反映 |
| **generator.html** | SNS画像生成 / フォーマット選択 / テーマ切替 / プレビュー | レイヤー合成によるランダム生成 |
| **product.html** | Hero / 6機能カード / メトリクス / テスティモニアル / CTA | プロダクトランディングのサンプル |
| **login.html** | KMロゴマーク / メール・パスワードフォーム | 認証UIサンプル |
| **register.html** | 3ステップ表示 / アカウント作成フォーム | 組織・ロール選択 |
| **contact.html** | お問い合わせフォーム / 優先度選択 / 連絡先情報 | 2カラムレイアウト |
| **pricing.html** | 3プラン比較 / 機能テーブル / FAQ | 月額/年額トグル |
| **profile.html** | アバター / 統計 / アクティビティフィード / スキルチャート / 設定フォーム | 2カラム構成 |
| **blog.html** | 記事本文 / 目次 / 関連記事 / タグ | エディトリアルレイアウト |
| **analytics.html** | KPI / トラフィックソース / デバイス分布 / ページ別パフォーマンス / イベントログ | Sticky Topbar / ライブタグ |
| **inbox.html** | メッセージ一覧 / フィルター / メール詳細パネル | 3ペインレイアウト |
| **errors.html** | 403/500/メンテナンス/検索結果なし/オフライン/セッション切れ/429/権限不足 | Toast・ローディング・ダイアログ含む |

### 共通ナビゲーション

`nav.js` が `<div id="km-nav">` を置き換えて注入。

```
┌─ KM Logo Mark + KINETIC MONO v2.0
├─ PAGES (01-05): Landing / Dashboard / Gallery / Item Detail / Icons
├─ SAMPLES (08-17): Product / Login / Register / Contact / Pricing / Profile / Blog / Analytics / Inbox / Errors
├─ SYSTEM (06-07): Design Docs / Settings
├─ TOOLS (08): Generator
├─ LANGUAGE: [JA 日本語] [EN English]
├─ ACCENT MODE: [Single] [Dual] [Tri] [Full]
└─ Footer: THE CLINICAL CURATOR
```

```html
<!-- 各HTMLに記述 -->
<body data-page="dashboard">  ← ページ識別子
  <div id="km-nav"></div>     ← nav.jsが置き換える
  <main class="km-main">...</main>
  <script src="js/icons.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/i18n.js"></script>
</body>
```

### Ticker Bar（Landing専用）

```
background: #000000
テキスト: 9px / weight:700 / tracking:+0.2em
色: rgba(255,255,255,0.4)
アクセント記号（●,—）: color --a1
内容: 8項目、システムのキーコンセプトを列挙
```

---

## 12. DO / DON'T

### ✅ DO

```
- Micro-Labelは必ずUPPERCASE
- 見出しのmax-widthは70%（非対称レイアウト）
- Yellow・Greenは「色面として」使い、黒文字を乗せる
- セクション分割は背景色のシフトで表現する
- Kinetic Hover: 色snap + translateX(4px) を必ずセット
- 数値・IDはJetBrains Monoで表示
- ステータスインジケーターは6×6pxの正方形ドット
- ギャラリーのカテゴリ色はborder-top 3pxで表現
```

### ❌ DON'T

```
- border-radius を使う（0px厳守）
- 白・グレー背景上にYellow / Greenをテキストで使う
- 1pxボーダーでレイアウトを区切る
- Yellowのアイコン単体で使う（文字扱いになる）
- グラデーションで奥行きを表現する（Surface Shiftで行う）
- 円形プログレスリング（横棒バーのみ）
- Plus Jakarta Sans以外のDisplayフォントを混ぜる
- スペーシングに8の倍数以外を使う
- box-shadowにcolorを使う（rgba(0,0,0,x)のみ）
```

---

## 13. 実装仕様

### ファイル構成

```
kinetic-mono/
├── index.html              ← 01 Landing
├── dashboard.html          ← 02 Dashboard
├── gallery.html            ← 03 Gallery (100作品)
├── gallery-detail.html     ← 04 Item Detail
├── icons.html              ← 05 Icons Gallery
├── docs.html               ← 06 Design Docs
├── settings.html           ← 07 Settings
├── generator.html          ← 08 Generator
├── product.html            ← Sample: Product
├── login.html              ← Sample: Login
├── register.html           ← Sample: Register
├── contact.html            ← Sample: Contact
├── pricing.html            ← Sample: Pricing
├── profile.html            ← Sample: Profile
├── blog.html               ← Sample: Blog
├── analytics.html          ← Sample: Analytics
├── inbox.html              ← Sample: Inbox
├── errors.html             ← Sample: Error States
├── 404.html                ← Error Page
├── .nojekyll               ← GitHub Pages: Jekyll無効化
├── README.md
├── README.en.md
├── DESIGN.md
├── css/
│   ├── tokens.css          ← デザイントークン全定義（最初に読む）
│   ├── base.css            ← Reset + Layout Shell + Nav + Language Toggle
│   └── components.css      ← 全UIコンポーネント
├── js/
│   ├── nav.js              ← 共有Nav注入 + Accent Modeシステム
│   ├── icons.js            ← SVGスプライトローダー + icon() API
│   └── i18n.js             ← 国際化システム（JA/EN切替）
├── icons/
│   └── km-icons.svg        ← 40アイコンのSVGスプライト
└── lang/
    ├── ja.json             ← 日本語翻訳（737キー）
    └── en.json             ← 英語翻訳（737キー）
```

### CSS読み込み順（必須）

```html
<link rel="stylesheet" href="css/tokens.css">   <!-- 1st: 変数定義 -->
<link rel="stylesheet" href="css/base.css">     <!-- 2nd: 構造 -->
<link rel="stylesheet" href="css/components.css"> <!-- 3rd: UI -->
```

### HTMLテンプレート（最小構成）

```html
<!DOCTYPE html>
<html lang="ja" data-accent="single">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE TITLE — KINETIC MONO</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body data-page="PAGE_ID">
  <div id="km-nav"></div>

  <main class="km-main">
    <!-- content with data-i18n attributes -->
    <h1 data-i18n="page.title">Page Title</h1>
  </main>

  <script src="js/icons.js"></script>
  <script src="js/nav.js"></script>
  <script src="js/i18n.js"></script>
</body>
</html>
```

### GitHub Pages デプロイ

```bash
# リポジトリ直下に配置 → Settings → Pages → main / (root)
# 公開URL: https://<username>.github.io/<repository>/
```

**必須ファイル**: `.nojekyll`（Jekyll処理を無効化）

### CSS変数命名規則

```
--palette-{color}   : 原色（直接使用しない）
--surface-{0-4}     : 背景Surface
--surface-dark      : 反転Section
--text-{1-4}        : テキスト色
--text-inv          : 反転テキスト
--a{1-6}            : セマンティックアクセント（コンポーネントはここを参照）
--on-a{1-6}         : アクセント上のテキスト色
--sp-{1-8}          : スペーシング
--t-{xs,sm,base,lg,xl,2xl,3xl,hero} : タイプスケール
--ease-{kinetic,editorial,snap}      : イージング
--dur-{instant,quick,moderate,slow} : デュレーション
--shadow-{card,raised,float}         : シャドウ
--nav-w             : ナビ幅 (240px)
--radius            : ボーダー半径 (0px)
```

---

## 14. アイコンシステム

### コンセプト — "Kinetic Glyphs"

KINETIC MONO 専用のオリジナルアイコンセット。既存のアイコンライブラリ（Feather、Heroicons等）を使わず、このデザインシステムの哲学を体現するアイコンを一から設計した。

### 構築ルール

| プロパティ | 値 | 理由 |
|---|---|---|
| viewBox | `0 0 24 24` | 24px を基準サイズとする |
| セーフゾーン | 1px 内側（描画領域: 1,1 〜 23,23） | アイコン同士の整列 |
| stroke-width | 1.5（標準）/ 2（強調） | 2段階のみ |
| stroke-linecap | `square` | **丸キャップ禁止**（border-radius: 0px に準拠） |
| stroke-linejoin | `miter` | **丸ジョイン禁止** |
| fill | `none`（デフォルト）、`currentColor`（ステータス/アクティブ時） | — |
| 色 | 常に `currentColor` | CSS で着色（アクセントモード対応） |
| 角度 | 0°、45°、90° のみ | 任意角度禁止 |
| グリッド | 整数 or 0.5 単位のみ | ピクセルスナップ |
| border-radius | **絶対に 0** | `rx`/`ry` 属性禁止 |

### サイズスケール

```css
.km-icon--xs  { 12px }  /* マイクロラベル、テーブルステータス */
.km-icon--sm  { 16px }  /* ボタン内、ナビリンク */
.km-icon--md  { 20px }  /* スタンドアロン */
.km-icon--lg  { 24px }  /* Toast、セクションヘッダー */
.km-icon--xl  { 32px }  /* エラーページ、空状態 */
.km-icon--2xl { 48px }  /* ヒーロー、大型表示 */
```

### アイコン一覧（72個）

#### A. ナビゲーション (8)
`arrow-right` `arrow-left` `arrow-up` `arrow-down` `chevron-right` `chevron-down` `external` `menu`

#### B. ステータス (6)
`check` `close` `warning` `info` `dot` `live`

#### C. アクション (9)
`search` `filter` `sort` `refresh` `copy` `edit` `delete` `add` `minus`

#### D. データ/コンテンツ (6)
`trend-up` `trend-down` `chart` `grid` `list` `calendar`

#### E. システム/UI (8)
`settings` `user` `mail` `lock` `eye` `download` `upload` `link`

#### F. フィードバック/状態 (4)
`loading` `empty` `error-page` `notification`

#### G. ソーシャル/コミュニケーション (6)
`heart` `bookmark` `share` `comment` `send` `at`

#### H. ファイル/ドキュメント (5)
`file` `folder` `image` `archive` `clipboard`

#### I. 時間/スケジュール (3)
`clock` `timer` `history`

#### J. トグル/コントロール (5)
`toggle-on` `toggle-off` `sliders` `expand` `collapse`

#### K. セキュリティ/認証 (4)
`shield` `key` `unlock` `logout`

#### L. デバイス/ディスプレイ (3)
`monitor` `phone` `printer`

#### M. 開発/コード (4)
`code` `terminal` `database` `server`

#### N. レイアウト/ビュー (4)
`sidebar` `columns` `layers` `maximize`

#### O. インジケーター/その他 (10)
`star` `pin` `tag` `hash` `zap` `compass` `crop` `palette` `eye-off` `power` `globe`

### 使い方

```html
<!-- 基本 -->
<svg class="km-icon" aria-hidden="true">
  <use href="#km-icon-arrow-right"></use>
</svg>

<!-- サイズ指定 -->
<svg class="km-icon km-icon--lg" aria-hidden="true">
  <use href="#km-icon-check"></use>
</svg>

<!-- アクセントカラー -->
<svg class="km-icon km-icon--a1" aria-hidden="true">
  <use href="#km-icon-dot"></use>
</svg>

<!-- セマンティックカラー -->
<svg class="km-icon km-icon--success" aria-hidden="true">
  <use href="#km-icon-check"></use>
</svg>

<!-- Filled（ステータスドット等） -->
<svg class="km-icon km-icon--xs km-icon--fill" aria-hidden="true">
  <use href="#km-icon-dot"></use>
</svg>

<!-- アニメーション: 機械的回転 -->
<svg class="km-icon km-icon--spin" aria-hidden="true">
  <use href="#km-icon-loading"></use>
</svg>
```

### モディファイア一覧

| クラス | 用途 |
|---|---|
| `.km-icon--fill` | 塗りつぶし（ステータスドット、アクティブ状態） |
| `.km-icon--a1` 〜 `--a6` | アクセントカラー適用 |
| `.km-icon--success/warning/error/info` | セマンティックカラー |
| `.km-icon--spin` | 90°ステップ回転アニメーション |
| `.km-icon--pulse` | パルスアニメーション（ライブ表示） |

### 実装方式

| ファイル | 役割 |
|---|---|
| `icons/km-icons.svg` | SVG スプライト（全アイコンを `<symbol>` で格納） |
| `js/icons.js` | スプライトを `fetch()` で読み込み、`document.body` に注入 |
| `css/components.css` | `.km-icon` クラスシステム（サイズ、カラー、アニメーション） |

### JS API

```javascript
// KineticMono.icon(name, options) — アイコン要素を生成
const icon = KineticMono.icon('arrow-right', { size: 'lg', cls: 'km-icon--a1' });
element.appendChild(icon);
```

### DO / DON'T

| DO | DON'T |
|---|---|
| `aria-hidden="true"` を常に付ける（装飾アイコン） | テキスト無しのボタンに `aria-label` なしで使う |
| `currentColor` で CSS 側から着色する | SVG 内に直接色を指定する |
| `square` linecap / `miter` linejoin | `round` linecap / `round` linejoin |
| 0°, 45°, 90° の直線のみ | 曲線・任意角度のパス |
| 整数 or 0.5 座標 | 端数座標 |

---

*Kinetic Mono v2.0 — The Clinical Curator*
*変えてはいけないものと、変えてよいものが明確に分離されている*
