# KINETIC MONO v2.0

## Design System Specification

> **"変えてはいけないものと、変えてよいものが明確に分離されている"**
>
> The Clinical Curator — ブルータリズム × ラグジュアリー精密さ

**Live Demo**: [https://suzuki-junya108.github.io/kinetic-mono/](https://suzuki-junya108.github.io/kinetic-mono/)

[English / 英語版](README.md)

---

## 目次

1. [コンセプト](#1-コンセプト)
2. [ページ構成](#pages)
3. [カラーシステム](#2-カラーシステム)
4. [タイポグラフィ](#3-タイポグラフィ)
5. [スペーシング](#4-スペーシング)
6. [モーション](#5-モーション)
7. [レイアウト](#6-レイアウト)
8. [Elevationとシャドウ](#7-elevationとシャドウ)
9. [コンポーネント](#8-コンポーネント)
10. [アクセントモードシステム](#9-アクセントモードシステム)
11. [アクセシビリティルール](#10-アクセシビリティルール)
12. [DO / DON'T](#12-do--dont)
13. [ファイル構成と実装仕様](#13-実装仕様)

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

## Pages

| # | Page | Description |
|---|------|-------------|
| 01 | `index.html` | Landing — hero, core principles bento, accent showcase |
| 02 | `dashboard.html` | Dashboard — stats, bar chart, activity feed, data table |
| 03 | `gallery.html` | Gallery — filterable grid of generative works |
| 04 | `gallery-detail.html` | Item Detail — single work with metadata sidebar |
| 05 | `docs.html` | Design Docs — colors, typography, motion, components |
| 06 | `settings.html` | Settings — accent mode configuration with live preview |

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
深い ←────────────────────────────────────→ 浅い（手前）

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

```css
.km-bento { display: grid; gap: 24px; }
.km-bento--2col { grid-template-columns: repeat(2, 1fr); }
.km-bento--3col { grid-template-columns: repeat(3, 1fr); }
.km-bento--4col { grid-template-columns: repeat(4, 1fr); }
.km-cell--wide  { grid-column: span 2; }
.km-cell--full  { grid-column: 1 / -1; }
```

**ゼロラジアス厳守**: すべてのセル・カードは `border-radius: 0`。

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
```

### Stat Card / 横棒チャート / Data Table / Gallery Card

詳細な仕様は [DESIGN.md](DESIGN.md) を参照してください。

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

| Mode | Colors | Use case |
|------|--------|----------|
| **SINGLE** (default) | すべて `#FFEA00` | 権威、統一感、ブランド主張最大 |
| **DUAL** | Yellow + Blue | Primary（アクション）vs Secondary（情報）の機能分化 |
| **TRI** | Yellow + Blue + Red | アクション / 情報 / 警告の三色意味付け |
| **FULL** | All 6 colors | 全6色。エディトリアル、ギャラリー、カテゴリ分類向き |

### JavaScript API

```javascript
window.KineticMono.setAccent('dual')   // 'single' | 'dual' | 'tri' | 'full'
window.KineticMono.getAccent()         // returns current mode string
```

---

## 10. アクセシビリティルール

### 白背景における色の使い方

| カラー | on White コントラスト | テキストとして使用 |
|---|---|---|
| Yellow `#FFEA00` | 1.07:1 | **禁止**（色面専用） |
| Green `#00C853` | 2.9:1 | **禁止**（色面専用） |
| Orange `#FF6B00` | 3.0:1 | **禁止**（色面専用） |
| Red `#FF2D2D` | 4.8:1 | 可（大文字推奨） |
| Blue `#0057FF` | 8.2:1 | 可 |
| Purple `#8B00FF` | 7.5:1 | 可 |

---

## 12. DO / DON'T

### DO

- Micro-Labelは必ずUPPERCASE
- 見出しのmax-widthは70%（非対称レイアウト）
- Yellow・Greenは「色面として」使い、黒文字を乗せる
- セクション分割は背景色のシフトで表現する
- Kinetic Hover: 色snap + translateX(4px) を必ずセット
- 数値・IDはJetBrains Monoで表示
- ステータスインジケーターは6×6pxの正方形ドット

### DON'T

- border-radius を使う（0px厳守）
- 白・グレー背景上にYellow / Greenをテキストで使う
- 1pxボーダーでレイアウトを区切る
- グラデーションで奥行きを表現する（Surface Shiftで行う）
- Plus Jakarta Sans以外のDisplayフォントを混ぜる
- スペーシングに8の倍数以外を使う

---

## 13. 実装仕様

### ファイル構成

```
kinetic-mono/
├── index.html
├── dashboard.html
├── gallery.html
├── gallery-detail.html
├── docs.html
├── settings.html
├── 404.html
├── .nojekyll
├── DESIGN.md           ← 完全なデザイン仕様書
├── README.md           ← English (default)
├── README.ja.md        ← 日本語版
├── css/
│   ├── tokens.css      ← デザイントークン全定義
│   ├── base.css        ← Reset + Layout Shell + Nav
│   └── components.css  ← 全UIコンポーネント
└── js/
    └── nav.js          ← 共有Nav注入 + Accent Modeシステム
```

### CSS読み込み順（必須）

```html
<link rel="stylesheet" href="css/tokens.css">     <!-- 1st: 変数定義 -->
<link rel="stylesheet" href="css/base.css">       <!-- 2nd: 構造 -->
<link rel="stylesheet" href="css/components.css"> <!-- 3rd: UI -->
```

### CSS変数命名規則

```
--palette-{color}   : 原色（直接使用しない）
--surface-{0-4}     : 背景Surface
--a{1-6}            : セマンティックアクセント（コンポーネントはここを参照）
--on-a{1-6}         : アクセント上のテキスト色
--sp-{1-8}          : スペーシング
--t-{xs〜hero}      : タイプスケール
--ease-{kinetic,editorial,snap} : イージング
--dur-{instant,quick,moderate,slow} : デュレーション
--shadow-{card,raised,float} : シャドウ
```

### Deploy

GitHub Pagesで公開中: [https://suzuki-junya108.github.io/kinetic-mono/](https://suzuki-junya108.github.io/kinetic-mono/)

---

*Kinetic Mono v2.0 — The Clinical Curator*
*変えてはいけないものと、変えてよいものが明確に分離されている*
