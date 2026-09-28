---
title: Percentage Increase Formula in Excel
description: Calculate percentage increase in Excel with cell formulas for before-and-after values, formatted results, and zero-value errors.
summary: Use a simple Excel formula to compare old and new values across one row or an entire column.
order: 4
featured: true
---

Excel can calculate a percentage increase with one formula. Put the original value in one cell, the new value in another, and divide the change by the original value.

## Excel percentage increase formulas

| What you want to calculate | Excel formula |
| --- | --- |
| Percentage increase from `A2` to `B2` | `=(B2-A2)/A2` |
| New value after the rate in `B2` | `=A2*(1+B2)` |
| Increase amount only | `=A2*B2` |
| Percentage increase with a zero check | `=IF(A2=0,"Undefined",(B2-A2)/A2)` |

Use Percentage formatting for a rate result. Use Number or Currency formatting when the formula returns an amount.

## Basic Excel formula

If the original value is in `A2` and the new value is in `B2`, enter this in `C2`:

```text
=(B2-A2)/A2
```

Format cell `C2` as Percentage. If `A2` contains 240 and `B2` contains 300, Excel displays **25%**.

Excel stores 25% as 0.25. Do not multiply the formula by 100 if the result cell already uses Percentage formatting.

If the new value is lower than the original, the formula returns a negative percentage. For example, a move from 300 to 240 returns −20%, which means a 20% decrease.

## Fill the formula down a column

Select `C2`, then drag the fill handle down. Excel adjusts each row automatically:

- Row 3 becomes `(B3-A3)/A3`
- Row 4 becomes `(B4-A4)/A4`
- Each result uses its own original value

Keep headings such as `Original`, `New`, and `Increase %` in the first row.

## Use one increase rate for many values

If the percentage rate is stored in `E1`, lock that cell with dollar signs:

```text
=A2*(1+$E$1)
```

When you fill the formula down, `A2` changes to `A3`, `A4`, and later rows. `$E$1` stays fixed, so every row uses the same rate.

For example, if `E1` contains 6%, a value of 250 in `A2` becomes 265.

## Handle an original value of zero

Dividing by zero returns `#DIV/0!`. That is mathematically appropriate because percentage increase from zero is undefined. If you prefer a message, use:

```text
=IF(A2=0,"Undefined",(B2-A2)/A2)
```

Do not replace the error with 0%, because that would state a result that does not exist. See [percentage increase from zero](/guides/percentage-increase-from-zero/) for the reasoning.

## Calculate the new value instead

If `A2` is the starting number and `B2` is an increase rate formatted as a percentage:

```text
=A2*(1+B2)
```

A starting value of 1,500 with 8% in `B2` returns 1,620.

## Check the formula result

Excel formulas are convenient for a table, while the site calculator shows the difference, multiplier, and working for one comparison. That makes it useful for checking whether a spreadsheet row is set up correctly.

<a class="tool-link" href="/#calculator">Check it with the Percentage Increase Calculator</a>

Google Sheets uses the same formulas. See the [Google Sheets percentage increase guide](/guides/percentage-increase-google-sheets/) for formatting and array examples.
