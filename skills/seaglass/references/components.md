# Components

Markup patterns for every Seaglass component. Classes and attributes shown are the whole API; states come from native attributes (`disabled`, `checked`, `aria-*`) wherever possible.

Icons are inline SVG with `class="icon"` (24×24 viewBox, stroke-based, `aria-hidden="true"`).

## Layout

```html
<div class="stack" style="--gap: 16px">…</div>
<div class="row" data-justify="between">…</div>
<div class="grid" style="--min: 280px">…</div>
<div class="card">…</div>
<hr class="divider">
<div class="divider"><span>または</span></div>
```

## Text

`h1`–`h4`, `p`, `a`, `code`, `kbd` are styled globally. Helpers: `.muted`, `.small`, `.amount`.

## Button

```html
<button class="btn" data-variant="primary">保存する</button>
<button class="btn" data-variant="secondary">下書き</button>
<button class="btn" data-variant="ghost">キャンセル</button>
<button class="btn" data-variant="danger">削除</button>

<button class="btn" data-variant="secondary" data-size="sm">小さいボタン</button>
<button class="btn" data-variant="primary"><svg class="icon">…</svg>支出を追加</button>
<button class="btn" data-variant="ghost" data-icon aria-label="編集" data-tooltip="編集"><svg class="icon">…</svg></button>
<button class="btn" data-variant="primary" data-loading>読み取り中</button>
<button class="btn" data-variant="primary" disabled>送信できません</button>
```

`data-loading` hides the label and shows a spinner; keep the label text for screen readers.

## Menu

Popover API + CSS anchor positioning. Give each pair a unique anchor name.

```html
<button class="btn" data-variant="ghost" data-icon aria-label="操作" popovertarget="m1" style="anchor-name: --m1">…</button>
<div class="menu" id="m1" popover style="position-anchor: --m1">
  <button class="menu-item" popovertarget="m1" popovertargetaction="hide"><svg class="icon">…</svg>編集<kbd>E</kbd></button>
  <div class="menu-sep"></div>
  <button class="menu-item" data-tone="danger"><svg class="icon">…</svg>削除</button>
</div>
```

## Chip

```html
<button class="chip" aria-pressed="true">すべて</button>
<button class="chip" aria-pressed="false">食事</button>
<span class="chip">はると<button type="button" data-remove aria-label="はるとを外す">×</button></span>
```

Toggling `aria-pressed` and removing tags is app logic.

## Field and input

```html
<div class="field">
  <label for="email">メールアドレス<span class="optional">任意</span></label>
  <input class="input" id="email" type="email" placeholder="you@example.com">
  <span class="hint">精算のお知らせが届きます</span>
</div>

<div class="field" data-invalid>
  <label for="amount">金額</label>
  <div class="input-affix"><span>¥</span><input class="input" id="amount" inputmode="numeric" aria-describedby="amount-hint" aria-invalid="true"></div>
  <span class="hint" id="amount-hint">数字だけで入力してください</span>
</div>

<div class="input-affix"><svg class="icon">…</svg><input class="input" type="search" placeholder="店名やメモで探す"></div>
<textarea class="input"></textarea>
<input class="input" type="date">
```

For a group label without a single control, use `<span class="label">` inside `.field`, or `fieldset` + `legend`.

## Select

```html
<select class="input">
  <option>JPY 日本円</option>
  <option selected>USD 米ドル</option>
</select>
```

Chromium renders a frosted custom picker (`appearance: base-select`); other browsers keep the native list with a themed chevron. Don't build a custom dropdown.

## Dropzone

```html
<label class="dropzone">
  <svg class="icon">…</svg>
  <strong>画像をここに置く</strong>
  <span class="small muted">またはクリックして選ぶ</span>
  <input type="file" accept="image/*">
</label>
```

Set `data-over` on the label during `dragenter`/`dragover`, remove it on `dragleave`/`drop`.

## Check, radio, switch

```html
<label class="check"><input type="checkbox" checked>端数は支払った人が持つ</label>
<label class="check"><input type="radio" name="split" checked>均等</label>
<label class="switch"><input type="checkbox" role="switch" checked>通知を受け取る</label>
```

`seaglass.js` replays the tumble/stretch motion on change.

## Range

```html
<input class="range" type="range" min="0" max="30" value="15" aria-label="チップの割合">
```

`seaglass.js` keeps the fill (`--v`) in sync. Show the value next to it yourself.

## Tabs

Works for real tabs (`role="tab"` + `aria-selected`) and segmented buttons (`aria-pressed`). Changing the attribute moves the indicator automatically.

```html
<div class="tabs" role="tablist">
  <button role="tab" aria-selected="true">すべて</button>
  <button role="tab" aria-selected="false">未精算</button>
</div>
<div class="tabs" data-size="sm">
  <button aria-pressed="true">週</button>
  <button aria-pressed="false">月</button>
</div>
```

## Nav, breadcrumb, pagination

```html
<nav class="nav">
  <a class="nav-item" href="/trips" aria-current="page"><svg class="icon">…</svg>旅の一覧<span class="badge" data-tone="warning">2</span></a>
  <a class="nav-item" href="/members"><svg class="icon">…</svg>メンバー</a>
</nav>

<ol class="breadcrumb">
  <li><a href="/trips">旅の割り勘</a></li>
  <li><span aria-current="page">石垣島 3 泊 4 日</span></li>
</ol>

<nav class="pagination" aria-label="ページ">
  <a class="page" aria-label="前のページ" aria-disabled="true">‹</a>
  <a class="page" href="?p=1" aria-current="page">1</a>
  <a class="page" href="?p=2">2</a>
  <span class="page-gap">…</span>
  <a class="page" href="?p=12">12</a>
</nav>
```

## Data display

```html
<div class="stat">
  <span class="stat-label">今月の支出</span>
  <span class="stat-value">¥84,200</span>
  <span class="stat-delta" data-tone="warning">先月より +12%</span>
</div>

<dl class="kv"><dt>期間</dt><dd>10 月 2 日〜5 日</dd></dl>

<ul class="list">
  <li>
    <span class="avatar" data-glass="olive">み</span>
    <div><strong>民宿 なかゆくい</strong><span class="meta">みおが支払い</span></div>
    <span class="amount">¥64,000</span>
  </li>
</ul>

<div class="table-scroll">
  <table class="table">
    <thead><tr><th>メンバー</th><th class="num">支払った</th></tr></thead>
    <tbody><tr><td>はると</td><td class="num">¥36,800</td></tr></tbody>
  </table>
</div>

<span class="badge" data-tone="success">精算済み</span>
<span class="badge">下書き</span>

<span class="avatar" data-glass="aqua" data-size="sm">は</span>
<div class="avatar-group">…avatars…</div>

<button class="btn" data-variant="ghost" data-icon aria-label="詳細" data-tooltip="10 月 11 日 9 時のレート">…</button>

<details class="accordion">
  <summary>端数はどう扱われますか?</summary>
  <div class="accordion-body">…</div>
</details>
```

## Feedback

```html
<div class="callout" data-tone="warning">
  <svg class="icon">…</svg>
  <div><strong>あやさんの精算が残っています</strong>旅行の終了から 7 日が過ぎました。</div>
</div>

<div class="progress" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-label="予算の消化"><span style="--v: 68"></span></div>
<div class="progress" role="progressbar" aria-label="取得中"><span></span></div>

<span class="spinner" role="status" aria-label="読み込み中"></span>
<span class="skeleton" style="width: 60%"></span>
```

At 100 the progress bar turns green; also change the visible label (e.g. 「完了」) so color isn't the only signal. Omit `aria-valuenow` for indeterminate.

## Dialog, sheet, toast

```html
<dialog class="dialog" aria-labelledby="d-title">
  <form method="dialog" class="stack" style="--gap: 16px">
    <h3 id="d-title">民宿 なかゆくい を削除しますか?</h3>
    <p class="muted small">全員の精算額が計算し直されます。</p>
    <div class="row" data-justify="end">
      <button class="btn" data-variant="ghost" value="cancel">キャンセル</button>
      <button class="btn" data-variant="danger" value="delete">削除する</button>
    </div>
  </form>
</dialog>

<dialog class="sheet" aria-labelledby="s-title">…same form pattern…</dialog>

<div class="toast" role="status" aria-live="polite" data-open>
  <span>支出を削除しました</span>
  <button class="btn" data-variant="ghost" data-size="sm">元に戻す</button>
</div>
```

Open with `showModal()`; read the result from `returnValue`. Toggle `data-open` on the toast and remove it after ~3 seconds.

## Empty state

```html
<div class="empty">
  <span class="empty-mark" aria-hidden="true"></span>
  <strong>まだ支出がありません</strong>
  <p class="small muted">最初の支出を追加すると、精算額がここに出ます。</p>
  <button class="btn" data-variant="primary" data-size="sm">支出を追加</button>
</div>
```
