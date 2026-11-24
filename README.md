[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/tunnelmoon/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![Reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/tunnelmoon/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

# Two Lines to Your Past Self

Entry for the [make.fun bounty](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca): two lines, a warning to my past self about one specific moment, and one sentence on why it mattered.

## The entry

> Don't send that 2am email to your boss, the one you typed in the dark with the caps lock on.
> That one paragraph cost you the promotion you spent three years earning, and you spent the next year apologizing for it.

Line one names one concrete moment: 2am, in the dark, caps lock on, about to hit send on an email to the boss. Line two traces the cause and effect: one paragraph, a promotion three years in the making, a year of apologizing after it.

## How it runs

`main.ts` (Node 22, stdlib only) embeds the entry, validates the gate (1 to 280 characters, not only whitespace), writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, and verifies the write with a round-trip read-back check.
