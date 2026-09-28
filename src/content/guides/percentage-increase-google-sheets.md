---
title: Percentage Increase Formula in Google Sheets
description: Calculate percentage increase in Google Sheets, format the result correctly, and apply the formula to multiple rows.
summary: Compare old and new values in Sheets with a clear formula and sensible handling for zero baselines.
order: 5
featured: false
---

Google Sheets uses the same percentage increase formula as ordinary arithmetic. The spreadsheet performs the division; you choose how the result is displayed.

## Formula for one row

With the original number in `A2` and the new number in `B2`, use:

```text
=(B2-A2)/A2
```

Select the result cell and choose **Format → Number → Percent**. For a change from 75 to 90, the result is **20%**.

## Avoid multiplying twice

Percentage formatting already converts 0.20 to 20%. If your formula multiplies by 100 and the cell also uses percentage formatting, Sheets displays 2,000%.

Use either:

- `(B2-A2)/A2` with Percentage formatting, or
- `((B2-A2)/A2)*100` with ordinary Number formatting.

The first choice is usually easier to reuse.

## Apply the formula to many rows

Double-click the small square at the lower-right corner of the selected formula cell. Sheets fills the formula alongside neighboring data.

For a column formula, you can use:

```text
=ARRAYFORMULA(IF(A2:A="","",IF(A2:A=0,"Undefined",(B2:B-A2:A)/A2:A)))
```

This leaves empty rows blank and labels zero-baseline rows as undefined.

## Find a new value after an increase

If `A2` contains the starting value and `B2` contains a percentage such as 7.5%, enter:

```text
=A2*(1+B2)
```

A value of 800 becomes 860 after a 7.5% increase.

<a class="tool-link" href="/#calculator">Verify a row with the Percentage Increase Calculator</a>

For desktop spreadsheet steps, visit the [Excel percentage increase guide](/guides/percentage-increase-excel/). If your first value is zero, read [why no percentage increase exists from zero](/guides/percentage-increase-from-zero/).
