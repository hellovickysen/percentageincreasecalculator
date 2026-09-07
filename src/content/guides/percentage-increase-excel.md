---
title: Percentage Increase Formula in Excel
description: Calculate percentage increase in Excel with cell formulas for before-and-after values, formatted results, and zero-value errors.
summary: Use a simple Excel formula to compare old and new values across one row or an entire column.
order: 4
featured: true
---

Excel can calculate percentage increase with one formula. Put the original value in one cell and the new value in another.

## Basic Excel formula

If the original value is in `A2` and the new value is in `B2`, enter this in `C2`:

```text
=(B2-A2)/A2
```

Format cell `C2` as Percentage. If `A2` contains 240 and `B2` contains 300, Excel displays **25%**.

Excel stores 25% as 0.25. Do not multiply the formula by 100 if the result cell already uses Percentage formatting.

## Fill the formula down a column

Select `C2`, then drag the fill handle down. Excel adjusts each row automatically:

- Row 3 becomes `(B3-A3)/A3`
- Row 4 becomes `(B4-A4)/A4`
- Each result uses its own original value

Keep headings such as `Original`, `New`, and `Increase %` in the first row.

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

<a class="tool-link" href="/#calculator">Check one Excel result in the calculator</a>

Google Sheets uses the same formulas. See the [Google Sheets percentage increase guide](/guides/percentage-increase-google-sheets/) for formatting and array examples.
