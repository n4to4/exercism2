module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year = divisible 400 || divisible 4 && not (divisible 100)
    where divisible n = year `rem` n == 0